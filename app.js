"use strict";
exports.__esModule = true;
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
;
var showProduct = function (name, price) {
    console.log("The product ".concat(name, " costs ").concat(price, "$."));
};
var product = getProduct(6);
showProduct(product.name, product.price);
