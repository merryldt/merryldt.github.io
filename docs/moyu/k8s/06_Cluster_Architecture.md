
## Nodes
Kubernetes 通过将容器放入在节点（Node）上运行的 Pod 中来执行你的工作负载。 节点可以是一个虚拟机或者物理机器，取决于所在的集群配置。 每个节点包含运行 Pod 所需的服务； 这些节点由控制面负责管理。

通常集群中会有若干个节点；而在一个学习所用或者资源受限的环境中，你的集群中也可能只有一个节点。

节点上的组件包括 kubelet、 容器运行时以及 kube-proxy。



## Communication between Nodes and the Control Plane

节点与控制面之间的通信,包括两种:
- 节点到控制面
- 控制面到节点

### 节点到控制面
Kubernetes 采用的是中心辐射型（Hub-and-Spoke）API 模式。 所有从节点（或运行于其上的 Pod）发出的 API 调用都终止于 API 服务器。 其它控制面组件都没有被设计为可暴露远程服务。

### 控制面到节点
从控制面（API 服务器）到节点有两种主要的通信路径。 
第一种是从 API 服务器到集群中每个节点上运行的 kubelet 进程。 
第二种是从 API 服务器通过它的代理功能连接到任何节点、Pod 或者服务。

## Controllers(控制器)
在 Kubernetes 中，控制器通过监控集群 的公共状态，并致力于将当前状态转变为期望的状态。   
例如: 房间里的温度自动调节器  
当你设置了温度，告诉了温度自动调节器你的期望状态（Desired State）。 房间的实际温度是当前状态（Current State）。 通过对设备的开关控制，温度自动调节器让其当前状态接近期望状态。

###  控制器模式：
1. 通过API服务器来控制；（job 控制器）
2. 直接控制；

### 设计
作为设计原则之一，Kubernetes 使用了很多控制器，每个控制器管理集群状态的一个特定方面。

### 运行控制器的方式
1. 内置；运行在 kube-controller-manager 内。
    Deployment 控制器和 Job 控制器是 Kubernetes 内置控制器的典型例子。
2. 在控制面之外，用以扩展Kubernetes。

## 租约（Lease）

分布式系统通常需要租约（Lease）；租约提供了一种机制来锁定共享资源并协调集合成员之间的活动。 在 Kubernetes 中，租约概念表示为 coordination.k8s.io API 组中的 Lease 对象， 常用于类似节点心跳和组件级领导者选举等系统核心能力。

### 节点心跳
Kubernetes 使用 Lease API 将 kubelet 节点心跳传递到 Kubernetes API 服务器。对于每个 Node，在 kube-node-lease 名字空间中都有一个具有匹配名称的 Lease 对象。 在此基础上，每个 kubelet 心跳都是对该 Lease 对象的 update 请求，更新该 Lease 的 spec.renewTime 字段。 Kubernetes 控制平面使用此字段的时间戳来确定此 Node 的可用性。
### 领导者选举
Kubernetes 也使用 Lease 确保在任何给定时间某个组件只有一个实例在运行。

## 云控制器管理器
使用云基础设施技术，你可以在公有云、私有云或者混合云环境中运行 Kubernetes。 Kubernetes 的信条是基于自动化的、API 驱动的基础设施，同时避免组件间紧密耦合。
组件 cloud-controller-manager 是指云控制器管理器， 一个 Kubernetes 控制平面组件， 嵌入了特定于云平台的控制逻辑。 云控制器管理器（Cloud Controller Manager）允许你将你的集群连接到云提供商的 API 之上， 并将与该云平台交互的组件同与你的集群交互的组件分离开来。

cloud-controller-manager 组件是基于一种插件机制来构造的， 这种机制使得不同的云厂商都能将其平台与 Kubernetes 集成。

## 关于 cgroup v2
在 Linux 上，控制组约束分配给进程的资源。

kubelet 和底层容器运行时都需要对接 cgroup 来强制执行为 Pod 和容器管理资源， 这包括为容器化工作负载配置 CPU/内存请求和限制。

Linux 中有两个 cgroup 版本：cgroup v1 和 cgroup v2。cgroup v2 是新一代的 cgroup API。

## 容器运行时接口（CRI）

container runtime： 容器运行时
CRI 是一个插件接口，它使 kubelet 能够使用各种容器运行时，无需重新编译集群组件。
你需要在集群中的每个节点上都有一个可以正常工作的容器运行时， 这样 kubelet 能启动 Pod 及其容器。

容器运行时接口（CRI）是 kubelet 和容器运行时之间通信的主要协议。

Kubernetes 容器运行时（container runtime）接口（Container Runtime Interface；CRI）定义了主要 gRPC 协议， 用于集群组件 kubelet 和容器运行时之间的通信。

## 垃圾收集
垃圾收集（Garbage Collection）是 Kubernetes 用于清理集群资源的各种机制的统称。
- 终止的 Pod
- 已完成的 Job
- 不再存在属主引用的对象
- 未使用的容器和容器镜像
- 动态制备的、StorageClass 回收策略为 Delete 的 PV 卷
- 阻滞或者过期的 CertificateSigningRequest (CSR)
- 在以下情形中删除了的节点对象：
    1. 当集群使用云控制器管理器运行于云端时；
    2. 当集群使用类似于云控制器管理器的插件运行在本地环境中时。
- 节点租约对象

## 混合版本代理（Mixed Version Proxy）
Kubernetes 1.28 包含了一个 Alpha 特性，可以让 API 服务器代理指向其他对等 API 服务器的资源请求。当一个集群中运行着多个 API 服务器，且各服务器的 Kubernetes 版本不同时 （例如在上线 Kubernetes 新版本的时间跨度较长时），这一特性非常有用。
