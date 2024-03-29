---
title: 二叉堆
subtitle: 二叉堆
category:
  - 算法 二叉堆
tag:
  - 摸鱼
order: 1
---



## 二叉堆

二叉堆在逻辑上其实是一种特殊的二叉树（完全二叉树），只不过存储在数组里。一般的链表二叉树，我们操作节点的指针，而在数组里，我们把数组索引作为指针：

## 两种类型: 最大堆和最小堆：

- 最大堆的性质是：每个节点都大于等于它的两个子节点;
- 最小堆的性质是：每个节点都小于等于它的子节点。

## 两个操作： swim(上浮) 和 sink(下沉)

在插入元素和删除元素时，难免破坏堆的性质，这就需要通过这两个操作来恢复堆的性质了。

### 最大堆的实现：

对于最大堆，会破坏堆性质的有两种情况：

1、如果某个节点 A 比它的子节点（中的一个）小，那么 A 就不配做父节点，应该下去，下面那个更大的节点上来做父节点，这就是对 A 进行**下沉**。

2、如果某个节点 A 比它的父节点大，那么 A 不应该做子节点，应该把父节点换下来，自己去做父节点，这就是对 A 的**上浮**。

### 最小堆的实现：

对于最小堆，会破坏堆性质的有两种情况：

1、如果某个节点 A 比它的子节点（中的一个）大，那么 A 就不配做父节点，应该下去，下面那个更小的节点上来做父节点，这就是对 A 进行**下沉**。

2、如果某个节点 A 比它的父节点小，那么 A 不应该做子节点，应该把父节点换下来，自己去做父节点，这就是对 A 的**上浮**。

## 基本操作代码


### 节点操作

::: tabs

@tab:active java

<!-- tab 1 内容 -->
``` java
// 父节点的索引
int parent(int root) {
    return root / 2;
}
// 左孩子的索引
int left(int root) {
    return root * 2;
}
// 右孩子的索引
int right(int root) {
    return root * 2 + 1;
}
```

@tab python

<!-- tab 2 内容 -->

@tab go

<!-- tab 3 将会被默认激活 -->

<!-- tab 3 内容 -->
@tab node

@tab js

:::

### 上浮和下沉

