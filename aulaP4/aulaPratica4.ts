//booleano
let success = true; //implicita
let fail = false;

let successType: boolean = true;
let failType: boolean = false;
//numeros
let num1 = 10; //implicita
let num2 = 10.5;
let num3 = 0xFA;

let num1Type: number = 10;
let num2Type: number = 10.5;
let num3Type: number = 0xFA;
//string
let nome = 'Marcelin';

let nomeType: string = 'Marcelo';

let nameTemplate: string = `Autor ${nomeType} e estudante ${nome}`
//array
let arrayStrings: string[] = ["a", "b", "c"];
let arrayTypeArrayString: Array<string> = ["a", "b", "c"];
let arrayTypeArrayAny: Array<any> = ["a", "b", "c", 1, 2, 3, 0xFA, true];
let arrayGenericaJS = ["a", "b", "c", 1, 2, 3];
//enum
enum estado_civil {
    Solteiro = 'solteiro',
    Casado = 'casado',
    Divorciado = 'divorciado'
};

let meu_estado_civil: estado_civil = estado_civil.Solteiro;

if (meu_estado_civil === estado_civil.Solteiro) {
    console.log('sou solteiro');
}