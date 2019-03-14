// function show(obj: { category: string, product: string }) {
//     console.log(obj.category);
//     console.log(obj.product);
// }

// show({ category: "categoria", product: "produto" });

// function show2({ category, product }: { category: string, product: string }) {
//     console.log(category);
//     console.log(product);
// }

interface ObjectValue {
    category: string;
    product?: string;
}

function show({category, product}: ObjectValue) {
    console.log(category);
    console.log(product);
}

show({ category: "categoria", product: "produto" });

let objetoInterface: ObjectValue = ({ category: "categoria 1", product: "produto 1" });

class Product implements ObjectValue{
    category!: string;
    product!: string;
}

let product = new Product();
product.category = 'Categoria';
product.product = 'produtooo';

console.log(product.category);
console.log(product.product);