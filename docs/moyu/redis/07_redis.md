---
title: 07) redis分布式锁
subtitle: redis分布式锁
category:
  - redis
tag:
  - 摸鱼
order: 7
---
## 需要了解的问题
1. 什么时候需要分布式锁？
2. 加、解锁的代码位置有讲究么？
3. 如何避免出现锁再也⽆法删除？「」
4. 超时时间设置多少合适呢？
5. 如何避免锁被其他线程释放
6. 如何实现重⼊锁？
7. 主从架构会带来什么安全问题？
8. 什么是 Redlock
9. Redisson 分布式锁最佳实战
10. 看⻔狗实现原理

## 什么时候需要分布式锁？
- 为了并发问题；
- 重复请求；
## 使用分布式锁需要考虑的问题
1. 锁加在什么地方
``` java
    public void createOrder() {
        try {
            // 加锁
            redisLock.lock();
            // 业务逻辑处理
            ...
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 释放锁
            redisLock.unlock();
        }
    }
```
2. 超时设置   
 目的：为了解决锁一直被占用的问题。
    - **需要正确设置锁超时的时间**；  
       1. 在测试环境多次测试，压测多轮，计算出平均**执行时间**m。
       2. 锁的超时时间设置为平均执行时间的5倍左右，为程序执行期间可能发生的网络IO操作、GC、网络延迟等。留点buffer。
3. 释放了不是自己加的锁
4. 锁续期   
    锁快过期，但是业务逻辑还没执行完成；需要给锁重新设置过期时间。   
    Redisson 可以自动完成；
