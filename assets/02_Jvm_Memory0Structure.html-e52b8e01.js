const e=JSON.parse('{"key":"v-1ab6de20","path":"/moyu/jvm/02_Jvm_Memory0Structure.html","title":"Jvm的内存结构和对象分配","lang":"zh-CN","frontmatter":{"title":"Jvm的内存结构和对象分配","subtitle":"Jvm的内存结构和对象分配","category":["JVM"],"tag":["摸鱼"],"order":2,"description":"图示 内存区域划分 JVM 内存区域 内存是非常重要的系统资源，是硬盘和CPU 的中间仓库及桥梁，承载着操作系统和应用的实时运行。 JVM 内存布局规定了Java 在运行过程中内存申请、分配、管理的策略,保证了JVM 的高效稳定运行。 不同的JVM对于内存的划分方式和管理机制存在着部分差异。结合JVM虚拟机规范，来探讨一下经典的JVM内存布局。 线程 每个JVM只有一个Runtime实例。称为运行时环境。 线程是一个程序里的运行单元。JVM允许一个应用有多个线程并行的执行。 在HopsoptJVM中，每个线程都与操作系统的本地线程直接映射。（当一个Java线程准备好执行以后，此时一个操作系统的本地线程也同时创建。Java线程执行终止后,本地线程也会回收。） 操作系统负责所有线程的安排调度到任何一个可用的CPU上。一旦本地线程初始化成功，它就会调用Java线程中的run()方法。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/jvm/02_Jvm_Memory0Structure.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"Jvm的内存结构和对象分配"}],["meta",{"property":"og:description","content":"图示 内存区域划分 JVM 内存区域 内存是非常重要的系统资源，是硬盘和CPU 的中间仓库及桥梁，承载着操作系统和应用的实时运行。 JVM 内存布局规定了Java 在运行过程中内存申请、分配、管理的策略,保证了JVM 的高效稳定运行。 不同的JVM对于内存的划分方式和管理机制存在着部分差异。结合JVM虚拟机规范，来探讨一下经典的JVM内存布局。 线程 每个JVM只有一个Runtime实例。称为运行时环境。 线程是一个程序里的运行单元。JVM允许一个应用有多个线程并行的执行。 在HopsoptJVM中，每个线程都与操作系统的本地线程直接映射。（当一个Java线程准备好执行以后，此时一个操作系统的本地线程也同时创建。Java线程执行终止后,本地线程也会回收。） 操作系统负责所有线程的安排调度到任何一个可用的CPU上。一旦本地线程初始化成功，它就会调用Java线程中的run()方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://merryldt.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-20T00:41:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Jvm的内存结构和对象分配"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-07-20T00:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jvm的内存结构和对象分配\\",\\"image\\":[\\"https://merryldt.github.io/\\"],\\"dateModified\\":\\"2023-07-20T00:41:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"线程","slug":"线程","link":"#线程","children":[{"level":3,"title":"守护线程、普通线程","slug":"守护线程、普通线程","link":"#守护线程、普通线程","children":[]}]},{"level":2,"title":"一、程序计算器","slug":"一、程序计算器","link":"#一、程序计算器","children":[]},{"level":2,"title":"二、java虚拟机栈","slug":"二、java虚拟机栈","link":"#二、java虚拟机栈","children":[]},{"level":2,"title":"三、本地方法栈","slug":"三、本地方法栈","link":"#三、本地方法栈","children":[]},{"level":2,"title":"四、java堆","slug":"四、java堆","link":"#四、java堆","children":[]},{"level":2,"title":"五、方法区","slug":"五、方法区","link":"#五、方法区","children":[]},{"level":2,"title":"六、运行时常量池","slug":"六、运行时常量池","link":"#六、运行时常量池","children":[]},{"level":2,"title":"七、直接内存","slug":"七、直接内存","link":"#七、直接内存","children":[]},{"level":2,"title":"逃逸分析","slug":"逃逸分析","link":"#逃逸分析","children":[{"level":3,"title":"基于逃逸分析，可以进行 同步消除、栈上分配以及标量替换的优化。","slug":"基于逃逸分析-可以进行-同步消除、栈上分配以及标量替换的优化。","link":"#基于逃逸分析-可以进行-同步消除、栈上分配以及标量替换的优化。","children":[]},{"level":3,"title":"例子：","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"同步消除(锁消除)","slug":"同步消除-锁消除","link":"#同步消除-锁消除","children":[{"level":3,"title":"经典例子：","slug":"经典例子","link":"#经典例子","children":[]}]},{"level":2,"title":"栈上分配","slug":"栈上分配","link":"#栈上分配","children":[]},{"level":2,"title":"标量替换","slug":"标量替换","link":"#标量替换","children":[]}],"git":{"createdTime":1689742097000,"updatedTime":1689813662000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":12}]},"readingTime":{"minutes":11.6,"words":3479},"filePathRelative":"moyu/jvm/02_Jvm_Memory0Structure.md","localizedDate":"2023年7月19日","excerpt":"<h1> 图示</h1>\\n<figure><figcaption>内存区域划分</figcaption></figure>\\n<h1> JVM 内存区域</h1>\\n<ol>\\n<li>内存是非常重要的系统资源，是硬盘和CPU 的中间仓库及桥梁，承载着操作系统和应用的实时运行。</li>\\n<li>JVM 内存布局规定了Java 在运行过程中内存申请、分配、管理的策略,保证了JVM 的高效稳定运行。</li>\\n<li>不同的JVM对于内存的划分方式和管理机制存在着部分差异。结合JVM虚拟机规范，来探讨一下经典的JVM内存布局。</li>\\n</ol>\\n<h2> 线程</h2>\\n<ol>\\n<li>每个JVM只有一个Runtime实例。称为运行时环境。</li>\\n<li>线程是一个程序里的运行单元。JVM允许一个应用有多个线程并行的执行。</li>\\n<li>在HopsoptJVM中，每个线程都与操作系统的本地线程直接映射。（当一个Java线程准备好执行以后，此时一个操作系统的本地线程也同时创建。Java线程执行终止后,本地线程也会回收。）</li>\\n<li>操作系统负责所有线程的安排调度到任何一个可用的CPU上。一旦本地线程初始化成功，它就会调用Java线程中的run()方法。</li>\\n</ol>","autoDesc":true}');export{e as data};