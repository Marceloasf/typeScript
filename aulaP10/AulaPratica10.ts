interface AnimalInterface {
    name: string;
    color: string;
}

class Animal implements AnimalInterface {
    constructor(public name: string, public color: string){ }

    correr(){

    }

    andar(){

    }

    comer(){
        console.log('Comer do animal');
    }
}

class Coelho extends Animal{
    tamanhoOrelha?: number;

    comer(){
        super.comer(); //classe pai
        console.log('Comer do coelho');
    }
}

let coelho: Coelho = new Coelho('Meu coelho', 'preto');

console.log(coelho.name, coelho.color);
coelho.comer();

