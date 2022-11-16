import{_ as s,c as a,o as n,a as l}from"./app.9fb06215.js";const C='{"title":"Eslint Config Typescript","description":"","frontmatter":{"category":"Project Configuration"},"headers":[{"level":3,"title":"Install","slug":"install"},{"level":3,"title":"Config .eslintrc / .eslintrc.js","slug":"config-eslintrc-eslintrc-js"},{"level":3,"title":"Add script for package.json","slug":"add-script-for-package-json"},{"level":3,"title":"Config VS Code auto fix","slug":"config-vs-code-auto-fix"},{"level":3,"title":"Usage Merge","slug":"usage-merge"},{"level":2,"title":"Type Declarations","slug":"type-declarations"}],"relativePath":"conf__eslint-typescript/index.md","lastUpdated":1668565559000}',e={name:"conf__eslint-typescript/index.md"},p=l(`<h1 id="eslint-config-typescript" tabindex="-1">Eslint Config Typescript <a class="header-anchor" href="#eslint-config-typescript" aria-hidden="true">#</a></h1><p>Eslint \u7684 typescript \u914D\u7F6E\uFF0C\u5305\u542B\u5185\u5BB9\uFF1Atypescript</p><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm add -D eslint @hairy/eslint-typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="config-eslintrc-eslintrc-js" tabindex="-1">Config .eslintrc / .eslintrc.js <a class="header-anchor" href="#config-eslintrc-eslintrc-js" aria-hidden="true">#</a></h3><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@hairy/eslint-typescript</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="add-script-for-package-json" tabindex="-1">Add script for package.json <a class="header-anchor" href="#add-script-for-package-json" aria-hidden="true">#</a></h3><p>For example:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint .</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lint:fix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint . --fix</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="config-vs-code-auto-fix" tabindex="-1">Config VS Code auto fix <a class="header-anchor" href="#config-vs-code-auto-fix" aria-hidden="true">#</a></h3><p>create .vscode/settings.json</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">prettier.enable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editor.codeActionsOnSave</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">source.fixAll.eslint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="usage-merge" tabindex="-1">Usage Merge <a class="header-anchor" href="#usage-merge" aria-hidden="true">#</a></h3><p>Merge \u914D\u7F6E\u5C06\u9700\u8981\u5B89\u88C5\u5305\u5185\u4F9D\u8D56\u5185\u5BB9\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u8FD9\u662F eslint \u5F53\u524D\u6240\u5B58\u5728\u7684\u95EE\u9898\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> mergeConfig </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@hairy/eslint-typescript/merge</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Linter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eslint</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> _default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Linter</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Config</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Linter</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">RulesRecord</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_default</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,17),o=[p];function t(c,r,i,D,y,F){return n(),a("div",null,o)}var A=s(e,[["render",t]]);export{C as __pageData,A as default};
