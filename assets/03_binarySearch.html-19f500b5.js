const t=JSON.parse('{"key":"v-7f01d36d","path":"/moyu/algorithm/basic/03_binarySearch.html","title":"二分搜索法","lang":"zh-CN","frontmatter":{"title":"二分搜索法","subtitle":"二分搜索法","category":["算法 二分搜索法"],"tag":["摸鱼"],"order":3,"description":"三类: 基本的二分查找 寻找左侧边界的二分查找 寻找又侧边界的二分查找 基本的二分查找 复杂度分析: 递归： 时间复杂度: O(m+n), m 和n 分别为两个链表的长度.每次递归调用都会去掉一个链表的头节点，递归结束的条件是一个链表为空。递归函数只会调用每个节点一次。 因此，时间复杂度取决于合并后的链表长度。 即O(m+n) 空间复杂度: O(m+n), 递归调用函数需要栈空间,栈空间的大小取决于递归调用的深度。结束递归时函数对多调用 m +n 次，因此空间复杂度为 O(m+n) 非递归： 时间复杂度; O(m+n); 每次循环迭代，两个链表只会有一个元素都被放进合并链表中。因此，while循环的次数不会超过两个链表的长度之和。其他操作都是常数级别。 空间复杂度： O(1)； 只需常数空间存放若干变量。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/algorithm/basic/03_binarySearch.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"二分搜索法"}],["meta",{"property":"og:description","content":"三类: 基本的二分查找 寻找左侧边界的二分查找 寻找又侧边界的二分查找 基本的二分查找 复杂度分析: 递归： 时间复杂度: O(m+n), m 和n 分别为两个链表的长度.每次递归调用都会去掉一个链表的头节点，递归结束的条件是一个链表为空。递归函数只会调用每个节点一次。 因此，时间复杂度取决于合并后的链表长度。 即O(m+n) 空间复杂度: O(m+n), 递归调用函数需要栈空间,栈空间的大小取决于递归调用的深度。结束递归时函数对多调用 m +n 次，因此空间复杂度为 O(m+n) 非递归： 时间复杂度; O(m+n); 每次循环迭代，两个链表只会有一个元素都被放进合并链表中。因此，while循环的次数不会超过两个链表的长度之和。其他操作都是常数级别。 空间复杂度： O(1)； 只需常数空间存放若干变量。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-13T08:51:31.000Z"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2025-01-13T08:51:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二分搜索法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-13T08:51:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"三类:","slug":"三类","link":"#三类","children":[{"level":3,"title":"基本的二分查找","slug":"基本的二分查找","link":"#基本的二分查找","children":[]},{"level":3,"title":"寻找左侧边界的二分查找","slug":"寻找左侧边界的二分查找","link":"#寻找左侧边界的二分查找","children":[]},{"level":3,"title":"寻找又侧边界的二分查找","slug":"寻找又侧边界的二分查找","link":"#寻找又侧边界的二分查找","children":[]},{"level":3,"title":"基本的二分查找","slug":"基本的二分查找-1","link":"#基本的二分查找-1","children":[]}]}],"git":{"createdTime":1736758291000,"updatedTime":1736758291000,"contributors":[{"name":"merry","email":"17835059864@163.com","commits":1}]},"readingTime":{"minutes":1.49,"words":447},"filePathRelative":"moyu/algorithm/basic/03_binarySearch.md","localizedDate":"2025年1月13日","excerpt":"<h2> 三类:</h2>\\n<h3> 基本的二分查找</h3>\\n<h3> 寻找左侧边界的二分查找</h3>\\n<h3> 寻找又侧边界的二分查找</h3>\\n<h3> 基本的二分查找</h3>\\n\\n<p><strong>复杂度分析</strong>:</p>\\n<ul>\\n<li>递归：\\n<ul>\\n<li>时间复杂度: O(m+n), m 和n 分别为两个链表的长度.每次递归调用都会去掉一个链表的头节点，递归结束的条件是一个链表为空。递归函数只会调用每个节点一次。\\n因此，时间复杂度取决于合并后的链表长度。 即O(m+n)</li>\\n<li>空间复杂度: O(m+n), 递归调用函数需要栈空间,栈空间的大小取决于递归调用的深度。结束递归时函数对多调用 m +n 次，因此空间复杂度为 O(m+n)</li>\\n</ul>\\n</li>\\n<li>非递归：\\n<ul>\\n<li>时间复杂度; O(m+n); 每次循环迭代，两个链表只会有一个元素都被放进合并链表中。因此，while循环的次数不会超过两个链表的长度之和。其他操作都是常数级别。</li>\\n<li>空间复杂度： O(1)； 只需常数空间存放若干变量。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};
