// function show(obj: { category: string, product: string }) {
//     console.log(obj.category);
//     console.log(obj.product);
// }
function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
show({ category: "categoria", product: "produto" });
var objetoInterface = ({ category: "categoria 1", product: "produto 1" });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product = new Product();
product.category = 'Categoria';
product.product = 'produtooo';
console.log(product.category);
console.log(product.product);
