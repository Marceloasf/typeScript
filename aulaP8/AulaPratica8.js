var Animal = /** @class */ (function () {
    function Animal(nome, corDoPelo) {
        this.nome = nome;
        this.corDoPelo = corDoPelo;
    }
    return Animal;
}());
var myAnimal = new Animal('Coelho', 'Branco');
console.log(myAnimal.nome, myAnimal.corDoPelo);
