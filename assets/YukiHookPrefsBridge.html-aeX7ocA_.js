import{_ as t,r as p,o as l,c,b as s,d as e,e as a,a as n}from"./app-CE-JDe1L.js";const d={},r=n(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="yukihookprefsbridge-class" tabindex="-1"><a class="header-anchor" href="#yukihookprefsbridge-class" aria-hidden="true">#</a> YukiHookPrefsBridge <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookPrefsBridge</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> context: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>modified</code></p><p><s><code>YukiHookModulePrefs</code></s> 更名为 <code>YukiHookPrefsBridge</code></p><p><strong>Function Illustrate</strong></p><blockquote><p><code>YukiHookAPI</code> 对 <code>SharedPreferences</code>、<code>XSharedPreferences</code> 的扩展存储桥实现。</p></blockquote><p>在不同环境智能选择存取使用的对象。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>模块与宿主之前共享数据存储为实验性功能，仅在 LSPosed 环境测试通过，EdXposed 理论也可以使用但不再推荐。</p></div><p>使用 LSPosed 环境请在 <code>AndroidManifests.xml</code> 中将 <code>xposedminversion</code> 最低设置为 <code>93</code>。</p>`,12),i={href:"https://github.com/LSPosed/LSPosed/wiki/New-XSharedPreferences#for-the-module",target:"_blank",rel:"noopener noreferrer"},g=s("p",null,[e("若你在按照规定配置后依然无法使用或出现文件权限错误问题，可以参考 "),s("a",{href:"../../../YukiHookAPI#isenablehooksharedpreferences-field"},"isEnableHookSharedPreferences"),e("。")],-1),h=s("p",null,[e("未使用 LSPosed 环境请将你的模块 "),s("code",null,"API"),e(" 降至 "),s("code",null,"26"),e(" 以下，"),s("code",null,"YukiHookAPI"),e(" 将会尝试使用 "),s("code",null,"makeWorldReadable"),e(" 但仍有可能不成功。")],-1),u={href:"https://taichi.cool/zh/doc/for-xposed-dev.html#%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90-%E9%85%8D%E7%BD%AE-xsharedpreference",target:"_blank",rel:"noopener noreferrer"},y=n("<p>对于在模块环境中使用 <code>PreferenceFragmentCompat</code>，<code>YukiHookAPI</code> 提供了 <code>ModulePreferenceFragment</code> 来实现同样的功能。</p><p><strong>Optional Configuration</strong></p><p>若你不想将你的模块的 <code>xposedminversion</code> 最低设置为 <code>93</code>，你可以在 <code>AndroidManifest.xml</code> 中添加 <code>xposedsharedprefs</code> 来实现支持。</p>",3),A={href:"https://github.com/LSPosed/LSPosed/wiki/New-XSharedPreferences#for-the-module",target:"_blank",rel:"noopener noreferrer"},D=n(`<blockquote><p>The following example</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">meta-data</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:name</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;xposedsharedprefs&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">android:value</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;true&quot;</span><span style="color:#ADBAC7;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 class="deprecated">isXSharePrefsReadable - field</h2><p><strong>Change Records</strong></p><p><code>v1.0.90</code> <code>added</code></p><p><code>v1.1.5</code> <code>deprecated</code></p><p>请迁移到 <code>isPreferencesAvailable</code></p><h2 class="deprecated">isRunInNewXShareMode - field</h2><p><strong>Change Records</strong></p><p><code>v1.0.78</code> <code>added</code></p><p><code>v1.1.5</code> <code>deprecated</code></p><p>请迁移到 <code>isPreferencesAvailable</code></p><h2 id="ispreferencesavailable-field" tabindex="-1"><a class="header-anchor" href="#ispreferencesavailable-field" aria-hidden="true">#</a> isPreferencesAvailable <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isPreferencesAvailable: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.5</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取当前 <code>YukiHookPrefsBridge</code> 的可用状态。</p></blockquote><p>在 (Xposed) 宿主环境中返回 <code>XSharedPreferences</code> 可用状态 (可读)。</p><p>在模块环境中返回当前是否处于 New XSharedPreferences 模式 (可读可写)。</p><h2 id="name-method" tabindex="-1"><a class="header-anchor" href="#name-method" aria-hidden="true">#</a> name <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;">(name: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">YukiHookPrefsBridge</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>自定义 Sp 存储名称。</p></blockquote><p><strong>Function Example</strong></p><p>在 <code>Activity</code> 中的使用方法。</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;custom_name&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;custom_key&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 (Xposed) 宿主环境 <code>PackageParam</code> 中的使用方法。</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">prefs</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;custom_name&quot;</span><span style="color:#ADBAC7;">).</span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;custom_key&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 class="deprecated">direct - method</h2><p><strong>Change Records</strong></p><p><code>v1.0.5</code> <code>added</code></p><p><code>v1.1.11</code> <code>deprecated</code></p><p>键值的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题</p><h2 id="native-method" tabindex="-1"><a class="header-anchor" href="#native-method" aria-hidden="true">#</a> native <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">native</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">YukiHookPrefsBridge</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>忽略当前环境直接使用 <code>Context.getSharedPreferences</code> 存取数据。</p></blockquote><h2 id="getstring-method" tabindex="-1"><a class="header-anchor" href="#getstring-method" aria-hidden="true">#</a> getString <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getString</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取 <code>String</code> 键值。</p></blockquote><h2 id="getstringset-method" tabindex="-1"><a class="header-anchor" href="#getstringset-method" aria-hidden="true">#</a> getStringSet <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getStringSet</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Set</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">&gt;): </span><span style="color:#F69D50;">Set</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取 <code>Set&lt;String&gt;</code> 键值。</p></blockquote><h2 id="getboolean-method" tabindex="-1"><a class="header-anchor" href="#getboolean-method" aria-hidden="true">#</a> getBoolean <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getBoolean</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Boolean</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取 <code>Boolean</code> 键值。</p></blockquote><h2 id="getint-method" tabindex="-1"><a class="header-anchor" href="#getint-method" aria-hidden="true">#</a> getInt <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getInt</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取 <code>Int</code> 键值。</p></blockquote><h2 id="getlong-method" tabindex="-1"><a class="header-anchor" href="#getlong-method" aria-hidden="true">#</a> getLong <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getLong</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Long</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Long</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取 <code>Long</code> 键值。</p></blockquote><h2 id="getfloat-method" tabindex="-1"><a class="header-anchor" href="#getfloat-method" aria-hidden="true">#</a> getFloat <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">getFloat</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Float</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Float</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取 <code>Float</code> 键值。</p></blockquote><h2 id="contains-method" tabindex="-1"><a class="header-anchor" href="#contains-method" aria-hidden="true">#</a> contains <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">contains</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>判断当前是否包含 <code>key</code> 键值的数据。</p></blockquote><p>智能识别对应环境读取键值数据。</p><h2 id="all-method" tabindex="-1"><a class="header-anchor" href="#all-method" aria-hidden="true">#</a> all <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">all</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">MutableMap</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">Any</span><span style="color:#ADBAC7;">?&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>获取全部存储的键值数据。</p></blockquote><p>智能识别对应环境读取键值数据。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>每次调用都会获取实时的数据，不受缓存控制，请勿在高并发场景中使用。</p></div><h2 class="deprecated">remove - method</h2><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">clear - method</h2><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">putString - method</h2><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">putStringSet - method</h2><p><strong>Change Records</strong></p><p><code>v1.0.77</code> <code>added</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">putBoolean - method</h2><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">putInt - method</h2><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">putLong - method</h2><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 class="deprecated">putFloat - method</h2><p><strong>Change Records</strong></p><p><code>v1.0</code> <code>first</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 id="get-method" tabindex="-1"><a class="header-anchor" href="#get-method" aria-hidden="true">#</a> get <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#DCBDFB;">get</span><span style="color:#ADBAC7;">(prefs: </span><span style="color:#F69D50;">PrefsData</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">T</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>智能获取指定类型的键值。</p></blockquote><h2 class="deprecated">put - method</h2><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.9</code> <code>deprecated</code></p><p>请迁移到 <code>edit</code> 方法</p><h2 id="edit-method" tabindex="-1"><a class="header-anchor" href="#edit-method" aria-hidden="true">#</a> edit <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>创建新的 <code>Editor</code>。</p></blockquote><p>在模块环境中或启用了 <code>isUsingNativeStorage</code> 后使用。</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>在 (Xposed) 宿主环境下只读，无法使用。</p></div><h2 id="edit-method-1" tabindex="-1"><a class="header-anchor" href="#edit-method-1" aria-hidden="true">#</a> edit <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">edit</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">Editor</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>创建新的 <code>Editor</code>。</p></blockquote><p>自动调用 <code>Editor.apply</code> 方法。</p><p>在模块环境中或启用了 <code>isUsingNativeStorage</code> 后使用。</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>在 (Xposed) 宿主环境下只读，无法使用。</p></div><h2 class="deprecated">clearCache - method</h2><p><strong>Change Records</strong></p><p><code>v1.0.5</code> <code>added</code></p><p><code>v1.1.11</code> <code>deprecated</code></p><p>键值的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题</p><h2 id="editor-class" tabindex="-1"><a class="header-anchor" href="#editor-class" aria-hidden="true">#</a> Editor <span class="symbol">- class</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inner</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Editor</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p><code>YukiHookPrefsBridge</code> 的存储代理类。</p></blockquote><p>请使用 <code>edit</code> 方法来获取 <code>Editor</code>。</p><p>在模块环境中或启用了 <code>isUsingNativeStorage</code> 后使用。</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>在 (Xposed) 宿主环境下只读，无法使用。</p></div><h3 id="remove-method" tabindex="-1"><a class="header-anchor" href="#remove-method" aria-hidden="true">#</a> remove <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">remove</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>移除全部包含 <code>key</code> 的存储数据。</p></blockquote><h3 id="remove-method-1" tabindex="-1"><a class="header-anchor" href="#remove-method-1" aria-hidden="true">#</a> remove <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#DCBDFB;">remove</span><span style="color:#ADBAC7;">(prefs: </span><span style="color:#F69D50;">PrefsData</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>移除 <code>PrefsData.key</code> 的存储数据。</p></blockquote><h3 id="clear-method" tabindex="-1"><a class="header-anchor" href="#clear-method" aria-hidden="true">#</a> clear <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">clear</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>移除全部存储数据。</p></blockquote><h3 id="putstring-method" tabindex="-1"><a class="header-anchor" href="#putstring-method" aria-hidden="true">#</a> putString <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putString</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>存储 <code>String</code> 键值。</p></blockquote><h3 id="putstringset-method" tabindex="-1"><a class="header-anchor" href="#putstringset-method" aria-hidden="true">#</a> putStringSet <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putStringSet</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Set</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">&gt;): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>存储 <code>Set&lt;String&gt;</code> 键值。</p></blockquote><h3 id="putboolean-method" tabindex="-1"><a class="header-anchor" href="#putboolean-method" aria-hidden="true">#</a> putBoolean <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putBoolean</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Boolean</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>存储 <code>Boolean</code> 键值。</p></blockquote><h3 id="putint-method" tabindex="-1"><a class="header-anchor" href="#putint-method" aria-hidden="true">#</a> putInt <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putInt</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>存储 <code>Int</code> 键值。</p></blockquote><h3 id="putlong-method" tabindex="-1"><a class="header-anchor" href="#putlong-method" aria-hidden="true">#</a> putLong <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putLong</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Long</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>存储 <code>Long</code> 键值。</p></blockquote><h3 id="putfloat-method" tabindex="-1"><a class="header-anchor" href="#putfloat-method" aria-hidden="true">#</a> putFloat <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">putFloat</span><span style="color:#ADBAC7;">(key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">Float</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>存储 <code>Float</code> 键值。</p></blockquote><h3 id="put-method" tabindex="-1"><a class="header-anchor" href="#put-method" aria-hidden="true">#</a> put <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> &lt;</span><span style="color:#F69D50;">reified</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#DCBDFB;">put</span><span style="color:#ADBAC7;">(prefs: </span><span style="color:#F69D50;">PrefsData</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">&gt;, </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;">: </span><span style="color:#F69D50;">T</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Editor</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>智能存储指定类型的键值。</p></blockquote><h3 id="commit-method" tabindex="-1"><a class="header-anchor" href="#commit-method" aria-hidden="true">#</a> commit <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">commit</span><span style="color:#ADBAC7;">(): </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>提交更改 (同步)。</p></blockquote><h3 id="apply-method" tabindex="-1"><a class="header-anchor" href="#apply-method" aria-hidden="true">#</a> apply <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">apply</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.9</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>提交更改 (异步)。</p></blockquote>`,249);function k(m,b){const o=p("ExternalLinkIcon");return l(),c("div",null,[r,s("p",null,[e("详见 "),s("a",i,[e("New XSharedPreferences"),a(o)]),e("。")]),g,h,s("p",null,[e("太极请参阅 "),s("a",u,[e("文件权限/配置/XSharedPreference"),a(o)]),e("。")]),y,s("p",null,[e("详见 "),s("a",A,[e("New XSharedPreferences"),a(o)]),e("。")]),D])}const C=t(d,[["render",k],["__file","YukiHookPrefsBridge.html.vue"]]);export{C as default};
