import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,b as a}from"./app-8160df4d.js";const t="/assets/image-2-75db4810.png",p="/assets/image-3-2702f3f9.png",o={},r=a('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>根据官⽅数据，Redis 的 QPS 可以达到约 100000（每秒请求数）;</p><figure><img src="'+t+'" alt="横轴是连接数，纵轴是 QPS" width="500" height="300" tabindex="0" loading="lazy"><figcaption>横轴是连接数，纵轴是 QPS</figcaption></figure><h2 id="基于内存实现" tabindex="-1"><a class="header-anchor" href="#基于内存实现" aria-hidden="true">#</a> 基于内存实现</h2><p>Redis 是基于内存的数据库，想对于磁盘来说,速度快了很多。</p><blockquote><blockquote><p>磁盘和内存的区别：</p><ol><li>访问速度<br> 内存是电子存储介质，可以在纳秒级别（10<sup>-9秒）的时间内完成读写操作。而磁盘是机械设备，需要寻找和移动读写头，这会导致较高的延迟，通常在毫秒级别（10</sup>-3秒）或更长的时间内完成读写。</li><li>物理性能<br> 内存芯片位于计算机主板上，与处理器之间的距离非常近，数据传输路径很短。而磁盘通常是通过数据线连接到主板，数据传输路径较长，因此内存的物理性能更高。</li></ol></blockquote></blockquote><blockquote><blockquote><ol start="3"><li>读写方式<br> 内存以随机存取的方式工作，可以直接通过内存地址访问任何数据。这使得内存的读写速度不受数据位置的影响。磁盘则需要按照物理磁道上的顺序读取数据，因此在读取大量非连续数据时会有明显的性能下降。</li></ol></blockquote></blockquote><blockquote><blockquote><ol start="4"><li>缓存<br> 现代计算机通常配备高速缓存，其中包括一级缓存（L1 Cache）和二级缓存（L2 Cache）。这些缓存通常位于处理器内部，速度更快，作为内存和处理器之间的缓冲区域，可以加快数据的访问速度。相比之下，磁盘并不具备这样的缓存功能</li></ol></blockquote></blockquote><h2 id="高效的数据结构" tabindex="-1"><a class="header-anchor" href="#高效的数据结构" aria-hidden="true">#</a> ⾼效的数据结构</h2><p>Redis ⼀共有 5 种数据类型， String、List、Hash、Set、SortedSet<br> 不同的数据类型底层使⽤了⼀种或者多种数据结构来⽀撑，⽬的就是为了追求更快的速度。</p><figure><img src="'+p+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ul><li>SDS 简单动态字符串优势</li><li>zipList 压缩列表</li><li>quicklist</li><li>skipList 跳跃表</li><li>整数数组（intset）</li></ul><h2 id="线程模型" tabindex="-1"><a class="header-anchor" href="#线程模型" aria-hidden="true">#</a> 线程模型</h2><h3 id="_6-0之前的单线程模型" tabindex="-1"><a class="header-anchor" href="#_6-0之前的单线程模型" aria-hidden="true">#</a> 6.0之前的单线程模型</h3><ul><li><p>Redis 的单线程主要是指Redis的网络IO和键值对读写是由一个线程来完成的，Redis在处理客户端的请求时包括获取 (socket 读)、解析、执行、内容返回 (socket 写) 等都由一个顺序串行的主线程处理，这就是所谓的“单线程”。这也是Redis对外提供键值存储服务的主要流程。但Redis的其他功能， 比如持久化、异步删除、集群数据同步等等，其实是由额外的线程执行的。</p></li><li><p>单线程的好处</p><ol><li>避免线程创建过多导致的性能消耗，反而降低整体吞吐能力。</li><li>避免上下文切换引起的 CPU 额外的开销。</li><li>避免了线程之间的竞争问题，如加锁、解锁、死锁等，都会造成性能损耗。</li><li>无需额外考虑多线程带来的程序复杂度，代码更清晰，处理逻辑简单。</li></ol></li></ul><h3 id="_6-0之后的多线程" tabindex="-1"><a class="header-anchor" href="#_6-0之后的多线程" aria-hidden="true">#</a> 6.0之后的多线程</h3><ul><li><p>底层网络硬件性能越来越好，Redis 的性能瓶颈逐渐体现在网络 I/O 的读写上，单个线程处理网络 I/O 读写的速度跟不上底层网络硬件执行的速度。</p></li><li><p>6.0之后的多线程主要解决什么问题 ?</p><ul><li>可以充分利用服务器CPU的多核资源，而主线程明显只能利用一个</li><li>多线程任务可以分摊 Redis 同步 IO 读写负荷，降低耗时</li></ul></li></ul><h2 id="i-o-多路复用模型" tabindex="-1"><a class="header-anchor" href="#i-o-多路复用模型" aria-hidden="true">#</a> I/O 多路复⽤模型</h2><p>Redis 采⽤ I/O 多路复⽤技术，并发处理连接。采⽤了 epoll + ⾃⼰实现的简单的事件框架。</p><p>epoll 中的读、写、关闭、连接都转化成了事件，然后利⽤ epoll 的多路复⽤特性，绝不在IO上浪费⼀点时间</p><h2 id="高性能总结" tabindex="-1"><a class="header-anchor" href="#高性能总结" aria-hidden="true">#</a> 高性能总结：</h2><ol><li>基于内存实现，而非磁盘，大都是简单的存取操作，资源主要消耗在 IO 上，所以读取速度快。</li><li>数据结构：基于不同业务场景的高效数据结构 <ul><li>动态字符串(REDIS_STRING)：整数(REDIS_ENCODING_INT)、字符串(REDIS_ENCODING_RAW)</li><li>双端列表(REDIS_ENCODING_LINKEDLIST)</li><li>压缩列表(REDIS_ENCODING_ZIPLIST)</li><li>跳跃表(REDIS_ENCODING_SKIPLIST)</li><li>哈希表(REDIS_HASH)</li><li>整数集合(REDIS_ENCODING_INTSET)</li></ul></li><li>线程模型：6.0之前 Redis 的网络 IO 以及键值对指令读写是由单个线程来执行的，避免了不必要的contextswitch和竞选；6.0 之后多线程分摊 Redis 同步 IO 读写负荷，降低耗时。</li><li>I/O 模型：基于I/O多路复用模型，非阻塞的I/O模型</li><li>恰单的数据编码：根据实际数据类型，选择合理的数据编码</li><li>Redis 本身是一个全局 哈希表，他的时间复杂度是 O(1)，另外为了防止哈希冲突导致链表过长，执行 rehash 操作进行扩充，减少哈希冲突。</li></ol><h2 id="内存与磁盘" tabindex="-1"><a class="header-anchor" href="#内存与磁盘" aria-hidden="true">#</a> 内存与磁盘</h2><p>主要原因 内存（RAM）的读写速度比磁盘（硬盘或固态硬盘）快的主要原因有以下几点：</p><p>访问速度</p><p>内存是电子存储介质，可以在纳秒级别（10<sup>-9秒）的时间内完成读写操作。而磁盘是机械设备，需要寻找和移动读写头，这会导致较高的延迟，通常在毫秒级别（10</sup>-3秒）或更长的时间内完成读写。</p><p>电子存储介质，如固态硬盘（SSD）和闪存驱动器（USB闪存驱动器），使用闪存芯片来存储数据。这些芯片基于电子器件，如晶体管和电容器，通过在芯片内部存储和读取电荷量来表示数据。电子存储介质的主要优势在于它们可以通过直接读取或写入电荷来快速访问数据，而无需移动部件。</p><p>相比之下，机械存储介质，如硬盘驱动器（HDD），使用旋转磁盘和移动的读写头来存储和检索数据。当读取或写入数据时，硬盘必须旋转磁盘以定位所需的数据，并将读写头移动到正确的位置。这种机械运动导致了存取数据的延迟，限制了机械存储介质的速度。</p><p>物理性能</p><p>内存芯片位于计算机主板上，与处理器之间的距离非常近，数据传输路径很短。而磁盘通常是通过数据线连接到主板，数据传输路径较长，因此内存的物理性能更高。</p><p>读写方式</p><p>内存以随机存取的方式工作，可以直接通过内存地址访问任何数据。这使得内存的读写速度不受数据位置的影响。磁盘则需要按照物理磁道上的顺序读取数据，因此在读取大量非连续数据时会有明显的性能下降。</p><p>内存的读写方式：</p><p>读取：CPU通过内存总线从内存中读取数据。读取速度非常快，因为内存是直接与CPU连接的，可以实现几纳秒级的读取速度。 写入：CPU通过内存总线将数据写入内存。写入速度也很快，但通常比读取速度稍慢一些。 内存总线（Memory Bus）是计算机系统中用于传输数据和指令到和从内存（RAM）中的一组电路和信号线。它连接了中央处理器（CPU）和内存之间，允许CPU与内存进行数据交换。</p><p>内存总线负责在CPU和内存之间传输数据的工作。当CPU需要从内存中读取数据时，它会向内存总线发送读取请求，并指定要读取的内存地址。内存总线将传输该请求到内存中，并将请求的数据返回给CPU。</p><p>类似地，当CPU需要将数据写入内存时，它会向内存总线发送写入请求，并将要写入的数据和目标内存地址传输给内存。内存总线将确保数据正确地写入到指定的内存地址。</p><p>内存总线的宽度是其重要的特性之一，它决定了一次可以传输多少位（或字节）的数据。例如，一个16位的内存总线可以在每个时钟周期中传输16位（2字节）的数据，而一个32位的内存总线可以传输32位（4字节）的数据。</p><p>内存总线的速度也是关键因素之一，它决定了数据传输的快慢。速度通常以兆赫兹（MHz）或千兆赫兹（GHz）为单位进行衡量。较高的内存总线速度可以提供更快的数据传输速度，从而提高计算机系统的整体性能。</p><p>磁盘的读写方式：</p><p>读取：磁盘驱动器通过机械臂和磁头访问磁盘上的数据。读取速度较慢，因为需要定位和移动机械臂以及等待磁盘旋转到正确的位置。读取速度通常以每秒几十至几百兆字节为单位。 写入：磁盘驱动器将数据写入磁盘的空闲区域。写入速度与读取速度相当，但可能会受到磁盘上数据碎片的影响，以及文件系统的写入策略（如写缓存）。 磁盘臂是磁盘驱动器中的一个机械臂，它支持磁头的运动。磁盘臂的作用是定位和移动磁头到特定的磁道（track）上。磁道是磁盘上的一个圆形轨道，数据存储在磁道上。</p><p>磁头是磁盘驱动器中的一个感应元件，用于读取和写入数据。磁头通过与磁盘表面的磁性材料相互作用来完成数据的读取和写入操作。读取操作涉及通过感应磁场来解读磁盘上存储的数据，而写入操作则涉及改变磁盘表面的磁性以存储新的数据。</p><p>磁盘臂和磁头的协同工作使得磁盘驱动器能够在磁道上读取和写入数据。当需要读取或写入特定数据时，磁盘臂会移动磁头到相应的磁道上，然后磁头会与磁盘表面进行交互，执行读取或写入操作。</p><p>缓存</p><p>现代计算机通常配备高速缓存，其中包括一级缓存（L1 Cache）和二级缓存（L2 Cache）。这些缓存通常位于处理器内部，速度更快，作为内存和处理器之间的缓冲区域，可以加快数据的访问速度。相比之下，磁盘并不具备这样的缓存功能：</p><p>1）速度：磁盘相比于CPU缓存的访问速度非常慢。CPU缓存是位于CPU芯片内部或者紧邻CPU的高速缓存，其访问速度非常快，可以以纳秒级的速度读取和写入数据。相比之下，磁盘是一种机械存储设备，需要旋转磁盘和机械臂移动来读取和写入数据，其访问速度通常以毫秒级别计算。这种速度差异非常大，无法满足CPU对高速缓存的要求。</p><p>2）高并发性能：CPU缓存需要支持高并发的访问，因为多个CPU核心可能同时访问缓存。而磁盘通常只支持有限的并发访问，无法满足多个CPU核心同时访问的需求。</p><p>3）电源开销：CPU缓存位于CPU芯片内部或者紧邻CPU，与CPU共享同一个电源供应。这样可以确保缓存的电源开销较低，因为电源供应和CPU之间的距离非常近。相比之下，磁盘通常连接在计算机的主板上，与CPU之间的距离较远，需要额外的电源供应和数据线连接。这样会增加系统的电源开销和复杂性。</p>',47),s=[r];function d(h,c){return e(),l("div",null,s)}const _=i(o,[["render",d],["__file","04_redis.html.vue"]]);export{_ as default};
