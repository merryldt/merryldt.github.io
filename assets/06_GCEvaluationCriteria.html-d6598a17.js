const t=JSON.parse('{"key":"v-0032fc8f","path":"/moyu/jvm/06_GCEvaluationCriteria.html","title":"基本 GC 的评价方法","lang":"zh-CN","frontmatter":{"title":"基本 GC 的评价方法","subtitle":"基本 GC的一些指标","category":["JVM"],"tag":["摸鱼"],"order":6,"description":"GC的两个核心指标 延迟(Latency): 最大停顿时间，即垃圾收集过程中一次STW的最长时间，越短越好，一定程度上可以接受频次的增大. 吞吐量(Throughput): 应用系统的生命周期内，由于GC线程会占用应用程序当前可用的CPU 时钟周期，吞吐量即为应用程序有效花费的时间占系统总运行时间的百分比。 例如： 系统运行了100min,GC耗时1min,则系统吞吐量为99%,吞吐量优先的收集器可以接受较长的停顿。 TP9999 图示 p99 即为一次停顿的时间不超过应用服务的 TP9999，GC 的吞吐量不小于 99.99%。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/jvm/06_GCEvaluationCriteria.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"基本 GC 的评价方法"}],["meta",{"property":"og:description","content":"GC的两个核心指标 延迟(Latency): 最大停顿时间，即垃圾收集过程中一次STW的最长时间，越短越好，一定程度上可以接受频次的增大. 吞吐量(Throughput): 应用系统的生命周期内，由于GC线程会占用应用程序当前可用的CPU 时钟周期，吞吐量即为应用程序有效花费的时间占系统总运行时间的百分比。 例如： 系统运行了100min,GC耗时1min,则系统吞吐量为99%,吞吐量优先的收集器可以接受较长的停顿。 TP9999 图示 p99 即为一次停顿的时间不超过应用服务的 TP9999，GC 的吞吐量不小于 99.99%。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://merryldt.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-15T09:29:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"基本 GC 的评价方法"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-07-15T09:29:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本 GC 的评价方法\\",\\"image\\":[\\"https://merryldt.github.io/\\"],\\"dateModified\\":\\"2023-07-15T09:29:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"延迟(Latency):","slug":"延迟-latency","link":"#延迟-latency","children":[{"level":3,"title":"吞吐量(Throughput):","slug":"吞吐量-throughput","link":"#吞吐量-throughput","children":[]}]},{"level":2,"title":"例子：","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"System.gc()：","slug":"system-gc","link":"#system-gc","children":[]},{"level":2,"title":"CMS：","slug":"cms","link":"#cms","children":[]},{"level":2,"title":"Promotion Failure：","slug":"promotion-failure","link":"#promotion-failure","children":[]},{"level":2,"title":"Concurrent Mode Failure：","slug":"concurrent-mode-failure","link":"#concurrent-mode-failure","children":[]},{"level":2,"title":"GCLocker Initiated GC：","slug":"gclocker-initiated-gc","link":"#gclocker-initiated-gc","children":[]},{"level":2,"title":"GC 耗时增大、线程 Block 增多、慢查询增多、CPU 负载高等四个表象，如何判断哪个是根因？","slug":"gc-耗时增大、线程-block-增多、慢查询增多、cpu-负载高等四个表象-如何判断哪个是根因","link":"#gc-耗时增大、线程-block-增多、慢查询增多、cpu-负载高等四个表象-如何判断哪个是根因","children":[]},{"level":2,"title":"相应的问题，如何观察？","slug":"相应的问题-如何观察","link":"#相应的问题-如何观察","children":[{"level":3,"title":"CPU 负载高：","slug":"cpu-负载高","link":"#cpu-负载高","children":[]},{"level":3,"title":"慢查询增多","slug":"慢查询增多","link":"#慢查询增多","children":[]},{"level":3,"title":"线程 Block 引起","slug":"线程-block-引起","link":"#线程-block-引起","children":[]}]}],"git":{"createdTime":1689412478000,"updatedTime":1689413380000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":2}]},"readingTime":{"minutes":4.75,"words":1426},"filePathRelative":"moyu/jvm/06_GCEvaluationCriteria.md","localizedDate":"2023年7月15日","excerpt":"<h1> GC的两个核心指标</h1>\\n<h2> 延迟(Latency):</h2>\\n<p>最大停顿时间，即垃圾收集过程中一次STW的最长时间，越短越好，一定程度上可以接受频次的增大.</p>\\n<h3> 吞吐量(Throughput):</h3>\\n<p>应用系统的生命周期内，由于GC线程会占用应用程序当前可用的CPU 时钟周期，吞吐量即为应用程序有效花费的时间占系统总运行时间的百分比。<br>\\n例如： 系统运行了100min,GC耗时1min,则系统吞吐量为99%,吞吐量优先的收集器可以接受较长的停顿。</p>\\n<h1> TP9999 图示</h1>\\n<p>\\np99 即为<strong>一次停顿的时间不超过应用服务的 TP9999，GC 的吞吐量不小于 99.99%</strong>。</p>","autoDesc":true}');export{t as data};
