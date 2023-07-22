const e=JSON.parse('{"key":"v-56386dfb","path":"/moyu/jvm/03_GarbageCollectionMethod.html","title":"垃圾收集方法","lang":"zh-CN","frontmatter":{"title":"垃圾收集方法","subtitle":"垃圾收集方法","category":["JVM"],"tag":["摸鱼"],"order":3,"description":"标记-清除算法: 有两个阶段，标记和清除; 工作原理： 标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象； 最基础的算法,后续的收集算法都是基于这种思路并对其不足进行改进; 缺点： 效率问题：标记和清除两个过程的效率都不高； 空间问题：标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/jvm/03_GarbageCollectionMethod.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"垃圾收集方法"}],["meta",{"property":"og:description","content":"标记-清除算法: 有两个阶段，标记和清除; 工作原理： 标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象； 最基础的算法,后续的收集算法都是基于这种思路并对其不足进行改进; 缺点： 效率问题：标记和清除两个过程的效率都不高； 空间问题：标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-22T14:37:56.000Z"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-07-22T14:37:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾收集方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-22T14:37:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"标记-清除算法:","slug":"标记-清除算法","link":"#标记-清除算法","children":[{"level":3,"title":"工作原理：","slug":"工作原理","link":"#工作原理","children":[]},{"level":3,"title":"缺点：","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"复制算法:","slug":"复制算法","link":"#复制算法","children":[{"level":3,"title":"工作原理:","slug":"工作原理-1","link":"#工作原理-1","children":[]},{"level":3,"title":"缺点:","slug":"缺点-1","link":"#缺点-1","children":[]}]},{"level":2,"title":"标记-整理算法:","slug":"标记-整理算法","link":"#标记-整理算法","children":[]},{"level":2,"title":"分代收集算法","slug":"分代收集算法","link":"#分代收集算法","children":[{"level":3,"title":"工作原理:","slug":"工作原理-2","link":"#工作原理-2","children":[]}]}],"git":{"createdTime":1689412478000,"updatedTime":1690036676000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":4}]},"readingTime":{"minutes":2.49,"words":748},"filePathRelative":"moyu/jvm/03_GarbageCollectionMethod.md","localizedDate":"2023年7月15日","excerpt":"<h2> 标记-清除算法:</h2>\\n<p>有两个阶段，标记和清除;</p>\\n<h3> 工作原理：</h3>\\n<ul>\\n<li>标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象；</li>\\n<li>最基础的算法,后续的收集算法都是基于这种思路并对其不足进行改进;</li>\\n</ul>\\n<h3> 缺点：</h3>\\n<ol>\\n<li>效率问题：标记和清除两个过程的效率都不高；</li>\\n<li>空间问题：标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。</li>\\n</ol>","autoDesc":true}');export{e as data};
