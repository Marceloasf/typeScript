class Animal {
    constructor(public nome: string, public corDoPelo: string) { }
}

let myAnimal: Animal = new Animal('Coelho', 'Branco');

console.log(myAnimal.nome, myAnimal.corDoPelo);
