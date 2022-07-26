var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2435e811 = require("../../../_app/immutable/chunks/index-2435e811.js");
const U5Bidu5D = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `Detailed product info
<h1>${(0, import_index_2435e811.e)(product.title)}</h1>
<a href="${"/"}">Go home</a>
<img${(0, import_index_2435e811.a)("src", product.imageUrl, 0)} alt="${""}" height="${"300"}">`;
});
