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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_b22a25cc = require("../../../immutable/chunks/index-b22a25cc.js");
var contentful = __toESM(require("contentful"));
let client = contentful.createClient({
  space: "kv8cmmif4onj",
  accessToken: "8U-TVejl8pSQ4_ERo62QNKQHUBnI20_sN02jJ0-EtNE"
});
async function load({ params }) {
  let id = params.id;
  console.log(id);
  let product;
  await client.getEntry(id).then((res) => {
    const { title, id: id2, price } = res.fields;
    const imageUrl = "https:" + res.fields.image.fields.file.url;
    const prod = { title, id: id2, price, imageUrl };
    product = prod;
  });
  return { props: { product } };
}
const U5Bidu5D = (0, import_index_b22a25cc.c)(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `Detailed product info
<h1>${(0, import_index_b22a25cc.e)(product.title)}</h1>
<a href="${"/"}">Go home</a>
<img${(0, import_index_b22a25cc.b)("src", product.imageUrl, 0)} alt="${""}" height="${"300"}">`;
});
