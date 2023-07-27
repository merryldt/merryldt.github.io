import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,b as d}from"./app-6d3621ef.js";const i={},a=d('<h2 id="在使用redis作为缓存时-写操作" tabindex="-1"><a class="header-anchor" href="#在使用redis作为缓存时-写操作" aria-hidden="true">#</a> 在使用redis作为缓存时,写操作</h2><p>当执行写操作后，因为需要保证从缓存读取到的数据与数据库中的数据是一致的，这就需要对缓存进行更新。</p><h2 id="旧key-是删除还是更新-缓存和数据库的更新顺序" tabindex="-1"><a class="header-anchor" href="#旧key-是删除还是更新-缓存和数据库的更新顺序" aria-hidden="true">#</a> 旧key 是删除还是更新？缓存和数据库的更新顺序？</h2><h2 id="删除缓存" tabindex="-1"><a class="header-anchor" href="#删除缓存" aria-hidden="true">#</a> 删除缓存</h2><h3 id="先删除缓存-再更新数据库" tabindex="-1"><a class="header-anchor" href="#先删除缓存-再更新数据库" aria-hidden="true">#</a> 先删除缓存，再更新数据库</h3><ul><li>并发问题:</li></ul><blockquote><blockquote><p>写： 线程张三<br> 读： 线程李四</p></blockquote></blockquote><table><thead><tr><th style="text-align:left;">顺序</th><th style="text-align:center;">线程:张三</th><th style="text-align:right;">线程:李四</th><th style="text-align:right;">数据库</th><th style="text-align:right;">缓存</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:center;">删除缓存</td><td style="text-align:right;"></td><td style="text-align:right;">v1</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">2</td><td style="text-align:center;"></td><td style="text-align:right;">缓存失效</td><td style="text-align:right;">v1</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">3</td><td style="text-align:center;"></td><td style="text-align:right;">从数据库读取数据为v1</td><td style="text-align:right;">v1</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">4</td><td style="text-align:center;">更新数据库为v2</td><td style="text-align:right;"></td><td style="text-align:right;">v2</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">5</td><td style="text-align:center;"></td><td style="text-align:right;">将v1写入缓存</td><td style="text-align:right;">v2</td><td style="text-align:right;">v1</td></tr></tbody></table><h3 id="先更新数据库-再删除缓存" tabindex="-1"><a class="header-anchor" href="#先更新数据库-再删除缓存" aria-hidden="true">#</a> 先更新数据库，再删除缓存</h3><ol><li>若数据库更新成功，删除缓存操作失败，则此后读到的都是缓存中过期的数据，造成不一致问题。</li><li>并发问题:</li></ol><blockquote><blockquote><p>读： 线程张三<br> 写： 线程李四</p></blockquote></blockquote><table><thead><tr><th style="text-align:left;">顺序</th><th style="text-align:center;">线程:张三</th><th style="text-align:right;">线程:李四</th><th style="text-align:right;">数据库</th><th style="text-align:right;">缓存</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:center;">缓存失效</td><td style="text-align:right;"></td><td style="text-align:right;">v1</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">2</td><td style="text-align:center;">从数据库读取数据为v1</td><td style="text-align:right;"></td><td style="text-align:right;">v1</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">3</td><td style="text-align:center;"></td><td style="text-align:right;">更新数据库</td><td style="text-align:right;">v2</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">4</td><td style="text-align:center;"></td><td style="text-align:right;">删除缓存</td><td style="text-align:right;">v2</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">5</td><td style="text-align:center;">写入缓存</td><td style="text-align:right;"></td><td style="text-align:right;">v2</td><td style="text-align:right;">v1</td></tr></tbody></table><h2 id="更新缓存" tabindex="-1"><a class="header-anchor" href="#更新缓存" aria-hidden="true">#</a> 更新缓存</h2><h3 id="先更新缓存-再更新数据库" tabindex="-1"><a class="header-anchor" href="#先更新缓存-再更新数据库" aria-hidden="true">#</a> 先更新缓存，再更新数据库</h3><ol><li>缓存更新成功，数据库有更新失败的风险；导致最新的数据未持久化，风险很高。</li><li>并发问题。</li></ol><table><thead><tr><th style="text-align:left;">顺序</th><th style="text-align:center;">线程:张三</th><th style="text-align:right;">线程:李四</th><th style="text-align:right;">数据库</th><th style="text-align:right;">缓存</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:center;"></td><td style="text-align:right;"></td><td style="text-align:right;">v0</td><td style="text-align:right;">v0</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:center;">更新缓存为v1</td><td style="text-align:right;"></td><td style="text-align:right;">v0</td><td style="text-align:right;">v1</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:center;"></td><td style="text-align:right;">更新缓存为v2</td><td style="text-align:right;">v0</td><td style="text-align:right;">v2</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:center;"></td><td style="text-align:right;">更新数据库为v2</td><td style="text-align:right;">v2</td><td style="text-align:right;">v2</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:center;">更新数据库为v1</td><td style="text-align:right;"></td><td style="text-align:right;">v1</td><td style="text-align:right;">v2</td></tr></tbody></table><h3 id="先更新数据库-再更新缓存" tabindex="-1"><a class="header-anchor" href="#先更新数据库-再更新缓存" aria-hidden="true">#</a> 先更新数据库，再更新缓存</h3><ol><li>同删除缓存策略一样，若数据库更新成功缓存更新失败则会造成数据不一致问题。</li><li>并发问题。</li></ol><table><thead><tr><th style="text-align:left;">顺序</th><th style="text-align:center;">线程:张三</th><th style="text-align:right;">线程:李四</th><th style="text-align:right;">数据库</th><th style="text-align:right;">缓存</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:center;"></td><td style="text-align:right;"></td><td style="text-align:right;">v0</td><td style="text-align:right;">v0</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:center;">更新缓存为v1</td><td style="text-align:right;"></td><td style="text-align:right;">v1</td><td style="text-align:right;">v0</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:center;"></td><td style="text-align:right;">更新缓存为v2</td><td style="text-align:right;">v2</td><td style="text-align:right;">v0</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:center;"></td><td style="text-align:right;">更新数据库为v2</td><td style="text-align:right;">v2</td><td style="text-align:right;">v2</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:center;">更新数据库为v1</td><td style="text-align:right;"></td><td style="text-align:right;">v2</td><td style="text-align:right;">v1</td></tr></tbody></table><h2 id="对于旧key-目前已知的两种策略" tabindex="-1"><a class="header-anchor" href="#对于旧key-目前已知的两种策略" aria-hidden="true">#</a> 对于旧key,目前已知的两种策略</h2><ol><li>删除失效缓存: 读取时会因为未命中缓存而从数据库中读取新的数据并更新到缓存中</li><li>更新缓存: 直接将新的数据写入缓存覆盖过期数据</li></ol><h2 id="更新缓存和数据库的前后顺序-也有两种" tabindex="-1"><a class="header-anchor" href="#更新缓存和数据库的前后顺序-也有两种" aria-hidden="true">#</a> 更新缓存和数据库的前后顺序，也有两种</h2><ol><li>先数据库后缓存</li><li>先缓存后数据库</li></ol><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>根据实际场景选择一款就行，折中</p>',25),r=[a];function g(h,n){return e(),l("div",null,r)}const y=t(i,[["render",g],["__file","02_redis.html.vue"]]);export{y as default};
