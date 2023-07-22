const t=JSON.parse('{"key":"v-58eaa4a3","path":"/moyu/jvm/02_Jvm_Memory1ClassReload.html","title":"类的加载","lang":"zh-CN","frontmatter":{"title":"类的加载","subtitle":"类的加载","category":["JVM"],"tag":["摸鱼"],"order":2.1,"description":"类的生命周期 Alt text 过程 加载（load） 通过一个类的全限定名来获取定义此类的二进制字节流; 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构; 链接(Linking) 校验 目的是在于确保class文件的字节流中包含信息符合当前虚拟机要求，保证被加载类的正确性，不会危害虚拟机自身安全。 主要包括四种验证：文件格式验证、元数据验证、字节码验证、符号引用验证。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/jvm/02_Jvm_Memory1ClassReload.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"类的加载"}],["meta",{"property":"og:description","content":"类的生命周期 Alt text 过程 加载（load） 通过一个类的全限定名来获取定义此类的二进制字节流; 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构; 链接(Linking) 校验 目的是在于确保class文件的字节流中包含信息符合当前虚拟机要求，保证被加载类的正确性，不会危害虚拟机自身安全。 主要包括四种验证：文件格式验证、元数据验证、字节码验证、符号引用验证。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://merryldt.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-22T09:15:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"类的加载"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-07-22T09:15:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类的加载\\",\\"image\\":[\\"https://merryldt.github.io/\\"],\\"dateModified\\":\\"2023-07-22T09:15:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"加载（load）","slug":"加载-load","link":"#加载-load","children":[]},{"level":2,"title":"链接(Linking)","slug":"链接-linking","link":"#链接-linking","children":[{"level":3,"title":"校验","slug":"校验","link":"#校验","children":[]},{"level":3,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":3,"title":"解析","slug":"解析","link":"#解析","children":[]}]},{"level":2,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}],"git":{"createdTime":1689742097000,"updatedTime":1690017329000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":21}]},"readingTime":{"minutes":2.49,"words":746},"filePathRelative":"moyu/jvm/02_Jvm_Memory1ClassReload.md","localizedDate":"2023年7月19日","excerpt":"<h1> 类的生命周期</h1>\\n<figure><figcaption>Alt text</figcaption></figure>\\n<h1> 过程</h1>\\n<h2> 加载（load）</h2>\\n<ol>\\n<li>通过一个类的全限定名来获取定义此类的二进制字节流;</li>\\n<li>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构;</li>\\n</ol>\\n<h2> 链接(Linking)</h2>\\n<h3> 校验</h3>\\n<p>目的是在于确保class文件的字节流中包含信息符合当前虚拟机要求，保证被加载类的正确性，不会危害虚拟机自身安全。<br>\\n主要包括四种验证：文件格式验证、元数据验证、字节码验证、符号引用验证。</p>","autoDesc":true}');export{t as data};