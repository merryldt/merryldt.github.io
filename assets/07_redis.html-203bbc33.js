import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as i}from"./app-6f44c127.js";const e={},t=i(`<h2 id="需要了解的问题" tabindex="-1"><a class="header-anchor" href="#需要了解的问题" aria-hidden="true">#</a> 需要了解的问题</h2><ol><li>什么时候需要分布式锁？</li><li>加、解锁的代码位置有讲究么？</li><li>如何避免出现锁再也⽆法删除？「」</li><li>超时时间设置多少合适呢？</li><li>如何避免锁被其他线程释放</li><li>如何实现重⼊锁？</li><li>主从架构会带来什么安全问题？</li><li>什么是 Redlock</li><li>Redisson 分布式锁最佳实战</li><li>看⻔狗实现原理</li></ol><h2 id="什么时候需要分布式锁" tabindex="-1"><a class="header-anchor" href="#什么时候需要分布式锁" aria-hidden="true">#</a> 什么时候需要分布式锁？</h2><ul><li>为了并发问题；</li><li>重复请求；</li></ul><h2 id="使用分布式锁需要考虑的问题" tabindex="-1"><a class="header-anchor" href="#使用分布式锁需要考虑的问题" aria-hidden="true">#</a> 使用分布式锁需要考虑的问题</h2><ol><li>锁加在什么地方</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 加锁</span>
            redisLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 业务逻辑处理</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 释放锁</span>
            redisLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>超时设置<br> 目的：为了解决锁一直被占用的问题。 <ul><li><strong>需要正确设置锁超时的时间</strong>； <ol><li>在测试环境多次测试，压测多轮，计算出平均<strong>执行时间</strong>m。</li><li>锁的超时时间设置为平均执行时间的5倍左右，为程序执行期间可能发生的网络IO操作、GC、网络延迟等。留点buffer。</li></ol></li></ul></li><li>释放了不是自己加的锁</li><li>锁续期<br> 锁快过期，但是业务逻辑还没执行完成；需要给锁重新设置过期时间。<br> Redisson 可以自动完成；</li></ol>`,8),l=[t];function c(o,p){return s(),a("div",null,l)}const r=n(e,[["render",c],["__file","07_redis.html.vue"]]);export{r as default};
