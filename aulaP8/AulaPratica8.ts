class Animal1 {
    constructor(public nome: string, public corDoPelo: string) { }
}

let myAnimal: Animal1 = new Animal1('Coelho', 'Branco');

console.log(myAnimal.nome, myAnimal.corDoPelo);
