import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.8b7e72b0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u504F\u597D\u8BBE\u7F6E-preference" tabindex="-1"><a class="header-anchor" href="#\u504F\u597D\u8BBE\u7F6E-preference" aria-hidden="true">#</a> \u504F\u597D\u8BBE\u7F6E preference</h1><p>\u504F\u597D\u8BBE\u7F6E\u7684\u6253\u5F00\u4F4D\u7F6E\u5728\u5DE5\u5177\u76D2\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u9F7F\u8F6E\u56FE\u6807\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u6253\u5F00 InPageEdit \u504F\u597D\u8BBE\u7F6E\u7A97\u53E3</p><p>\u5728\u8FD9\u4E2A\u5F39\u51FA\u7A97\u53E3\u53EF\u4EE5\uFF1A</p><ul><li>\u4FEE\u6539\u9ED8\u8BA4\u7F16\u8F91\u6458\u8981</li><li>\u4FEE\u6539\u7F16\u8F91\u4E60\u60EF</li><li>\u67E5\u770B\u4E2A\u4EBA\u7684\u4F7F\u7528\u6570\u636E</li><li>\u88C5\u8F7D\u9700\u8981\u7684\u63D2\u4EF6</li><li>\u627E\u5230\u9879\u76EE\u7684 GitHub \u5730\u5740\u534F\u52A9\u5F00\u53D1\u2026\u2026</li></ul><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><p>\u9664\u4E86\u901A\u8FC7\u504F\u597D\u8BBE\u7F6E\u7A97\u53E3\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5728 InPageEdit \u6838\u5FC3\u52A0\u8F7D\u524D\u4FEE\u6539\u5168\u5C40\u5BF9\u8C61\u4E0A\u7684<code>InPageEdit.myPreference</code>\u7684\u503C\u6765\u914D\u7F6E\u504F\u597D\u8BBE\u7F6E\u3002</p><p><strong>\u793A\u4F8B</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> window<span class="token punctuation">.</span>InPageEdit <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myPreference <span class="token operator">=</span> <span class="token punctuation">{</span>\n  editMinor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="inpageedit-core" tabindex="-1"><a class="header-anchor" href="#inpageedit-core" aria-hidden="true">#</a> InPageEdit Core</h3>', 9);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "\u952E\u540D"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u7C7B\u578B"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u9884\u8BBE"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u8BF4\u660E")
  ])
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "editMinor"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "boolean")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "false")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "\u662F\u5426\u9884\u8BBE\u7F16\u8F91\u4E3A\u5C0F\u7F16\u8F91")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "editSummary"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "string")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "i18n:<preference-summary-default>")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "\u9884\u8BBE\u7F16\u8F91\u6458\u8981")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "lockToolBox"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "boolean")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "false")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "\u662F\u5426\u603B\u662F\u81EA\u52A8\u5C55\u5F00\u53F3\u4E0B\u89D2\u5DE5\u5177\u76D2")
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "redLinkQuickEdit"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "boolean")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "true")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "\u662F\u5426\u4E3A\u7EA2\u94FE\u6DFB\u52A0\u5FEB\u901F\u7F16\u8F91\u6309\u94AE")
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "outSideClose"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "boolean")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "false")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "\u80FD\u5426\u901A\u8FC7\u70B9\u51FB\u7F16\u8F91\u5668\u5916\u90E8\u5173\u95ED")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "watchList"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "'nochange' | 'preferences' | 'watch' | 'unwatch'")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "'preferences'")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5206\u522B\u8868\u793A\uFF1A\u4E0D\u6539\u53D8\u76D1\u89C6\u72B6\u6001\u3001\u6309\u7CFB\u7EDF\u8BBE\u7F6E\u3001\u603B\u662F\u76D1\u89C6\u3001\u4ECE\u4E0D\u76D1\u89C6")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("td", null, "plugins", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("td", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "string[]")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("td", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "['toolbox.js', 'wiki-editor.js']")
], -1);
const _hoisted_20 = /* @__PURE__ */ createTextVNode("\u6B32\u4F7F\u7528\u7684\u63D2\u4EF6\u7684 ID \u5217\u8868\uFF0C\u53EF\u7528\u63D2\u4EF6\u89C1 ");
const _hoisted_21 = {
  href: "https://ipe-plugins.js.org",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("https://ipe-plugins.js.org");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "noConfirmEdit"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "boolean")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "-"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u662F\u5426\u8DF3\u8FC7\u70B9\u51FB\u4FDD\u5B58\u65F6\u7684\u786E\u8BA4\u5F39\u7A97")
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "noRedirectIfConvertedTitleExists"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "boolean")
  ]),
  /* @__PURE__ */ createBaseVNode("td", null, "-"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FEB\u901F\u91CD\u5B9A\u5411\u68C0\u6D4B\u76EE\u6807\u9875\u9762\u662F\u5426\u5B58\u5728\u65F6\u662F\u5426\u68C0\u67E5\u53D8\u4F53\u9875\u9762 (\u7B80\u7E41\u68C0\u6D4B)")
], -1);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<h3 id="plugin-codemirror" tabindex="-1"><a class="header-anchor" href="#plugin-codemirror" aria-hidden="true">#</a> Plugin - CodeMirror</h3><table><thead><tr><th>\u952E\u540D</th><th>\u7C7B\u578B</th><th>\u9884\u8BBE</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>codeMirrorTheme</td><td><code>string</code></td><td><code>&#39;solarized light&#39;</code></td><td>\u5B9A\u4E49 CodeMirror \u63D2\u4EF6\u6240\u52A0\u8F7D\u7684\u4E3B\u9898</td></tr><tr><td>codeMirrorThemeNoCSS</td><td><code>boolean</code></td><td>-</td><td>\u662F\u5426\u4E0D\u81EA\u52A8\u52A0\u8F7D\u4E3B\u9898\u4EE5\u4FBF\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u4E3B\u9898 CSS</td></tr></tbody></table>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("table", null, [
      _hoisted_10,
      createBaseVNode("tbody", null, [
        _hoisted_11,
        _hoisted_12,
        _hoisted_13,
        _hoisted_14,
        _hoisted_15,
        _hoisted_16,
        createBaseVNode("tr", null, [
          _hoisted_17,
          _hoisted_18,
          _hoisted_19,
          createBaseVNode("td", null, [
            _hoisted_20,
            createBaseVNode("a", _hoisted_21, [
              _hoisted_22,
              createVNode(_component_OutboundLink)
            ])
          ])
        ]),
        _hoisted_23,
        _hoisted_24
      ])
    ]),
    _hoisted_25
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
