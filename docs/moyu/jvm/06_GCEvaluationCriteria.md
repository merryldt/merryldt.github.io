---
title: 基本 GC 的评价方法
subtitle: 基本 GC的一些指标
category:
  - JVM
tag:
  - 摸鱼
order: 6
---


# GC的两个核心指标
## 延迟(Latency):  
最大停顿时间，即垃圾收集过程中一次STW的最长时间，越短越好，一定程度上可以接受频次的增大.
### 吞吐量(Throughput):
应用系统的生命周期内，由于GC线程会占用应用程序当前可用的CPU 时钟周期，吞吐量即为应用程序有效花费的时间占系统总运行时间的百分比。  
例如： 系统运行了100min,GC耗时1min,则系统吞吐量为99%,吞吐量优先的收集器可以接受较长的停顿。

# TP9999 图示
![p99](./image/06image.png)
p99 即为**一次停顿的时间不超过应用服务的 TP9999，GC 的吞吐量不小于 99.99%**。  
## 例子：
假设某个服务 A 的 TP9999 为 80 ms，平均 GC 停顿为 30 ms，那么该服务的最大停顿时间最好不要超过 80 ms，GC 频次控制在 5 min 以上一次。如果满足不了，那就需要调优或者通过更多资源来进行并联冗余。  
1/10000 = (1(次数)* x (平均GC停顿时间)) /  y(总时间)   
5min 等于 5*60*1000 = 300000毫秒；30 /300000= 1/10000


# 读懂 GC Cause
分析 GC 的问题，先要读懂 GC Cause，即 JVM 什么样的条件下选择进行 GC 操作  
重点需要关注的几个GC Cause：

## System.gc()： 
手动触发GC操作。

## CMS： 
CMS GC 在执行过程中的一些动作，重点关注 CMS Initial Mark 和 CMS Final Remark 两个 STW 阶段。

## Promotion Failure： 
Old 区没有足够的空间分配给 Young 区晋升的对象（即使总可用内存足够大）。

## Concurrent Mode Failure： 
CMS GC 运行期间，Old 区预留的空间不足以分配给新的对象，此时收集器会发生退化，严重影响 GC 性能，下面的一个案例即为这种场景。

## GCLocker Initiated GC： 
如果线程执行在 JNI 临界区时，刚好需要进行 GC，此时 GC Locker 将会阻止 GC 的发生，同时阻止其他线程进入 JNI 临界区，直到最后一个线程退出临界区时触发一次 GC。

# 判断是不是 GC 引发的问题？
在一次 GC 问题处理的过程中，如何判断是 GC 导致的故障，还是系统本身引发 GC 问题？

## GC 耗时增大、线程 Block 增多、慢查询增多、CPU 负载高等四个表象，如何判断哪个是根因？
- **时序分析**： 先发生的事件是根因的概率更大，通过监控手段分析各个指标的异常时间点，还原事件时间线，如先观察到 CPU 负载高（要有足够的时间 Gap），那么整个问题影响链就可能是：CPU 负载高 -> 慢查询增多 -> GC 耗时增大 -> 线程Block增多 -> RT 上涨。

- **概率分析**： 使用统计概率学，结合历史问题的经验进行推断，由近到远按类型分析，如过往慢查的问题比较多，那么整个问题影响链就可能是：慢查询增多 -> GC 耗时增大 -> CPU 负载高 -> 线程 Block 增多 -> RT上涨。

- **实验分析**： 通过故障演练等方式对问题现场进行模拟，触发其中部分条件（一个或多个），观察是否会发生问题，如只触发线程 Block 就会发生问题，那么整个问题影响链就可能是：线程Block增多 -> CPU 负载高 -> 慢查询增多 -> GC 耗时增大 -> RT 上涨。

- **反证分析**： 对其中某一表象进行反证分析，即判断表象的发不发生跟结果是否有相关性，例如我们从整个集群的角度观察到某些节点慢查和 CPU 都正常，但也出了问题，那么整个问题影响链就可能是：GC 耗时增大 -> 线程 Block 增多 -> RT 上涨。
## 相应的问题，如何观察？
### CPU 负载高：
需要用火焰图看下热点
### 慢查询增多
看下 DB 情况
### 线程 Block 引起
看下锁竞争的情况

# GC 问题分类
- **Unexpected GC**： 意外发生的 GC，实际上不需要发生，我们可以通过一些手段去避免。

Space Shock： 空间震荡问题，参见“场景一：动态扩容引起的空间震荡”。
Explicit GC： 显示执行 GC 问题，参见“场景二：显式 GC 的去与留”。
- **Partial GC**： 部分收集操作的 GC，只对某些分代/分区进行回收。

    1. Young GC： 分代收集里面的 Young 区收集动作，也可以叫做 Minor GC。

        - ParNew： Young GC 频繁，参见“场景四：过早晋升”。
    2. Old GC： 分代收集里面的 Old 区收集动作，也可以叫做 Major GC，有些也会叫做 Full GC，但其实这种叫法是不规范的，在 CMS 发生 Foreground GC 时才是 Full GC，CMSScavengeBeforeRemark 参数也只是在 Remark 前触发一次Young GC。

        1. CMS： Old GC 频繁，参见“场景五：CMS Old GC 频繁”。
        2. CMS： Old GC 不频繁但单次耗时大，参见“场景六：单次 CMS Old GC 耗时长”。
- **Full GC**： 全量收集的 GC，对整个堆进行回收，STW 时间会比较长，一旦发生，影响较大，也可以叫做 Major GC，参见“场景七：内存碎片&收集器退化”。

- **MetaSpace** ： 元空间回收引发问题，参见“场景三：MetaSpace 区 OOM”。

- **Direct Memory**： 直接内存（也可以称作为堆外内存）回收引发问题，参见“场景八：堆外内存 OOM”。

- **JNI**： 本地 Native 方法引发问题，参见“场景九：JNI 引发的 GC 问题”。
# 引入
[服务器的性能参数](09002_ServerPerformanceParameters.md)