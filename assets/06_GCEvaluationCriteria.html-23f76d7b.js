import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as n,d as i,a as h,w as o,b as s,e as c}from"./app-938118a4.js";const d="/assets/06image-cba763fa.png",l={},m=s('<h1 id="gc的两个核心指标" tabindex="-1"><a class="header-anchor" href="#gc的两个核心指标" aria-hidden="true">#</a> GC的两个核心指标</h1><h2 id="延迟-latency" tabindex="-1"><a class="header-anchor" href="#延迟-latency" aria-hidden="true">#</a> 延迟(Latency):</h2><p>最大停顿时间，即垃圾收集过程中一次STW的最长时间，越短越好，一定程度上可以接受频次的增大.</p><h3 id="吞吐量-throughput" tabindex="-1"><a class="header-anchor" href="#吞吐量-throughput" aria-hidden="true">#</a> 吞吐量(Throughput):</h3><p>应用系统的生命周期内，由于GC线程会占用应用程序当前可用的CPU 时钟周期，吞吐量即为应用程序有效花费的时间占系统总运行时间的百分比。<br> 例如： 系统运行了100min,GC耗时1min,则系统吞吐量为99%,吞吐量优先的收集器可以接受较长的停顿。</p><h1 id="p99-图示" tabindex="-1"><a class="header-anchor" href="#p99-图示" aria-hidden="true">#</a> p99 图示</h1><p><img src="'+d+'" alt="p99" loading="lazy"> p99 即为<strong>一次停顿的时间不超过应用服务的 TP9999，GC 的吞吐量不小于 99.99%</strong>。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子：</h2><p>假设某个服务 A 的 TP9999 为 80 ms，平均 GC 停顿为 30 ms，那么该服务的最大停顿时间最好不要超过 80 ms，GC 频次控制在 5 min 以上一次。如果满足不了，那就需要调优或者通过更多资源来进行并联冗余。<br> 1/10000 = (1(次数)* x (平均GC停顿时间)) / y(总时间)<br> 5min 等于 5<em>60</em>1000 = 300000毫秒；30 /300000= 1/10000</p><h1 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h1>',10);function p(u,_){const e=r("RouterLink");return t(),n("div",null,[m,i("p",null,[h(e,{to:"/moyu/jvm/09002_ServerPerformanceParameters.html"},{default:o(()=>[c("服务器的性能参数")]),_:1})])])}const x=a(l,[["render",p],["__file","06_GCEvaluationCriteria.html.vue"]]);export{x as default};
