const e=JSON.parse('{"key":"v-59cd1468","path":"/moyu/redis/05_redis.html","title":"05) Redis⾼效的数据结构","lang":"zh-CN","frontmatter":{"title":"05) Redis⾼效的数据结构","subtitle":"Redis⾼效的数据结构","category":["redis"],"tag":["摸鱼"],"order":5,"description":"常用的主要数据类型有五种 字符串/REDIS_STRING：适用于 缓存、计数、共享Session、IP统计、分布式锁等。 列表/REDIS_LIST： 链表、消息队列、栈、有序的对象列表（如朋友圈的点赞顺序列表、评论顺序列表）。 哈希表/REDIS_HASH： 购物车信息、用户信息、Hash类型的(key, field, value)存储对象等。 集合/REDIS_SET：无序的唯一的键值结构： 好友、关注、粉丝、感兴趣的人集合等。 有序集合/REDIS_ZSET：访问排行榜、点赞排行、粉丝数排行等。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/redis/05_redis.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"05) Redis⾼效的数据结构"}],["meta",{"property":"og:description","content":"常用的主要数据类型有五种 字符串/REDIS_STRING：适用于 缓存、计数、共享Session、IP统计、分布式锁等。 列表/REDIS_LIST： 链表、消息队列、栈、有序的对象列表（如朋友圈的点赞顺序列表、评论顺序列表）。 哈希表/REDIS_HASH： 购物车信息、用户信息、Hash类型的(key, field, value)存储对象等。 集合/REDIS_SET：无序的唯一的键值结构： 好友、关注、粉丝、感兴趣的人集合等。 有序集合/REDIS_ZSET：访问排行榜、点赞排行、粉丝数排行等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-04T15:28:34.000Z"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-08-04T15:28:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05) Redis⾼效的数据结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-04T15:28:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"常用的主要数据类型有五种","slug":"常用的主要数据类型有五种","link":"#常用的主要数据类型有五种","children":[]},{"level":2,"title":"SDS 简单动态字符串","slug":"sds-简单动态字符串","link":"#sds-简单动态字符串","children":[{"level":3,"title":"SDS与c语言字符串的区别：","slug":"sds与c语言字符串的区别","link":"#sds与c语言字符串的区别","children":[]}]},{"level":2,"title":"Redis缓冲区溢出及解决方案","slug":"redis缓冲区溢出及解决方案","link":"#redis缓冲区溢出及解决方案","children":[]}],"git":{"createdTime":1690559791000,"updatedTime":1691162914000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":3}]},"readingTime":{"minutes":4.33,"words":1299},"filePathRelative":"moyu/redis/05_redis.md","localizedDate":"2023年7月28日","excerpt":"<h2> 常用的主要数据类型有五种</h2>\\n<ol>\\n<li>字符串/REDIS_STRING：适用于 缓存、计数、共享Session、IP统计、分布式锁等。</li>\\n<li>列表/REDIS_LIST： 链表、消息队列、栈、有序的对象列表（如朋友圈的点赞顺序列表、评论顺序列表）。</li>\\n<li>哈希表/REDIS_HASH： 购物车信息、用户信息、Hash类型的(key, field, value)存储对象等。</li>\\n<li>集合/REDIS_SET：无序的唯一的键值结构： 好友、关注、粉丝、感兴趣的人集合等。</li>\\n<li>有序集合/REDIS_ZSET：访问排行榜、点赞排行、粉丝数排行等。</li>\\n</ol>","autoDesc":true}');export{e as data};