---
title: 06) 布隆过滤器
subtitle: 布隆过滤器
category:
  - redis
tag:
  - 摸鱼
order: 6
---


## 使用场景
你遇到数据量⼤，⼜需要去重的时候就可以考虑布隆过滤器

- 解决 Redis 缓存穿透问题（⾯试重点）；
- 邮件过滤，使⽤布隆过滤器实现邮件⿊名单过滤；
- 触发过的事件,不触发；

## 定义

- 布隆过滤器 (Bloom Filter)是由 Burton Howard Bloom 于 1970 年提出，它是⼀种 space efficient 的概率型数据结构，⽤于判断⼀个元素是否在集合中。  
- 当布隆过滤器说，某个数据存在时，这个数据可能不存在；当布隆过滤器说，某个数据不存在时，那么这个数据⼀定不存在。  
- 哈希表也能⽤于判断元素是否在集合中，但是布隆过滤器只需要哈希表的 1/8 或 1/4 的空间复杂度就能完成同样的问题。  
- 布隆过滤器可以插⼊元素，但不可以删除已有元素。  
- 其中的元素越多，false positive rate(误报率)越⼤，但是 false negative (漏报)是不可能的。

## 原理
BloomFilter 的算法
1. 首先分配一块内存空间做bit 数组，数组的bit位初始值全部设为0.
2. 加入元素时，采用k个相互独立的Hash 函数计算，然后将元素Hash 映射的K个位置全部设置为1.
3. 检测key是否存在，仍然用这k个Hash函数计算出k个位置，如果位置全部为1，则表明key存在，否则不存在。

### 误判率是为甚么？
**哈希函数会出现碰撞，所以布隆过滤器会存在误判**
- 误判率是指： BloomFilter判断某个key存在，但它实际不存在的概率，因为它存的是key的Hash值，而非key的值。
- 所以有概率存在这样的 key，它们内容不同，但多次 Hash 后的 Hash 值都相同

*对于 BloomFilter 判断不存在的 key ，则是 100% 不存在的，反证法，如果这个 key 存在，那它每次 Hash 后对应的 Hash 值位置肯定是 1，⽽不会是 0。布隆过滤器判断存在不⼀定真的存在。*

### 为什么不允许删除元素呢？
- 删除意味着需要将对应的 k 个 bits 位置设置为 0，其中有可能是其他元素对应的位。
- 因此 remove 会引⼊ false negative，这是绝对不被允许的

## 优劣
### 优点：
1. 支持海量数据场景下高效判断元素是否存在
2. 存储空间小，并且节省空间，不存储数据本身，仅存储hash结果取模运算后的位标记
### 缺点：
1. 不能删除；
2. 存在误判；
3. 容量越大，hash碰撞的概率变大

## 实现方式：

### Google开源的Guava自带布隆过滤器

单机

### redis(redisson)
redis 需要安装插件才可以。阿里云的redis 应该是支持的。
分布式 redisson

