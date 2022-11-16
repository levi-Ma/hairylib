import{_ as e,c as n,o as s,a}from"./app.9fb06215.js";const f='{"title":"Contributing","description":"","frontmatter":{"category":"Guide"},"headers":[{"level":2,"title":"Development","slug":"development"},{"level":2,"title":"Contributing","slug":"contributing-1"},{"level":3,"title":"Existing functions","slug":"existing-functions"},{"level":3,"title":"New functions","slug":"new-functions"},{"level":2,"title":"New add-ons","slug":"new-add-ons"},{"level":2,"title":"Project Structure","slug":"project-structure"},{"level":3,"title":"Monorepo","slug":"monorepo"},{"level":2,"title":"Function Folder","slug":"function-folder"}],"relativePath":"docs__guide/contributing.md","lastUpdated":1668565559000}',t={name:"docs__guide/contributing.md"},l=a(`<h1 id="contributing" tabindex="-1">Contributing <a class="header-anchor" href="#contributing" aria-hidden="true">#</a></h1><p>\u611F\u8C22\u60A8\u6709\u5174\u8DA3\u4E3A\u8FD9\u4E2A\u9879\u76EE\u505A\u51FA\u8D21\u732E\uFF01</p><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h2><p>\u5C06\u6B64 repo \u514B\u9686\u5230\u60A8\u7684\u672C\u5730\u8BA1\u7B97\u673A\u5E76\u5B89\u88C5\u4F9D\u8D56\u9879\u3002</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"></span></code></pre></div><p>\u9879\u76EE\u4F7F\u7528 Vitepress \u8FDB\u884C\u5FEB\u901F\u5F00\u53D1\u548C\u8BB0\u5F55\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u5728\u672C\u5730\u542F\u52A8\u5B83</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm dev</span></span>
<span class="line"></span></code></pre></div><h2 id="contributing-1" tabindex="-1">Contributing <a class="header-anchor" href="#contributing-1" aria-hidden="true">#</a></h2><h3 id="existing-functions" tabindex="-1">Existing functions <a class="header-anchor" href="#existing-functions" aria-hidden="true">#</a></h3><p>\u968F\u610F\u589E\u5F3A\u73B0\u6709\u529F\u80FD\u3002\u8BF7\u5C3D\u91CF\u4E0D\u8981\u5F15\u5165\u91CD\u5927\u66F4\u6539\u3002</p><h3 id="new-functions" tabindex="-1">New functions <a class="header-anchor" href="#new-functions" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u65B0\u529F\u80FD\u6709\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u5728\u5F00\u59CB\u5DE5\u4F5C\u4E4B\u524D\uFF0C\u6700\u597D\u5148\u6253\u5F00\u4E00\u4E2A\u95EE\u9898\u8FDB\u884C\u8BA8\u8BBA\u3002</li><li>\u5B9E\u73B0\u5E94packages/core\u4F5C\u4E3A\u6587\u4EF6\u5939\u653E\u5728\u4E0B\u9762\u5E76\u516C\u5F00 index.ts</li></ul><blockquote><p>\u8BF7\u6CE8\u610F\uFF0C\u60A8\u4E0D\u9700\u8981\u66F4\u65B0indexes.json \u5305&#39; index.ts\u3002\u5B83\u4EEC\u662F\u81EA\u52A8\u751F\u6210\u7684\u3002</p></blockquote><h2 id="new-add-ons" tabindex="-1">New add-ons <a class="header-anchor" href="#new-add-ons" aria-hidden="true">#</a></h2><p>\u975E\u5E38\u6B22\u8FCE\u65B0\u7684\u9644\u52A0\u529F\u80FD\uFF01</p><ul><li>\u5728 \u4E0B\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u5939packages/\uFF0C\u5C06\u5176\u547D\u540D\u4E3A\u60A8\u7684\u52A0\u8F7D\u9879\u540D\u79F0\u3002</li><li><code>README.md</code> \u5728\u8BE5\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u3002</li><li>\u50CF\u5BF9 util__libcore \u5305\u6240\u505A\u7684\u90A3\u6837\u6DFB\u52A0\u529F\u80FD\u3002</li><li>\u63D0\u4EA4\u5E76\u4F5C\u4E3A PR \u63D0\u4EA4\u3002</li></ul><h2 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-hidden="true">#</a></h2><h3 id="monorepo" tabindex="-1">Monorepo <a class="header-anchor" href="#monorepo" aria-hidden="true">#</a></h3><p>\u9879\u76EE\u5BF9\u591A\u4E2A\u5305\u4F7F\u7528 monorepo</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">packages</span></span>
<span class="line"><span style="color:#A6ACCD;">  shared/         - \u8DE8\u5305\u5171\u4EAB\u5B9E\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">  utils/          - \u6838\u5FC3\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">  [...addons]/    - add-ons named</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="function-folder" tabindex="-1">Function Folder <a class="header-anchor" href="#function-folder" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u6587\u4EF6\u5939\u5178\u578B\u6027\u5305\u542B\u4EE5\u4E0B 3 \u4E2A\u6587\u4EF6\uFF1A</p><blockquote><p>\u60A8\u53EF\u4EE5\u5728\u4E0B\u9762\u627E\u5230\u6A21\u677F packages/vue__use/_template/</p></blockquote><p><code>index.ts</code> \u60A8\u5E94\u8BE5\u4F7F\u7528\u540D\u79F0\u5BFC\u51FA\u51FD\u6570\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// DO</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMyFunction</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// DON&#39;T</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> useMyFunction</span></span>
<span class="line"></span></code></pre></div><p><code>index.md</code> \u7B80\u77ED\u7684\u4ECB\u7ECD\u8981\u5199\u5728\u7B2C\u4E00\u53E5\u8BDD\u653E\u5728\u529F\u80FD\u6587\u6863\u4E2D\uFF0C\u7ECF\u53EF\u80FD\u7684\u4FDD\u6301\u7B80\u6D01\u660E\u4E86\u3002</p>`,27),o=[l];function i(p,c,r,d,u,h){return s(),n("div",null,o)}var _=e(t,[["render",i]]);export{f as __pageData,_ as default};
