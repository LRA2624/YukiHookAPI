import{_ as s,o as n,c as a,a as e}from"./app-CE-JDe1L.js";const l={},p=e(`<h1 id="host-lifecycle-extension" tabindex="-1"><a class="header-anchor" href="#host-lifecycle-extension" aria-hidden="true">#</a> Host Lifecycle Extension</h1><blockquote><p>This is an extension of the lifecycle of an automatic hooking Host App.</p></blockquote><h2 id="listener-lifecycle" tabindex="-1"><a class="header-anchor" href="#listener-lifecycle" aria-hidden="true">#</a> Listener Lifecycle</h2><blockquote><p>Implement the listening function by automating the lifecycle method of the Host App.</p></blockquote><p>We need to listen to the startup and lifecycle methods of the Host App&#39;s <code>Application</code>, just use the following methods.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">loadApp</span><span style="color:#ADBAC7;">(name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Register lifecycle listeners</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Optional parameter:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// You can set isOnFailureThrowToApp = false</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// So that the exception will not be thrown to the Host App to prevent the Host App from crashing</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// The default is true</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">onAppLifecycle</span><span style="color:#ADBAC7;">(isOnFailureThrowToApp </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// You can implement lifecycle method listeners in Application here</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">attachBaseContext</span><span style="color:#ADBAC7;"> { baseContext, hasCalledSuper </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Determine whether</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// The super.attachBaseContext(base) method has been executed by judging hasCalledSuper</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">onCreate</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Get the current Application instance through this</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">onTerminate</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Get the current Application instance through this</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">onLowMemory</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Get the current Application instance through this</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">onTrimMemory</span><span style="color:#ADBAC7;"> { self, level </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// Here you can judge whether the app has switched to the background</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (level </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> ComponentCallbacks2.TRIM_MEMORY_UI_HIDDEN) {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">onConfigurationChanged</span><span style="color:#ADBAC7;"> { self, config </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../public/com/highcapable/yukihookapi/hook/param/PackageParam#applifecycle-class">AppLifecycle</a>.</p></div><h2 id="register-system-broadcast" tabindex="-1"><a class="header-anchor" href="#register-system-broadcast" aria-hidden="true">#</a> Register System Broadcast</h2><blockquote><p>Register system broadcast through the <code>Application.onCreate</code> method to listening system broadcast.</p></blockquote><p>We can also register system broadcast in the Host App&#39;s <code>Application</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">loadApp</span><span style="color:#ADBAC7;">(name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Register lifecycle listeners</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">onAppLifecycle</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Broadcast listening when the registered user is unlocked</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">registerReceiver</span><span style="color:#ADBAC7;">(Intent.ACTION_USER_PRESENT) { context, intent </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Register multiple broadcast listeners, will call back multiple times at the same time</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">registerReceiver</span><span style="color:#ADBAC7;">(Intent.ACTION_PACKAGE_CHANGED, Intent.ACTION_TIME_TICK) { context, intent </span><span style="color:#F47067;">-&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For more functions, please refer to <a href="../public/com/highcapable/yukihookapi/hook/param/PackageParam#applifecycle-class">AppLifecycle</a>.</p></div>`,14),o=[p];function i(c,t){return n(),a("div",null,o)}const d=s(l,[["render",i],["__file","host-lifecycle.html.vue"]]);export{d as default};
