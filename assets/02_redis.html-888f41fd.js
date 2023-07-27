const t=JSON.parse('{"key":"v-87f6f4a2","path":"/moyu/redis/02_redis.html","title":"讲讲 Redis 缓存更新一致性","lang":"zh-CN","frontmatter":{"title":"讲讲 Redis 缓存更新一致性","subtitle":"讲讲 Redis 缓存更新一致性","category":["redis"],"tag":["摸鱼"],"order":2,"description":"在使用redis作为缓存时,写操作 当执行写操作后，因为需要保证从缓存读取到的数据与数据库中的数据是一致的，这就需要对缓存进行更新。 旧key 是删除还是更新？缓存和数据库的更新顺序？ 一、删除缓存 先删除缓存，再更新数据库 并发问题: 写： 线程张三 读： 线程李四 顺序 线程:张三 线程:李四 数据库 缓存 1 删除缓存 v1 2 缓存失效 v1 3 从数据库读取数据为v1 v1 4 更新数据库为v2 v2 5 将v1写入缓存 v2 v1","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/redis/02_redis.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"讲讲 Redis 缓存更新一致性"}],["meta",{"property":"og:description","content":"在使用redis作为缓存时,写操作 当执行写操作后，因为需要保证从缓存读取到的数据与数据库中的数据是一致的，这就需要对缓存进行更新。 旧key 是删除还是更新？缓存和数据库的更新顺序？ 一、删除缓存 先删除缓存，再更新数据库 并发问题: 写： 线程张三 读： 线程李四 顺序 线程:张三 线程:李四 数据库 缓存 1 删除缓存 v1 2 缓存失效 v1 3 从数据库读取数据为v1 v1 4 更新数据库为v2 v2 5 将v1写入缓存 v2 v1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-27T14:49:16.000Z"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-07-27T14:49:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"讲讲 Redis 缓存更新一致性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-27T14:49:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"在使用redis作为缓存时,写操作","slug":"在使用redis作为缓存时-写操作","link":"#在使用redis作为缓存时-写操作","children":[]},{"level":2,"title":"旧key 是删除还是更新？缓存和数据库的更新顺序？","slug":"旧key-是删除还是更新-缓存和数据库的更新顺序","link":"#旧key-是删除还是更新-缓存和数据库的更新顺序","children":[]},{"level":2,"title":"一、删除缓存","slug":"一、删除缓存","link":"#一、删除缓存","children":[{"level":3,"title":"先删除缓存，再更新数据库","slug":"先删除缓存-再更新数据库","link":"#先删除缓存-再更新数据库","children":[]},{"level":3,"title":"先更新数据库，再删除缓存","slug":"先更新数据库-再删除缓存","link":"#先更新数据库-再删除缓存","children":[]}]},{"level":2,"title":"二、更新缓存","slug":"二、更新缓存","link":"#二、更新缓存","children":[{"level":3,"title":"先更新缓存，再更新数据库","slug":"先更新缓存-再更新数据库","link":"#先更新缓存-再更新数据库","children":[]},{"level":3,"title":"先更新数据库，再更新缓存","slug":"先更新数据库-再更新缓存","link":"#先更新数据库-再更新缓存","children":[]}]},{"level":2,"title":"对于旧key,目前已知的两种策略","slug":"对于旧key-目前已知的两种策略","link":"#对于旧key-目前已知的两种策略","children":[]},{"level":2,"title":"更新缓存和数据库的前后顺序，也有两种","slug":"更新缓存和数据库的前后顺序-也有两种","link":"#更新缓存和数据库的前后顺序-也有两种","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"对系统吞吐量的影响：","slug":"对系统吞吐量的影响","link":"#对系统吞吐量的影响","children":[]},{"level":3,"title":"并发安全性：","slug":"并发安全性","link":"#并发安全性","children":[]}]}],"git":{"createdTime":1690468818000,"updatedTime":1690469356000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":2}]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"moyu/redis/02_redis.md","localizedDate":"2023年7月27日","excerpt":"<h2> 在使用redis作为缓存时,写操作</h2>\\n<p>当执行写操作后，因为需要保证从缓存读取到的数据与数据库中的数据是一致的，这就需要对缓存进行更新。</p>\\n<h2> 旧key 是删除还是更新？缓存和数据库的更新顺序？</h2>\\n<h2> 一、删除缓存</h2>\\n<h3> 先删除缓存，再更新数据库</h3>\\n<ul>\\n<li>并发问题:</li>\\n</ul>\\n<blockquote>\\n<blockquote>\\n<p>写： 线程张三<br>\\n读： 线程李四</p>\\n</blockquote>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">顺序</th>\\n<th style=\\"text-align:center\\">线程:张三</th>\\n<th style=\\"text-align:right\\">线程:李四</th>\\n<th style=\\"text-align:right\\">数据库</th>\\n<th style=\\"text-align:right\\">缓存</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\">1</td>\\n<td style=\\"text-align:center\\">删除缓存</td>\\n<td style=\\"text-align:right\\"></td>\\n<td style=\\"text-align:right\\">v1</td>\\n<td style=\\"text-align:right\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">2</td>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:right\\">缓存失效</td>\\n<td style=\\"text-align:right\\">v1</td>\\n<td style=\\"text-align:right\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">3</td>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:right\\">从数据库读取数据为v1</td>\\n<td style=\\"text-align:right\\">v1</td>\\n<td style=\\"text-align:right\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">4</td>\\n<td style=\\"text-align:center\\">更新数据库为v2</td>\\n<td style=\\"text-align:right\\"></td>\\n<td style=\\"text-align:right\\">v2</td>\\n<td style=\\"text-align:right\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\">5</td>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:right\\">将v1写入缓存</td>\\n<td style=\\"text-align:right\\">v2</td>\\n<td style=\\"text-align:right\\">v1</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
