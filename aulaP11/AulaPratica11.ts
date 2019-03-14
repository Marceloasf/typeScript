// let _myArray: Array<number> = [];
// function funcaoAP11(array: Array<number>){ }

function funcaoGenerics<T>(param: T): T{
    return param;
}

let variableGeneric: number = funcaoGenerics<number>( 2 );

class Lista<T> {
    itens: Array<T> = [];

    add(item:T){

    }

    remove(item:T){

    }
}

let lista = new Lista<number>();