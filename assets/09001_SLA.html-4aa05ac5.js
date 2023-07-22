const t=JSON.parse('{"key":"v-364bd92e","path":"/moyu/jvm/09001_SLA.html","title":"SLA","lang":"zh-CN","frontmatter":{"title":"SLA","subtitle":"SLA","category":["JVM"],"tag":["摸鱼"],"order":9001,"description":"1. 可⽤性（Ava ila bilty） 可⽤性指的是系统服务能正常运⾏所占的时间百分⽐。 如果我们搭建了⼀个拥有“100％可⽤性”的系统服务，那就意味着这个系统在任何时候都能正常运⾏。是不是很完美？但真要实现这样的⽬标其实⾮常困难，并且成本也会很⾼。 我们知道，即便是⼤名⿍⿍的亚马逊AWS云计算服务这样⼤型的、对⽤户来说极为关键的系统，也不能承诺100％的可⽤性，它的系统服务从推出到现在，也有过服务中断（Service Outage）的时候。 对于许多系统⽽⾔，四个9的可⽤性（99.99％ Availability，或每年约50分钟的系统中断时间）即可以被认为是⾼可⽤性（High availability）。 说到这⾥，我来为你揭开⼀开始所提到的“99.9% Availability”的真实含义。 “99.9% Availability”指的是⼀天当中系统服务将会有⼤约86秒的服务间断期。服务间断也许是因为系统维护，也有可能是因为系统在更新升级系统服务。 86秒这个数字是怎么算出来的呢？ 99.9%意味着有0.1%的可能性系统服务会被中断，⽽⼀天中有24⼩时 × 60分钟 × 60秒，也就是有(24 × 60 × 60 × 0.001) = 86.4秒的可能系统服务被中断了。⽽上⾯所说的四个9的⾼可⽤性服务就是承诺可以将⼀天当中的服务中断时间缩短到只有(24 × 60 × 60 × 0.0001) = 8.64秒。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/jvm/09001_SLA.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:title","content":"SLA"}],["meta",{"property":"og:description","content":"1. 可⽤性（Ava ila bilty） 可⽤性指的是系统服务能正常运⾏所占的时间百分⽐。 如果我们搭建了⼀个拥有“100％可⽤性”的系统服务，那就意味着这个系统在任何时候都能正常运⾏。是不是很完美？但真要实现这样的⽬标其实⾮常困难，并且成本也会很⾼。 我们知道，即便是⼤名⿍⿍的亚马逊AWS云计算服务这样⼤型的、对⽤户来说极为关键的系统，也不能承诺100％的可⽤性，它的系统服务从推出到现在，也有过服务中断（Service Outage）的时候。 对于许多系统⽽⾔，四个9的可⽤性（99.99％ Availability，或每年约50分钟的系统中断时间）即可以被认为是⾼可⽤性（High availability）。 说到这⾥，我来为你揭开⼀开始所提到的“99.9% Availability”的真实含义。 “99.9% Availability”指的是⼀天当中系统服务将会有⼤约86秒的服务间断期。服务间断也许是因为系统维护，也有可能是因为系统在更新升级系统服务。 86秒这个数字是怎么算出来的呢？ 99.9%意味着有0.1%的可能性系统服务会被中断，⽽⼀天中有24⼩时 × 60分钟 × 60秒，也就是有(24 × 60 × 60 × 0.001) = 86.4秒的可能系统服务被中断了。⽽上⾯所说的四个9的⾼可⽤性服务就是承诺可以将⼀天当中的服务中断时间缩短到只有(24 × 60 × 60 × 0.0001) = 8.64秒。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-15T13:37:30.000Z"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2023-07-15T13:37:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SLA\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-15T13:37:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1689412478000,"updatedTime":1689428250000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":2}]},"readingTime":{"minutes":7.18,"words":2154},"filePathRelative":"moyu/jvm/09001_SLA.md","localizedDate":"2023年7月15日","excerpt":"<h1> 1. 可⽤性（Ava ila bilty）</h1>\\n<p>可⽤性指的是系统服务能正常运⾏所占的时间百分⽐。\\n如果我们搭建了⼀个拥有“100％可⽤性”的系统服务，那就意味着这个系统在任何时候都能正常运⾏。是不是很完美？但真要实现这样的⽬标其实⾮常困难，并且成本也会很⾼。\\n我们知道，即便是⼤名⿍⿍的亚马逊AWS云计算服务这样⼤型的、对⽤户来说极为关键的系统，也不能承诺100％的可⽤性，它的系统服务从推出到现在，也有过服务中断（Service Outage）的时候。\\n对于许多系统⽽⾔，四个9的可⽤性（99.99％ Availability，或每年约50分钟的系统中断时间）即可以被认为是⾼可⽤性（High availability）。\\n说到这⾥，我来为你揭开⼀开始所提到的“99.9% Availability”的真实含义。\\n“99.9% Availability”指的是⼀天当中系统服务将会有⼤约86秒的服务间断期。服务间断也许是因为系统维护，也有可能是因为系统在更新升级系统服务。\\n86秒这个数字是怎么算出来的呢？\\n99.9%意味着有0.1%的可能性系统服务会被中断，⽽⼀天中有24⼩时 × 60分钟 × 60秒，也就是有(24 × 60 × 60 × 0.001) = 86.4秒的可能系统服务被中断了。⽽上⾯所说的四个9的⾼可⽤性服务就是承诺可以将⼀天当中的服务中断时间缩短到只有(24 × 60 × 60 × 0.0001) = 8.64秒。</p>","autoDesc":true}');export{t as data};