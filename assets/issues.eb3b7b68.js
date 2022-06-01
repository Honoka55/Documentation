import { h as defineComponent, o as openBlock, a as createElementBlock, f as renderSlot, e as createTextVNode, t as toDisplayString, b as createBaseVNode } from "./app.8b7e72b0.js";
const _hoisted_1 = ["id", "href"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15",
  class: "icon outbound"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1);
var _sfc_main = defineComponent({
  props: {
    id: { type: Number, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: "issues-link external",
        id: "issues-" + __props.id,
        href: "https://github.com/inpageedit/inpageedit-v2/issues/" + __props.id
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode("issue#" + toDisplayString(__props.id), 1)
        ]),
        _hoisted_2
      ], 8, _hoisted_1);
    };
  }
});
export { _sfc_main as default };
