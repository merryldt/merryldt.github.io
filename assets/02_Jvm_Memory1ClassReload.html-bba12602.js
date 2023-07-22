import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,b as l}from"./app-b2ef0bb6.js";const r="/assets/02-1-1-363419bc.png",n={},t=l('<h1 id="类的生命周期" tabindex="-1"><a class="header-anchor" href="#类的生命周期" aria-hidden="true">#</a> 类的生命周期</h1><figure><img src="'+r+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h1 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h1><h2 id="加载-load" tabindex="-1"><a class="header-anchor" href="#加载-load" aria-hidden="true">#</a> 加载（load）</h2><ol><li>通过一个类的全限定名来获取定义此类的二进制字节流;</li><li>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构;</li></ol><h2 id="链接-linking" tabindex="-1"><a class="header-anchor" href="#链接-linking" aria-hidden="true">#</a> 链接(Linking)</h2><h3 id="校验" tabindex="-1"><a class="header-anchor" href="#校验" aria-hidden="true">#</a> 校验</h3><p>目的是在于确保class文件的字节流中包含信息符合当前虚拟机要求，保证被加载类的正确性，不会危害虚拟机自身安全。<br> 主要包括四种验证：文件格式验证、元数据验证、字节码验证、符号引用验证。</p><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><ul><li>为类变量分配内存并且设置该类变量的默认初始值，即零值。</li><li>这里不包含用final 修饰的static，因为final 在编译的时候就会分配了,准备阶段会显示初始化；</li><li>这里不会为实例变量分配初始化，类变量会分配在方法去中，而实例变量是会随着对象一起分配到JAVA堆中.</li></ul><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3><ul><li>虚拟机将常量池内的符号引用替换为直接引用的过程。</li><li>事实上，解析操作往往会伴随着JVM 在执行完初始化之后再执行; 符号引用以一组符号来描述所引用的目标，符号可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可。</li><li>各虚拟机能接受的符号引用必须是一致的，因为符号引用的字面量形式明确定义在Java虚拟机规范的Class文件格式中。</li><li>直接引用可以是直接指向目标的指针、相对偏移量或是一个能间接定位到目标的句柄。</li><li>解析动作主要针对类或接口、字段、类方法、接口方法、方法类型等。对应常量池中的CONSTANT_Class_info、CONSTANT_Fieldref_info、CONSTANT_Methodref_inf等。</li><li>对同一个符号引用进行多次解析是可能的，所以虚拟机会被第一次解析的结果进行缓存，避免解析动作重复进行。</li></ul><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><ol><li>真正开始执行类中定义的Java程序代码(或者说是字节码)；</li><li>根据程序员通过程序制定的主观计划去初始化类变量和其他资源。换个角度来说，初始化阶段是执行类构造器clinit方法的过程。clinit方法不需要定义，是Javac编译器自动收集类中的所有类变量的赋值动作和静态代码块中的语句合并而来。构造器方法中指令按语句在源文件中出现的顺序执行。clinit不同于类的构造器。(关联: 构造器是虚拟机视角下的init)</li><li>若该类具有父类，JVM会保证子类的clinit执行钱，父类的clinit已经执行完毕。</li></ol>',14),d=[t];function h(s,c){return a(),e("div",null,d)}const f=i(n,[["render",h],["__file","02_Jvm_Memory1ClassReload.html.vue"]]);export{f as default};