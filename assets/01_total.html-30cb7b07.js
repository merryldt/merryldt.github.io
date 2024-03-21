import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,b as i}from"./app-28cf2c75.js";const h="/assets/image-ad7ed8b8.png",t={},n=i('<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>Kubernetes 是一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。</p><h2 id="k8s-的崛起理由" tabindex="-1"><a class="header-anchor" href="#k8s-的崛起理由" aria-hidden="true">#</a> k8s 的崛起理由</h2><figure><img src="'+h+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h3 id="传统部署时代" tabindex="-1"><a class="header-anchor" href="#传统部署时代" aria-hidden="true">#</a> 传统部署时代：</h3><p>早期，各个组织是在物理服务器上运行应用程序。 由于无法限制在物理服务器中运行的应用程序资源使用，因此会导致资源分配问题。 例如，如果在同一台物理服务器上运行多个应用程序， 则可能会出现一个应用程序占用大部分资源的情况，而导致其他应用程序的性能下降。 一种解决方案是将每个应用程序都运行在不同的物理服务器上， 但是当某个应用程序资源利用率不高时，剩余资源无法被分配给其他应用程序， 而且维护许多物理服务器的成本很高。</p><h3 id="虚拟化部署时代" tabindex="-1"><a class="header-anchor" href="#虚拟化部署时代" aria-hidden="true">#</a> 虚拟化部署时代：</h3><p>因此，虚拟化技术被引入了。虚拟化技术允许你在单个物理服务器的 CPU 上运行多台虚拟机（VM）。 虚拟化能使应用程序在不同 VM 之间被彼此隔离，且能提供一定程度的安全性， 因为一个应用程序的信息不能被另一应用程序随意访问。</p><p>虚拟化技术能够更好地利用物理服务器的资源，并且因为可轻松地添加或更新应用程序， 而因此可以具有更高的可扩缩性，以及降低硬件成本等等的好处。 通过虚拟化，你可以将一组物理资源呈现为可丢弃的虚拟机集群。</p><p>每个 VM 是一台完整的计算机，在虚拟化硬件之上运行所有组件，包括其自己的操作系统。</p><h3 id="容器部署时代" tabindex="-1"><a class="header-anchor" href="#容器部署时代" aria-hidden="true">#</a> 容器部署时代：</h3><p>容器类似于 VM，但是更宽松的隔离特性，使容器之间可以共享操作系统（OS）。 因此，容器比起 VM 被认为是更轻量级的。且与 VM 类似，每个容器都具有自己的文件系统、CPU、内存、进程空间等。 由于它们与基础架构分离，因此可以跨云和 OS 发行版本进行移植。</p><p>容器因具有许多优势而变得流行起来，例如：</p><ul><li>敏捷应用程序的创建和部署：与使用 VM 镜像相比，提高了容器镜像创建的简便性和效率。</li><li>持续开发、集成和部署：通过快速简单的回滚（由于镜像不可变性）， 提供可靠且频繁的容器镜像构建和部署。</li><li>关注开发与运维的分离：在构建、发布时创建应用程序容器镜像，而不是在部署时， 从而将应用程序与基础架构分离。</li><li>可观察性：不仅可以显示 OS 级别的信息和指标，还可以显示应用程序的运行状况和其他指标信号。</li><li>跨开发、测试和生产的环境一致性：在笔记本计算机上也可以和在云中运行一样的应用程序。</li><li>跨云和操作系统发行版本的可移植性：可在 Ubuntu、RHEL、CoreOS、本地、 Google Kubernetes Engine 和其他任何地方运行。</li><li>以应用程序为中心的管理：提高抽象级别，从在虚拟硬件上运行 OS 到使用逻辑资源在 OS 上运行应用程序。</li><li>松散耦合、分布式、弹性、解放的微服务：应用程序被分解成较小的独立部分， 并且可以动态部署和管理 - 而不是在一台大型单机上整体运行。</li><li>资源隔离：可预测的应用程序性能。</li><li>资源利用：高效率和高密度。</li></ul><h3 id="当然-单个容器很方便-多个呢-是否需要管理" tabindex="-1"><a class="header-anchor" href="#当然-单个容器很方便-多个呢-是否需要管理" aria-hidden="true">#</a> 当然,单个容器很方便,多个呢？是否需要管理</h3><p>Kubernetes。 Kubernetes 为你提供了一个可弹性运行分布式系统的框架。 Kubernetes 会满足你的扩展要求、故障转移你的应用、提供部署模式等。 例如，Kubernetes 可以轻松管理系统的 Canary (金丝雀) 部署。</p><h2 id="kubernetes-可以为我们提供" tabindex="-1"><a class="header-anchor" href="#kubernetes-可以为我们提供" aria-hidden="true">#</a> Kubernetes 可以为我们提供</h2><h3 id="服务发现和负载均衡" tabindex="-1"><a class="header-anchor" href="#服务发现和负载均衡" aria-hidden="true">#</a> 服务发现和负载均衡</h3><p>Kubernetes 可以使用 DNS 名称或自己的 IP 地址来暴露容器。 如果进入容器的流量很大， Kubernetes 可以负载均衡并分配网络流量，从而使部署稳定。</p><h3 id="存储编排" tabindex="-1"><a class="header-anchor" href="#存储编排" aria-hidden="true">#</a> 存储编排</h3><p>Kubernetes 允许你自动挂载你选择的存储系统，例如本地存储、公共云提供商等。</p><h3 id="自动部署和回滚" tabindex="-1"><a class="header-anchor" href="#自动部署和回滚" aria-hidden="true">#</a> 自动部署和回滚</h3><p>你可以使用 Kubernetes 描述已部署容器的所需状态， 它可以以受控的速率将实际状态更改为期望状态。 例如，你可以自动化 Kubernetes 来为你的部署创建新容器， 删除现有容器并将它们的所有资源用于新容器。</p><h3 id="自动完成装箱计算" tabindex="-1"><a class="header-anchor" href="#自动完成装箱计算" aria-hidden="true">#</a> 自动完成装箱计算</h3><p>你为 Kubernetes 提供许多节点组成的集群，在这个集群上运行容器化的任务。 你告诉 Kubernetes 每个容器需要多少 CPU 和内存 (RAM)。 Kubernetes 可以将这些容器按实际情况调度到你的节点上，以最佳方式利用你的资源。</p><h3 id="自我修复" tabindex="-1"><a class="header-anchor" href="#自我修复" aria-hidden="true">#</a> 自我修复</h3><p>Kubernetes 将重新启动失败的容器、替换容器、杀死不响应用户定义的运行状况检查的容器， 并且在准备好服务之前不将其通告给客户端。</p><h3 id="密钥与配置管理" tabindex="-1"><a class="header-anchor" href="#密钥与配置管理" aria-hidden="true">#</a> 密钥与配置管理</h3><p>Kubernetes 允许你存储和管理敏感信息，例如密码、OAuth 令牌和 SSH 密钥。 你可以在不重建容器镜像的情况下部署和更新密钥和应用程序配置，也无需在堆栈配置中暴露密钥。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Kubernetes 是在容器级别运行，而非在硬件级别，它提供了 PaaS 产品共有的一些普遍适用的功能， 例如部署、扩展、负载均衡，允许用户集成他们的日志记录、监控和警报方案。 Kubernetes 为构建开发人员平台提供了基础，但是在重要的地方保留了用户选择权，能有更高的灵活性。</p>',31),d=[n];function s(l,c){return a(),r("div",null,d)}const b=e(t,[["render",s],["__file","01_total.html.vue"]]);export{b as default};