const e=JSON.parse('{"key":"v-364bd92e","path":"/moyu/jvm/09001_SLA.html","title":"","lang":"zh-CN","frontmatter":{"description":"可⽤性（Ava ila bilty） 可⽤性指的是系统服务能正常运⾏所占的时间百分⽐。 如果我们搭建了⼀个拥有“100％可⽤性”的系统服务，那就意味着这个系统在任何时候都能正常运⾏。是不是很完美？但真要实现这样的⽬标其实⾮常困难，并且成本也会很⾼。 我们知道，即便是⼤名⿍⿍的亚马逊AWS云计算服务这样⼤型的、对⽤户来说极为关键的系统，也不能承诺100％的可⽤性，它的系统服务从推出到现在，也有过服务中断（Service Outage）的时候。 对于许多系统⽽⾔，四个9的可⽤性（99.99％ Availability，或每年约50分钟的系统中断时间）即可以被认为是⾼可⽤性（High availability）。 说到这⾥，我来为你揭开⼀开始所提到的“99.9% Availability”的真实含义。 “99.9% Availability”指的是⼀天当中系统服务将会有⼤约86秒的服务间断期。服务间断也许是因为系统维护，也有可能是因为系统在更新升级系统服务。 86秒这个数字是怎么算出来的呢？ 99.9%意味着有0.1%的可能性系统服务会被中断，⽽⼀天中有24⼩时 × 60分钟 × 60秒，也就是有(24 × 60 × 60 × 0.001) = 86.4秒的可能系统服务被中断了。⽽上⾯所说的四个9的⾼可⽤性服务就是承诺可以将⼀天当中的服务中断时间缩短到只有(24 × 60 × 60 × 0.0001) = 8.64秒。 准确性（Ac c ur a c y） 准确性指的是我们所设计的系统服务中，是否允许某些数据是不准确的或者是丢失了的。如果允许这样的情况发⽣，⽤户可以接受的概率（百分⽐）是多少？ 这该怎么衡量呢？不同的系统平台可能会⽤不同的指标去定义准确性。很多时候，系统架构会以错误率（Error Rate）来定义这⼀项SLA。 怎么计算错误率呢？可以⽤导致系统产⽣内部错误（Internal Error）的有效请求数，除以这期间的有效请求总数。 image.png 例如，我们在⼀分钟内发送100个有效请求到系统中，其中有5个请求导致系统返回内部错误，那我们可以说这⼀分钟系统的错误率是 5 / 100 = 5%。 下⾯，我想带你看看硅⾕⼀线公司所搭建的架构平台的准确性SLA。 Google Cloud Platform的SLA中，有着这样的准确性定义：每个⽉系统的错误率超过5%的时间要少于0.1%，以每分钟为单位来计算。 ⽽亚马逊AWS云计算平台有着稍微不⼀样的准确性定义：以每5分钟为单位，错误率不会超过0.1%。 你看，我们可以⽤错误率来定义准确性，但具体该如何评估系统的准确性呢？⼀般来说，我们可以采⽤性能测试（Performance Test）或者是查看系统⽇志（Log）两种⽅法来评估。 具体的做法我会在后⾯展开讲解，今天你先理解这项指标就可以了。 系统容量（Ca pa c ity） 在数据处理中，系统容量通常指的是系统能够⽀持的预期负载量是多少，⼀般会以每秒的请求数为单位来表⽰。 我们常常可以看见，某个系统的架构可以处理的QPS （Queries Per Second）是多少⼜或者RPS（Requests Per Second）是多少。这⾥的QPS或者是RPS就是指系统每秒可以响应多少请求数。 我们来看看之前Twitter发布的⼀项数据，Twitter系统可以响应30万的QPS来读取Twitter Timelines。这⾥Twitter系统给出的就是他们对于系统容量（Capacity）的SLA。 你可能会问，我要怎么给⾃⼰设计的系统架构定义出准确的QPS呢？以我的经验看，可以有下⾯这⼏种⽅式。 第⼀种，是使⽤限流（Throttling）的⽅式。 如果你是使⽤Java语⾔进⾏编程的，就可以使⽤Google Guava库中的RateLimiter类来定义每秒最多发送多少请求到后台处理。 假设我们在每台服务器都定义了⼀个每秒最多处理1000个请求的RateLimiter，⽽我们有N台服务器，在最理想的情况下，我们的QPS可以达到1000 * N。 这⾥要注意的雷区是，这个请求数并不是设置得越多越好。因为每台服务器的内存有限，过多的请求堆积在服务器中有可能会导致内存溢出 （Out-Of-Memory）的异常发⽣，也就是所有请求所需要占⽤的内存超过了服务器能提供的内存，从⽽让整个服务器崩溃。 第⼆种，是在系统交付前进⾏性能测试（Performance Test）。 我们可以使⽤像Apache JMeter⼜或是LoadRunner这类型的⼯具对系统进⾏性能测试。这类⼯具可以测试出系统在峰值状态下可以应对的QPS 是多少。 当然了，这⾥也是有雷区的。 有的开发者可能使⽤同⼀类型的请求参数，导致后台服务器在多数情况下命中缓存（Cache Hit）。这个时候得到的QPS可能并不是真实的QPS。 打个⽐⽅，服务器处理请求的正常流程需要查询后台数据库，得到数据库结果后再返回给⽤户，这个过程平均需要1秒。在第⼀次拿到数据库结果后，这个数据就会被保存在缓存中，⽽如果后续的请求都使⽤同⼀类型的参数，导致结果不需要从数据库得到，⽽是直接从缓存中得到，这个过程我们假设只需要0.1秒。那这样，我们所计算出来的QPS就会⽐正常的⾼出10倍。所以在⽣成请求的时候，要格外注意这⼀点。 第三种，是分析系统在实际使⽤时产⽣的⽇志（Log）。 系统上线使⽤后，我们可以得到⽇志⽂件。⼀般的⽇志⽂件会记录每个时刻产⽣的请求。我们可以通过系统每天在最繁忙时刻所接收到的请求数， 来计算出系统可以承载的QPS。 不过，这种⽅法不⼀定可以得到系统可以承载的最⼤QPS。 在这⾥打个⽐喻，⼀家可以容纳上百桌客⼈的餐馆刚开业，因为客流量还⽐较⼩，在每天最繁忙的时候只接待了10桌客⼈。那我们可以说这家餐馆最多只能接待10桌客⼈吗？不可以。 同样的，以分析系统⽇志的⽅法计算出来的QPS并不⼀定是服务器能够承载的最⼤QPS。想要得到系统能承受的最⼤QPS，更多的是性能测试和⽇志分析相结合的⼿段。 延迟（Latency） 延迟指的是系统在收到⽤户的请求到响应这个请求之间的时间间隔。 在定义延迟的SLA时，我们常常看到系统的SLA会有p95或者是p99这样的延迟声明。这⾥的p指的是percentile，也就是百分位的意思。如果说⼀个系统的p95 延迟是1秒的话，那就表⽰在100个请求⾥⾯有95个请求的响应时间会少于1秒，⽽剩下的5个请求响应时间会⼤于1秒。 下⾯我们⽤⼀个具体的例⼦来说明延迟这项指标在SLA中的重要性。 假设，我们已经设计好了⼀个社交软件的系统架构。这个社交软件在接收到⽤户的请求之后，需要读取数据库中的内容返回给⽤户。 为了降低系统的延迟，我们会将数据库中内容放进缓存（Cache）中，以此来减少数据库的读取时间。在系统运⾏了⼀段时间后，我们得到了⼀些缓存命中率（Cache Hit Ratio）的信息。有90%的请求命中了缓存，⽽剩下的10%的请求则需要重新从数据库中读取内容。 这时服务器所给我们的p95或者p99延迟恰恰就衡量了系统的最长时间，也就是从数据库中读取内容的时间。作为⼀个优秀架构师，你可以通过改进缓存策略从⽽提⾼缓存命中率，也可以通过优化数据库的Schema或者索引（Index）来降低p95或p99 延迟。 总⽽⾔之，当p95或者p99过⾼时，总会有5%或者1%的⽤户抱怨产品的⽤户体验太差，这都是我们要通过优化系统来避免的。","head":[["meta",{"property":"og:url","content":"https://merryldt.github.io/moyu/jvm/09001_SLA.html"}],["meta",{"property":"og:site_name","content":"魔力社区"}],["meta",{"property":"og:description","content":"可⽤性（Ava ila bilty） 可⽤性指的是系统服务能正常运⾏所占的时间百分⽐。 如果我们搭建了⼀个拥有“100％可⽤性”的系统服务，那就意味着这个系统在任何时候都能正常运⾏。是不是很完美？但真要实现这样的⽬标其实⾮常困难，并且成本也会很⾼。 我们知道，即便是⼤名⿍⿍的亚马逊AWS云计算服务这样⼤型的、对⽤户来说极为关键的系统，也不能承诺100％的可⽤性，它的系统服务从推出到现在，也有过服务中断（Service Outage）的时候。 对于许多系统⽽⾔，四个9的可⽤性（99.99％ Availability，或每年约50分钟的系统中断时间）即可以被认为是⾼可⽤性（High availability）。 说到这⾥，我来为你揭开⼀开始所提到的“99.9% Availability”的真实含义。 “99.9% Availability”指的是⼀天当中系统服务将会有⼤约86秒的服务间断期。服务间断也许是因为系统维护，也有可能是因为系统在更新升级系统服务。 86秒这个数字是怎么算出来的呢？ 99.9%意味着有0.1%的可能性系统服务会被中断，⽽⼀天中有24⼩时 × 60分钟 × 60秒，也就是有(24 × 60 × 60 × 0.001) = 86.4秒的可能系统服务被中断了。⽽上⾯所说的四个9的⾼可⽤性服务就是承诺可以将⼀天当中的服务中断时间缩短到只有(24 × 60 × 60 × 0.0001) = 8.64秒。 准确性（Ac c ur a c y） 准确性指的是我们所设计的系统服务中，是否允许某些数据是不准确的或者是丢失了的。如果允许这样的情况发⽣，⽤户可以接受的概率（百分⽐）是多少？ 这该怎么衡量呢？不同的系统平台可能会⽤不同的指标去定义准确性。很多时候，系统架构会以错误率（Error Rate）来定义这⼀项SLA。 怎么计算错误率呢？可以⽤导致系统产⽣内部错误（Internal Error）的有效请求数，除以这期间的有效请求总数。 image.png 例如，我们在⼀分钟内发送100个有效请求到系统中，其中有5个请求导致系统返回内部错误，那我们可以说这⼀分钟系统的错误率是 5 / 100 = 5%。 下⾯，我想带你看看硅⾕⼀线公司所搭建的架构平台的准确性SLA。 Google Cloud Platform的SLA中，有着这样的准确性定义：每个⽉系统的错误率超过5%的时间要少于0.1%，以每分钟为单位来计算。 ⽽亚马逊AWS云计算平台有着稍微不⼀样的准确性定义：以每5分钟为单位，错误率不会超过0.1%。 你看，我们可以⽤错误率来定义准确性，但具体该如何评估系统的准确性呢？⼀般来说，我们可以采⽤性能测试（Performance Test）或者是查看系统⽇志（Log）两种⽅法来评估。 具体的做法我会在后⾯展开讲解，今天你先理解这项指标就可以了。 系统容量（Ca pa c ity） 在数据处理中，系统容量通常指的是系统能够⽀持的预期负载量是多少，⼀般会以每秒的请求数为单位来表⽰。 我们常常可以看见，某个系统的架构可以处理的QPS （Queries Per Second）是多少⼜或者RPS（Requests Per Second）是多少。这⾥的QPS或者是RPS就是指系统每秒可以响应多少请求数。 我们来看看之前Twitter发布的⼀项数据，Twitter系统可以响应30万的QPS来读取Twitter Timelines。这⾥Twitter系统给出的就是他们对于系统容量（Capacity）的SLA。 你可能会问，我要怎么给⾃⼰设计的系统架构定义出准确的QPS呢？以我的经验看，可以有下⾯这⼏种⽅式。 第⼀种，是使⽤限流（Throttling）的⽅式。 如果你是使⽤Java语⾔进⾏编程的，就可以使⽤Google Guava库中的RateLimiter类来定义每秒最多发送多少请求到后台处理。 假设我们在每台服务器都定义了⼀个每秒最多处理1000个请求的RateLimiter，⽽我们有N台服务器，在最理想的情况下，我们的QPS可以达到1000 * N。 这⾥要注意的雷区是，这个请求数并不是设置得越多越好。因为每台服务器的内存有限，过多的请求堆积在服务器中有可能会导致内存溢出 （Out-Of-Memory）的异常发⽣，也就是所有请求所需要占⽤的内存超过了服务器能提供的内存，从⽽让整个服务器崩溃。 第⼆种，是在系统交付前进⾏性能测试（Performance Test）。 我们可以使⽤像Apache JMeter⼜或是LoadRunner这类型的⼯具对系统进⾏性能测试。这类⼯具可以测试出系统在峰值状态下可以应对的QPS 是多少。 当然了，这⾥也是有雷区的。 有的开发者可能使⽤同⼀类型的请求参数，导致后台服务器在多数情况下命中缓存（Cache Hit）。这个时候得到的QPS可能并不是真实的QPS。 打个⽐⽅，服务器处理请求的正常流程需要查询后台数据库，得到数据库结果后再返回给⽤户，这个过程平均需要1秒。在第⼀次拿到数据库结果后，这个数据就会被保存在缓存中，⽽如果后续的请求都使⽤同⼀类型的参数，导致结果不需要从数据库得到，⽽是直接从缓存中得到，这个过程我们假设只需要0.1秒。那这样，我们所计算出来的QPS就会⽐正常的⾼出10倍。所以在⽣成请求的时候，要格外注意这⼀点。 第三种，是分析系统在实际使⽤时产⽣的⽇志（Log）。 系统上线使⽤后，我们可以得到⽇志⽂件。⼀般的⽇志⽂件会记录每个时刻产⽣的请求。我们可以通过系统每天在最繁忙时刻所接收到的请求数， 来计算出系统可以承载的QPS。 不过，这种⽅法不⼀定可以得到系统可以承载的最⼤QPS。 在这⾥打个⽐喻，⼀家可以容纳上百桌客⼈的餐馆刚开业，因为客流量还⽐较⼩，在每天最繁忙的时候只接待了10桌客⼈。那我们可以说这家餐馆最多只能接待10桌客⼈吗？不可以。 同样的，以分析系统⽇志的⽅法计算出来的QPS并不⼀定是服务器能够承载的最⼤QPS。想要得到系统能承受的最⼤QPS，更多的是性能测试和⽇志分析相结合的⼿段。 延迟（Latency） 延迟指的是系统在收到⽤户的请求到响应这个请求之间的时间间隔。 在定义延迟的SLA时，我们常常看到系统的SLA会有p95或者是p99这样的延迟声明。这⾥的p指的是percentile，也就是百分位的意思。如果说⼀个系统的p95 延迟是1秒的话，那就表⽰在100个请求⾥⾯有95个请求的响应时间会少于1秒，⽽剩下的5个请求响应时间会⼤于1秒。 下⾯我们⽤⼀个具体的例⼦来说明延迟这项指标在SLA中的重要性。 假设，我们已经设计好了⼀个社交软件的系统架构。这个社交软件在接收到⽤户的请求之后，需要读取数据库中的内容返回给⽤户。 为了降低系统的延迟，我们会将数据库中内容放进缓存（Cache）中，以此来减少数据库的读取时间。在系统运⾏了⼀段时间后，我们得到了⼀些缓存命中率（Cache Hit Ratio）的信息。有90%的请求命中了缓存，⽽剩下的10%的请求则需要重新从数据库中读取内容。 这时服务器所给我们的p95或者p99延迟恰恰就衡量了系统的最长时间，也就是从数据库中读取内容的时间。作为⼀个优秀架构师，你可以通过改进缓存策略从⽽提⾼缓存命中率，也可以通过优化数据库的Schema或者索引（Index）来降低p95或p99 延迟。 总⽽⾔之，当p95或者p99过⾼时，总会有5%或者1%的⽤户抱怨产品的⽤户体验太差，这都是我们要通过优化系统来避免的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-15T09:14:38.000Z"}],["meta",{"property":"article:author","content":"坎布里奇"}],["meta",{"property":"article:modified_time","content":"2023-07-15T09:14:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-15T09:14:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"坎布里奇\\",\\"url\\":\\"https://merryldt.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1689412478000,"updatedTime":1689412478000,"contributors":[{"name":"kansuper","email":"17835059864@163.com","commits":1}]},"readingTime":{"minutes":7.14,"words":2143},"filePathRelative":"moyu/jvm/09001_SLA.md","localizedDate":"2023年7月15日","excerpt":"<ol>\\n<li>可⽤性（Ava ila bilty）\\n可⽤性指的是系统服务能正常运⾏所占的时间百分⽐。\\n如果我们搭建了⼀个拥有“100％可⽤性”的系统服务，那就意味着这个系统在任何时候都能正常运⾏。是不是很完美？但真要实现这样的⽬标其实⾮常困难，并且成本也会很⾼。\\n我们知道，即便是⼤名⿍⿍的亚马逊AWS云计算服务这样⼤型的、对⽤户来说极为关键的系统，也不能承诺100％的可⽤性，它的系统服务从推出到现在，也有过服务中断（Service Outage）的时候。\\n对于许多系统⽽⾔，四个9的可⽤性（99.99％ Availability，或每年约50分钟的系统中断时间）即可以被认为是⾼可⽤性（High availability）。\\n说到这⾥，我来为你揭开⼀开始所提到的“99.9% Availability”的真实含义。\\n“99.9% Availability”指的是⼀天当中系统服务将会有⼤约86秒的服务间断期。服务间断也许是因为系统维护，也有可能是因为系统在更新升级系统服务。\\n86秒这个数字是怎么算出来的呢？\\n99.9%意味着有0.1%的可能性系统服务会被中断，⽽⼀天中有24⼩时 × 60分钟 × 60秒，也就是有(24 × 60 × 60 × 0.001) = 86.4秒的可能系统服务被中断了。⽽上⾯所说的四个9的⾼可⽤性服务就是承诺可以将⼀天当中的服务中断时间缩短到只有(24 × 60 × 60 × 0.0001) = 8.64秒。</li>\\n<li>准确性（Ac c ur a c y）\\n准确性指的是我们所设计的系统服务中，是否允许某些数据是不准确的或者是丢失了的。如果允许这样的情况发⽣，⽤户可以接受的概率（百分⽐）是多少？\\n这该怎么衡量呢？不同的系统平台可能会⽤不同的指标去定义准确性。很多时候，系统架构会以错误率（Error Rate）来定义这⼀项SLA。\\n怎么计算错误率呢？可以⽤导致系统产⽣内部错误（Internal Error）的有效请求数，除以这期间的有效请求总数。\\nimage.png\\n例如，我们在⼀分钟内发送100个有效请求到系统中，其中有5个请求导致系统返回内部错误，那我们可以说这⼀分钟系统的错误率是 5 / 100 = 5%。\\n下⾯，我想带你看看硅⾕⼀线公司所搭建的架构平台的准确性SLA。\\nGoogle Cloud Platform的SLA中，有着这样的准确性定义：每个⽉系统的错误率超过5%的时间要少于0.1%，以每分钟为单位来计算。\\n⽽亚马逊AWS云计算平台有着稍微不⼀样的准确性定义：以每5分钟为单位，错误率不会超过0.1%。\\n你看，我们可以⽤错误率来定义准确性，但具体该如何评估系统的准确性呢？⼀般来说，我们可以采⽤性能测试（Performance Test）或者是查看系统⽇志（Log）两种⽅法来评估。\\n具体的做法我会在后⾯展开讲解，今天你先理解这项指标就可以了。</li>\\n<li>系统容量（Ca pa c ity）\\n在数据处理中，系统容量通常指的是系统能够⽀持的预期负载量是多少，⼀般会以每秒的请求数为单位来表⽰。\\n我们常常可以看见，某个系统的架构可以处理的QPS （Queries Per Second）是多少⼜或者RPS（Requests Per Second）是多少。这⾥的QPS或者是RPS就是指系统每秒可以响应多少请求数。\\n我们来看看之前Twitter发布的⼀项数据，Twitter系统可以响应30万的QPS来读取Twitter Timelines。这⾥Twitter系统给出的就是他们对于系统容量（Capacity）的SLA。\\n你可能会问，我要怎么给⾃⼰设计的系统架构定义出准确的QPS呢？以我的经验看，可以有下⾯这⼏种⽅式。\\n第⼀种，是使⽤限流（Throttling）的⽅式。\\n如果你是使⽤Java语⾔进⾏编程的，就可以使⽤Google Guava库中的RateLimiter类来定义每秒最多发送多少请求到后台处理。\\n假设我们在每台服务器都定义了⼀个每秒最多处理1000个请求的RateLimiter，⽽我们有N台服务器，在最理想的情况下，我们的QPS可以达到1000 * N。\\n这⾥要注意的雷区是，这个请求数并不是设置得越多越好。因为每台服务器的内存有限，过多的请求堆积在服务器中有可能会导致内存溢出\\n（Out-Of-Memory）的异常发⽣，也就是所有请求所需要占⽤的内存超过了服务器能提供的内存，从⽽让整个服务器崩溃。\\n第⼆种，是在系统交付前进⾏性能测试（Performance Test）。\\n我们可以使⽤像Apache JMeter⼜或是LoadRunner这类型的⼯具对系统进⾏性能测试。这类⼯具可以测试出系统在峰值状态下可以应对的QPS 是多少。\\n当然了，这⾥也是有雷区的。\\n有的开发者可能使⽤同⼀类型的请求参数，导致后台服务器在多数情况下命中缓存（Cache Hit）。这个时候得到的QPS可能并不是真实的QPS。\\n打个⽐⽅，服务器处理请求的正常流程需要查询后台数据库，得到数据库结果后再返回给⽤户，这个过程平均需要1秒。在第⼀次拿到数据库结果后，这个数据就会被保存在缓存中，⽽如果后续的请求都使⽤同⼀类型的参数，导致结果不需要从数据库得到，⽽是直接从缓存中得到，这个过程我们假设只需要0.1秒。那这样，我们所计算出来的QPS就会⽐正常的⾼出10倍。所以在⽣成请求的时候，要格外注意这⼀点。\\n第三种，是分析系统在实际使⽤时产⽣的⽇志（Log）。\\n系统上线使⽤后，我们可以得到⽇志⽂件。⼀般的⽇志⽂件会记录每个时刻产⽣的请求。我们可以通过系统每天在最繁忙时刻所接收到的请求数，\\n来计算出系统可以承载的QPS。\\n不过，这种⽅法不⼀定可以得到系统可以承载的最⼤QPS。\\n在这⾥打个⽐喻，⼀家可以容纳上百桌客⼈的餐馆刚开业，因为客流量还⽐较⼩，在每天最繁忙的时候只接待了10桌客⼈。那我们可以说这家餐馆最多只能接待10桌客⼈吗？不可以。\\n同样的，以分析系统⽇志的⽅法计算出来的QPS并不⼀定是服务器能够承载的最⼤QPS。想要得到系统能承受的最⼤QPS，更多的是性能测试和⽇志分析相结合的⼿段。</li>\\n<li>延迟（Latency）\\n延迟指的是系统在收到⽤户的请求到响应这个请求之间的时间间隔。\\n在定义延迟的SLA时，我们常常看到系统的SLA会有p95或者是p99这样的延迟声明。这⾥的p指的是percentile，也就是百分位的意思。如果说⼀个系统的p95 延迟是1秒的话，那就表⽰在100个请求⾥⾯有95个请求的响应时间会少于1秒，⽽剩下的5个请求响应时间会⼤于1秒。\\n下⾯我们⽤⼀个具体的例⼦来说明延迟这项指标在SLA中的重要性。\\n假设，我们已经设计好了⼀个社交软件的系统架构。这个社交软件在接收到⽤户的请求之后，需要读取数据库中的内容返回给⽤户。\\n为了降低系统的延迟，我们会将数据库中内容放进缓存（Cache）中，以此来减少数据库的读取时间。在系统运⾏了⼀段时间后，我们得到了⼀些缓存命中率（Cache Hit Ratio）的信息。有90%的请求命中了缓存，⽽剩下的10%的请求则需要重新从数据库中读取内容。\\n这时服务器所给我们的p95或者p99延迟恰恰就衡量了系统的最长时间，也就是从数据库中读取内容的时间。作为⼀个优秀架构师，你可以通过改进缓存策略从⽽提⾼缓存命中率，也可以通过优化数据库的Schema或者索引（Index）来降低p95或p99 延迟。\\n总⽽⾔之，当p95或者p99过⾼时，总会有5%或者1%的⽤户抱怨产品的⽤户体验太差，这都是我们要通过优化系统来避免的。</li>\\n</ol>","autoDesc":true}');export{e as data};
