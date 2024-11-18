import{_ as s,o as e,c as n,a}from"./app-CE-JDe1L.js";const o={},l=a(`<h1 id="yukihookapi-object" tabindex="-1"><a class="header-anchor" href="#yukihookapi-object" aria-hidden="true">#</a> YukiHookAPI <span class="symbol">- object</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiHookAPI</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>这是 <code>YukiHookAPI</code> 的 API 调用总类，Hook 相关功能的开始、Hook 相关功能的配置都在这里。</p></blockquote><h2 id="tag-field" tabindex="-1"><a class="header-anchor" href="#tag-field" aria-hidden="true">#</a> TAG <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> TAG: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 <code>YukiHookAPI</code> 的名称 (标签)。</p></blockquote><h2 id="version-field" tabindex="-1"><a class="header-anchor" href="#version-field" aria-hidden="true">#</a> VERSION <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> VERSION: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.2.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 <code>YukiHookAPI</code> 的版本。</p></blockquote><h2 class="deprecated">API_VERSION_NAME - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.4</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>不再区分版本名称和版本号，请迁移到 <code>VERSION</code></p><h2 class="deprecated">API_VERSION_CODE - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.4</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>不再区分版本名称和版本号，请迁移到 <code>VERSION</code></p><h2 class="deprecated">executorName - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><code>v1.0.91</code> <code>移除</code></p><p>请迁移到 <code>Status.Executor.name</code></p><h2 class="deprecated">executorVersion - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><code>v1.0.91</code> <code>移除</code></p><p>请迁移到 <code>Status.Executor.apiLevel</code>、<code>Status.Executor.versionName</code>、<code>Status.Executor.versionCode</code></p><h2 id="status-object" tabindex="-1"><a class="header-anchor" href="#status-object" aria-hidden="true">#</a> Status <span class="symbol">- object</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Status</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>当前 <code>YukiHookAPI</code> 的状态。</p></blockquote><h3 id="compiledtimestamp-field" tabindex="-1"><a class="header-anchor" href="#compiledtimestamp-field" aria-hidden="true">#</a> compiledTimestamp <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> compiledTimestamp: </span><span style="color:#F69D50;">Long</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取项目编译完成的时间戳 (当前本地时间)。</p></blockquote><h3 id="isxposedenvironment-field" tabindex="-1"><a class="header-anchor" href="#isxposedenvironment-field" aria-hidden="true">#</a> isXposedEnvironment <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isXposedEnvironment: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前是否为 (Xposed) 宿主环境。</p></blockquote><h3 class="deprecated">executorName - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><code>v1.1.5</code> <code>作废</code></p><p>请迁移到 <code>Executor.name</code></p><h3 class="deprecated">executorVersion - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><code>v1.1.5</code> <code>作废</code></p><p>请迁移到 <code>Executor.apiLevel</code>、<code>Executor.versionName</code>、<code>Executor.versionCode</code></p><h3 id="ismoduleactive-field" tabindex="-1"><a class="header-anchor" href="#ismoduleactive-field" aria-hidden="true">#</a> isModuleActive <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isModuleActive: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>判断模块是否在 Xposed 或太极、无极中激活。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中你需要将 <strong>Application</strong> 继承于 <strong>ModuleApplication</strong>。</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p><p>在 (Xposed) 宿主环境中仅返回非 <strong>isTaiChiModuleActive</strong> 的激活状态。</p></div><h3 id="isxposedmoduleactive-field" tabindex="-1"><a class="header-anchor" href="#isxposedmoduleactive-field" aria-hidden="true">#</a> isXposedModuleActive <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isXposedModuleActive: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>仅判断模块是否在 Xposed 中激活。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p><p>在 (Xposed) 宿主环境中始终返回 true。</p></div><h3 id="istaichimoduleactive-field" tabindex="-1"><a class="header-anchor" href="#istaichimoduleactive-field" aria-hidden="true">#</a> isTaiChiModuleActive <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isTaiChiModuleActive: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>仅判断模块是否在太极、无极中激活。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中你需要将 <strong>Application</strong> 继承于 <strong>ModuleApplication</strong>。</p><p>在 (Xposed) 宿主环境中始终返回 false。</p></div><h3 id="issupportresourceshook-field" tabindex="-1"><a class="header-anchor" href="#issupportresourceshook-field" aria-hidden="true">#</a> isSupportResourcesHook <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isSupportResourcesHook: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.91</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>判断当前 Hook Framework 是否支持资源钩子 (Resources Hook)。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p><p>在 (Xposed) 宿主环境中可能会延迟等待事件回调后才会返回 true。</p><p>请注意你需要确保 <strong>InjectYukiHookWithXposed.isUsingResourcesHook</strong> 已启用，否则始终返回 false。</p></div><h3 id="executor-object" tabindex="-1"><a class="header-anchor" href="#executor-object" aria-hidden="true">#</a> Executor <span class="symbol">- object</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Executor</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>当前 <code>YukiHookAPI</code> 使用的 Hook Framework 相关信息。</p></blockquote><h4 id="name-field" tabindex="-1"><a class="header-anchor" href="#name-field" aria-hidden="true">#</a> name <span class="symbol">- field</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> name: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 Hook Framework 名称。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p></div><h4 id="type-field" tabindex="-1"><a class="header-anchor" href="#type-field" aria-hidden="true">#</a> type <span class="symbol">- field</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> type: </span><span style="color:#F69D50;">ExecutorType</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.9</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 Hook Framework 类型。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p></div><h4 id="apilevel-field" tabindex="-1"><a class="header-anchor" href="#apilevel-field" aria-hidden="true">#</a> apiLevel <span class="symbol">- field</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> apiLevel: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 Hook Framework 的 API 版本。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p></div><h4 id="versionname-field" tabindex="-1"><a class="header-anchor" href="#versionname-field" aria-hidden="true">#</a> versionName <span class="symbol">- field</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> versionName: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 Hook Framework 版本名称。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p></div><h4 id="versioncode-field" tabindex="-1"><a class="header-anchor" href="#versioncode-field" aria-hidden="true">#</a> versionCode <span class="symbol">- field</span></h4><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> versionCode: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.5</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 Hook Framework 版本号。</p></blockquote><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在模块环境中需要启用 <strong>InjectYukiHookWithXposed.isUsingXposedModuleStatus</strong>。</p></div><h2 id="configs-object" tabindex="-1"><a class="header-anchor" href="#configs-object" aria-hidden="true">#</a> Configs <span class="symbol">- object</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Configs</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>对 API 相关功能的配置类。</p></blockquote><h3 id="debuglog-method" tabindex="-1"><a class="header-anchor" href="#debuglog-method" aria-hidden="true">#</a> debugLog <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">debugLog</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">YLog</span><span style="color:#ADBAC7;">.Configs.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>配置 <code>YLog.Configs</code> 相关参数。</p></blockquote><h3 class="deprecated">debugTag - field</h3><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.1.0</code> <code>作废</code></p><p>请迁移到 <code>YLog.Configs.tag</code></p><h3 id="isdebug-field" tabindex="-1"><a class="header-anchor" href="#isdebug-field" aria-hidden="true">#</a> isDebug <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isDebug: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>是否启用 Debug 模式。</p></blockquote><p>默认不启用，启用后模块将会向 <code>Logcat</code> 和 (Xposed) 宿主环境中的日志功能打印详细的 Hook 日志，关闭后仅会打印 <code>E</code> 级别的日志。</p><h3 class="deprecated">isAllowPrintingLogs - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.4</code> <code>新增</code></p><p><code>v1.1.0</code> <code>作废</code></p><p>请迁移到 <code>YLog.Configs.isEnable</code></p><h3 class="deprecated">isEnableModulePrefsCache - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.5</code> <code>新增</code></p><p><code>v1.1.9</code> <code>作废</code></p><p>请迁移到 <code>isEnablePrefsBridgeCache</code></p><h3 class="deprecated">isEnablePrefsBridgeCache - field</h3><p><strong>变更记录</strong></p><p><code>v1.1.9</code> <code>新增</code></p><p><code>v1.1.11</code> <code>作废</code></p><p>键值的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题</p><h3 id="isenablemoduleappresourcescache-field" tabindex="-1"><a class="header-anchor" href="#isenablemoduleappresourcescache-field" aria-hidden="true">#</a> isEnableModuleAppResourcesCache <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isEnableModuleAppResourcesCache: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.87</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>是否启用当前 Xposed 模块自身 <code>Resources</code> 缓存功能。</p></blockquote><p>为防止内存复用过高问题，此功能默认启用。</p><p>你可以手动调用 <code>PackageParam.refreshModuleAppResources</code> 来刷新缓存。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>关闭后每次使用 <strong>PackageParam.moduleAppResources</strong> 都会重新创建，可能会造成运行缓慢。</p></div><h3 class="deprecated">isEnableHookModuleStatus - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.88</code> <code>新增</code></p><p><code>v1.2.0</code> <code>作废</code></p><p>请手动迁移到 <code>InjectYukiHookWithXposed.isUsingXposedModuleStatus</code></p><h3 id="isenablehooksharedpreferences-field" tabindex="-1"><a class="header-anchor" href="#isenablehooksharedpreferences-field" aria-hidden="true">#</a> isEnableHookSharedPreferences <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isEnableHookSharedPreferences: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.0</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>是否启用 Hook <code>SharedPreferences</code>。</p></blockquote><p>启用后将在模块启动时强制将 <code>SharedPreferences</code> 文件权限调整为 <code>Context.MODE_WORLD_READABLE</code> (0664)。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这是一个可选的实验性功能，此功能默认不启用。</p><p>仅用于修复某些系统可能会出现在启用了 <strong>New XSharedPreferences</strong> 后依然出现文件权限错误问题，若你能正常使用 <strong>YukiHookPrefsBridge</strong> 就不建议启用此功能。</p></div><h3 id="isenabledatachannel-field" tabindex="-1"><a class="header-anchor" href="#isenabledatachannel-field" aria-hidden="true">#</a> isEnableDataChannel <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isEnableDataChannel: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.88</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>是否启用当前 Xposed 模块与宿主交互的 <code>YukiHookDataChannel</code> 功能。</p></blockquote><p>请确保 Xposed 模块的 <code>Application</code> 继承于 <code>ModuleApplication</code> 才能有效。</p><p>此功能默认启用，关闭后将不会在功能初始化的时候装载 <code>YukiHookDataChannel</code>。</p><h3 class="deprecated">isEnableMemberCache - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.68</code> <code>新增</code></p><p><code>v1.1.11</code> <code>作废</code></p><p><code>Member</code> 的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题</p><h2 id="configs-method" tabindex="-1"><a class="header-anchor" href="#configs-method" aria-hidden="true">#</a> configs <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">Configs</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><code>v1.0.80</code> <code>修改</code></p><p>将方法体进行 inline</p><p><strong>功能描述</strong></p><blockquote><p>对 <code>Configs</code> 类实现了一个 <strong>lambda</strong> 方法体。</p></blockquote><p>你可以轻松地调用它进行配置。</p><p><strong>功能示例</strong></p><p>你可以在 Hook 入口类的 <code>onInit</code> 方法中调用 <code>configs</code> 方法和 <code>debugLog</code> 方法完成对 API 的功能配置，实时生效。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.</span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">debugLog</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">                tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">                isEnable </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">                isRecord </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#DCBDFB;">elements</span><span style="color:#ADBAC7;">(TAG, PRIORITY, PACKAGE_NAME, USER_ID)</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">            isEnableModuleAppResourcesCache </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">            isEnableHookModuleStatus </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">            isEnableHookSharedPreferences </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">            isEnableDataChannel </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若觉得上面的写法不美观，你还可以写得更加简洁。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">debugLog</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">            isEnable </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">            isRecord </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#DCBDFB;">elements</span><span style="color:#ADBAC7;">(TAG, PRIORITY, PACKAGE_NAME, USER_ID)</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">        isEnableModuleAppResourcesCache </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        isEnableHookModuleStatus </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        isEnableHookSharedPreferences </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">        isEnableDataChannel </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以不通过 <code>configs</code> 和 <code>debugLog</code> 方法，直接进行配置。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onInit</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        YLog.Configs.tag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YukiHookAPI&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">        YLog.Configs.isEnable </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        YLog.Configs.isRecord </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">        YLog.Configs.</span><span style="color:#DCBDFB;">elements</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">            YLog.Configs.TAG,</span></span>
<span class="line"><span style="color:#ADBAC7;">            YLog.Configs.PRIORITY,</span></span>
<span class="line"><span style="color:#ADBAC7;">            YLog.Configs.PACKAGE_NAME,</span></span>
<span class="line"><span style="color:#ADBAC7;">            YLog.Configs.USER_ID</span></span>
<span class="line"><span style="color:#ADBAC7;">        )</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.Configs.isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> BuildConfig.DEBUG</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.Configs.isEnableModuleAppResourcesCache </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.InjectYukiHookWithXposed.isUsingXposedModuleStatus </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.Configs.isEnableHookSharedPreferences </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">        YukiHookAPI.Configs.isEnableDataChannel </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="encase-method" tabindex="-1"><a class="header-anchor" href="#encase-method" aria-hidden="true">#</a> encase <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">PackageParam</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> hooker: </span><span style="color:#F69D50;">YukiBaseHooker</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(baseContext: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?, initiate: </span><span style="color:#F69D50;">PackageParam</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">encase</span><span style="color:#ADBAC7;">(baseContext: </span><span style="color:#F69D50;">Context</span><span style="color:#ADBAC7;">?, </span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> hooker: </span><span style="color:#F69D50;">YukiBaseHooker</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>装载 Hook 入口的核心方法。</p></blockquote><p><strong>功能示例</strong></p><p>详情请参考</p><ul><li><p><a href="../../../../../config/api-example#%E9%80%9A%E8%BF%87-lambda-%E5%88%9B%E5%BB%BA">通过 lambda 创建</a></p></li><li><p><a href="../../../../../config/api-example#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89-hooker-%E5%88%9B%E5%BB%BA">通过自定义 Hooker 创建</a></p></li><li><p><a href="../../../../../config/api-example#%E4%BD%9C%E4%B8%BA-hook-api-%E4%BD%BF%E7%94%A8%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E5%9C%B0%E6%96%B9">作为 Hook API 使用需要注意的地方</a></p></li></ul>`,240),p=[l];function c(t,i){return e(),n("div",null,p)}const r=s(o,[["render",c],["__file","YukiHookAPI.html.vue"]]);export{r as default};
