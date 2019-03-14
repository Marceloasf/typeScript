let meu_nome: any = 'marcelo';

let count = (<string>meu_nome).length;

let obj = {
    name: 'Marcelo'
};

(<any>obj).texto = 'School of Net';

console.log(obj);

let number = 2;

let numString = number + "";

console.log(typeof numString);

let stringNum = '-234';

let number2 = +stringNum;

console.log(typeof number2);
console.log(number2);
console.log(number);