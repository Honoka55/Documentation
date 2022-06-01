import { c as createStaticVNode } from "./app.8b7e72b0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5" aria-hidden="true">#</a> \u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5</h1><h2 id="\u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177</h2><blockquote><p><strong>\u5C0F\u5DE5\u5177</strong>\uFF08\u96F6\u4EF6/Gadget\uFF09\u5927\u591A\u6570\u57FA\u4E8E JavaScript\uFF0C\u6240\u4EE5\u4F60\u5FC5\u987B\u4F7F\u4F60\u7684\u6D4F\u89C8\u5668\u542F\u7528 JavaScript \u4EE5\u4F7F\u5B83\u4EEC\u5DE5\u4F5C\u3002</p><p>\u540C\u65F6\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u7279\u6B8A\u5C0F\u5DE5\u5177\u4E0D\u662F MediaWiki \u8F6F\u4EF6\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4ED6\u4EEC\u901A\u5E38\u662F\u7531 Wiki \u7684\u7BA1\u7406\u5458\u5F00\u53D1\u5E76\u7EF4\u62A4\u7684\u3002</p><p>\u2014\u2014 MediaWiki</p></blockquote><p><s>\u5EFA\u8BAE\u76F4\u63A5\u770B mediawiki.org\uFF0C\u61D2\u5F97\u5199\u4E86</s></p><h2 id="\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6" aria-hidden="true">#</a> \u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6</h2><p>\u5927\u591A\u6570 Wiki \u4E0A\u7684\u5C0F\u5DE5\u5177\u7531<code>MediaWiki:Gadgets-definition</code>\u7EDF\u4E00\u5B9A\u4E49\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5C06 InPageEdit \u5B89\u88C5\u4E3A\u60A8 wiki \u7684\u5C0F\u5DE5\u5177\u3002</p><ol><li>\u5728<code>MediaWiki:Gadgets-definition</code>\u53E6\u8D77\u4E00\u884C\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-wiki ext-wiki line-numbers-mode"><pre class="language-wiki"><code><span class="token punctuation">*</span> InPageEdit<span class="token url">[ResourceLoader|rights=edit,skipcaptcha]</span><span class="token punctuation">|</span>InPageEdit.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728<code>MediaWiki:Gadget-InPageEdit.js</code>\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * \u4ECE\u4E0B\u9762\u7684\u65B9\u6CD5\u4E2D\u4EFB\u9009\u4E00\u4E2A\u5373\u53EF Choose one from the following\n */</span>\n<span class="token comment">// 1. jsdelivr</span>\nmw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 2. unpkg</span>\nmw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://unpkg.com/mediawiki-inpageedit&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>\u5728<code>MediaWiki:Gadget-InPageEdit</code>\u6DFB\u52A0\u7C7B\u4F3C\u8FD9\u6837\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u6539\u52A8\uFF1A</li></ol><div class="language-wiki ext-wiki line-numbers-mode"><pre class="language-wiki"><code><span class="token url">[https://ipe.js.org/ InPageEdit]</span> - \u7531\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u7EF4\u62A4\uFF0C\u9762\u5411\u719F\u7EC3\u7528\u6237\u7684\u5FEB\u901F\u7EF4\u62A4\u5DE5\u5177\u96C6(\u5C0F\u7F16\u8F91\u3001\u91CD\u5B9A\u5411\u3001\u9875\u9762\u5386\u53F2)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u5927\u529F\u544A\u6210\uFF0C\u524D\u5F80\u53C2\u6570\u8BBE\u7F6E\u9875\u9762 \u2192 \u5C0F\u5DE5\u5177\uFF0C\u67E5\u770B\u5C0F\u5DE5\u5177\u662F\u5426\u6210\u529F\u6CE8\u518C</li></ol>', 13);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
