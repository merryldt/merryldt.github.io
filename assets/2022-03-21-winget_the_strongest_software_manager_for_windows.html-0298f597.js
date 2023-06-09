import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as l,b as e,d as t,e as n,a}from"./app-b297c754.js";const g={},d=e("p",null,"矿难、WIN11、DDR5、40 代显卡纷至沓来，更换电脑的高峰期马上来临。可惜我的生产力工具等不了，只能 49 年入国军，隔离期间装配上 i7+3080Ti 主机。硬件配好了，软件又成了个大问题。常用软件超过 60 个，之前每个软件，都去对应官网寻找最新版，然后单独进行设置安装，需要耗费大量的时间精力。",-1),c=e("p",null,[t("曾经一度尝试过国内的软件管理器，能批量下载软件，但依旧免不了单独安装设置。另外，让 360、金山、腾讯来管理你的软件系统，你真的放心？相较而言，Windows 原生程序管理工具 winget 和 WebGUI winstall 使用更简单，"),e("strong",null,"应用均为官方来源下载，一键批量静默安装应用，是快速部署程序的绝佳方案"),t("。")],-1),p=e("h2",{id:"原生程序管理-winget",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#原生程序管理-winget","aria-hidden":"true"},"#"),t(" 原生程序管理-winget")],-1),h={href:"https://docs.microsoft.com/zh-cn/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},f={href:"https://wwz.lanzouf.com/ixZL701smc4d",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,".msixbundle",-1),_=a('<p>安装应用安装程序后，可以通过在命令提示符 (cmd) 下键入「winget」来运行程序命令。</p><h3 id="winget-install-appname" tabindex="-1"><a class="header-anchor" href="#winget-install-appname" aria-hidden="true">#</a> winget install appName</h3><p>执行 winget install 命令，就能完成指定程序的下载、哈希验证、静默设置安装三个步骤，不需要人工干预。</p><figure><img src="https://img.newzone.top/2022-05-05-17-13-24.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="winget-search-appname" tabindex="-1"><a class="header-anchor" href="#winget-search-appname" aria-hidden="true">#</a> winget search appName</h3><p>当未找到或不确定 appName 时，使用 winget search 可以锁定程序名称。以「飞书」为例，飞书不支持中文锁定，搜索后发现有国内版「Feishu」和海外版「Lark」两个版本，国内版使用命令 <code>winget install feishu</code>。</p><figure><img src="https://img.newzone.top/2022-05-05-17-13-45.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="winget-upgrade-all" tabindex="-1"><a class="header-anchor" href="#winget-upgrade-all" aria-hidden="true">#</a> winget upgrade --all</h3><ul><li><code>winget upgrade</code> 列出所有支持 winget 升级的程序，然后使用 <code>winget upgrade ID</code> 升级指定程序。</li><li><code>winget upgrade --all</code> 会静默升级所有支持 winget 的程序，适合更新强迫症患者。不过，该升级流程暂时没有筛选办法，无法单独剔除应用。</li><li><code>winget upgrade --all --include-unknown</code> 升级包括未知版本在内的所有应用，一般用不到，适用于强迫症患者。</li></ul><figure><img src="https://img.newzone.top/2022-05-05-17-14-00.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="microsoft-store-应用" tabindex="-1"><a class="header-anchor" href="#microsoft-store-应用" aria-hidden="true">#</a> Microsoft Store 应用</h3><p>Microsoft Store 不支持 winget 官方源，因此 winget 不能使用应用名称安装商店应用。</p><p>winget 安装 Microsoft Store 应用前，需要 <code>winget search</code> 命令找到应用 id 和来源。msstore 源指 Miscrosoft Store，其使用唯一标识符作为程序包的“Id”。因此，snipaste 安装命令为 <code>winget install 9P1WXPKB68KX -s msstore</code>。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-23.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装中会要求接受协议，点 Y 确认即可。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-35.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="批量部署程序-winstall" tabindex="-1"><a class="header-anchor" href="#批量部署程序-winstall" aria-hidden="true">#</a> 批量部署程序-winstall</h2>',17),u={href:"https://winstall.app/",target:"_blank",rel:"noopener noreferrer"},b=a('<p>操作非常简单，winstall 页面选中程序，即可打包程序组或生成批量安装命令。</p><figure><img src="https://img.newzone.top/2022-05-05-17-14-50.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>winstall 的应用搜索继承了 winget 的问题，部分国产软件不支持中文搜索，比如「坚果云」只支持英文名称「Nutstore」。希望这一问题，可以随着国内用户群增多而被解决。</p><figure><img src="https://img.newzone.top/2022-05-05-17-15-09.png?imageMogr2/format/webp" alt="winget 搜索" tabindex="0" loading="lazy"><figcaption>winget 搜索</figcaption></figure><figure><img src="https://img.newzone.top/2022-05-05-17-15-37.png?imageMogr2/format/webp" alt="winstall 搜索" tabindex="0" loading="lazy"><figcaption>winstall 搜索</figcaption></figure><p>winstall 页面选好程序后，导出自动生成的批量安装命令，并在命令提示符 (cmd) 中执行，系统将自动下载并静默配置程序。</p><figure><img src="https://img.newzone.top/2022-05-05-17-15-55.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="尝试更新源时失败" tabindex="-1"><a class="header-anchor" href="#尝试更新源时失败" aria-hidden="true">#</a> 尝试更新源时失败</h3>',9),x={href:"https://github.com/microsoft/winget-cli/releases",target:"_blank",rel:"noopener noreferrer"},z={href:"https://newzone.top/posts/2022-02-19-microsoft_store_fixed.html#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"其他问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他问题","aria-hidden":"true"},"#"),t(" 其他问题")],-1),k=e("ul",null,[e("li",null,"批量安装应用中，winstall 不定期出现崩溃，原因未知。"),e("li",null,"winget install 不能检测当前版本软件是否安装，容易造成重复安装应用，拖慢部署时间。"),e("li",null,"部分应用安装后容易有 bug，比如剪映有卡顿问题，手动安装后恢复正常。")],-1),W=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),t(" 总结")],-1),y=e("p",null,"在我的常用软件列表中有 50 个应用支持 winget 批量静默安装，剩余 10 个需手工安装，覆盖率在 80% 以上，足够满足大部分人的需求。",-1),N=e("p",null,"winget 用一个命令行能静默安装上百个软件，节省了大量装机时间。对于系统重装、批量装机、快速设置新工作环境，winget 和 winstall 是必不可少的装机神器。",-1);function B(E,I){const i=r("ExternalLinkIcon");return s(),l("div",null,[d,c,p,e("p",null,[e("a",h,[t("winget"),n(i)]),t(" 是 Windows 程序包管理器的命令行工具。在 Windows 10 和 Windows 11 计算机上，使用 winget 命令行工具来发现、安装、升级、删除和配置应用程序。早期版本的 Windows 不支持 winget，需在 "),e("a",w,[t("winget 官方"),n(i)]),t("或"),e("a",f,[t("国内搬运"),n(i)]),t(" 下载后缀为 "),m,t(" 的应用安装程序。")]),_,e("p",null,[e("a",u,[t("winstall"),n(i)]),t(" 是 winget install 的网页管理工具。借助 winstall，用户不懂代码，也能轻松使用 winget，一次性安装所有应用程序。")]),b,e("p",null,[t("国内使用 winget 容易出现问题「尝试更新源时失败」，下载 "),e("a",x,[t("winget 官方最新包"),n(i)]),t("可解决问题。")]),e("p",null,[t("另一个可能是 Internet 选项的 TLS 版本设置过低，开启 TLS 1.2 即可恢复，具体操作查看 "),e("a",z,[t("Windows 应用商店 (Microsoft store) 打不开？"),n(i)]),t("。")]),M,k,W,y,N])}const T=o(g,[["render",B],["__file","2022-03-21-winget_the_strongest_software_manager_for_windows.html.vue"]]);export{T as default};
