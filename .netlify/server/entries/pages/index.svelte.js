var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fea8a638 = require("../../immutable/chunks/index-fea8a638.js");
var import_contentful = __toESM(require("contentful"));
let client = import_contentful.default.createClient({
  space: "kv8cmmif4onj",
  accessToken: "8U-TVejl8pSQ4_ERo62QNKQHUBnI20_sN02jJ0-EtNE"
});
let products = [];
async function load() {
  await client.getEntries().then((res) => res.items.forEach((item) => {
    const { title, price, id } = item.fields;
    const product = { title, price, id };
    products = [...products, product];
    console.log(products);
  }));
  return { props: { products } };
}
const Routes = (0, import_index_fea8a638.c)(($$result, $$props, $$bindings, slots) => {
  let { products: products2 } = $$props;
  if ($$props.products === void 0 && $$bindings.products && products2 !== void 0)
    $$bindings.products(products2);
  return `${(0, import_index_fea8a638.a)(products2, (product) => {
    return `<h1>${(0, import_index_fea8a638.e)(product.title)}</h1>`;
  })}`;
});
