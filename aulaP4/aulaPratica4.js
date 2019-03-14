//booleano
var success = true; //implicita
var fail = false;
var successType = true;
var failType = false;
//numeros
var num1 = 10; //implicita
var num2 = 10.5;
var num3 = 0xFA;
var num1Type = 10;
var num2Type = 10.5;
var num3Type = 0xFA;
//string
var nome = 'Marcelin';
var nomeType = 'Marcelo';
var nameTemplate = "Autor " + nomeType + " e estudante " + nome;
//array
var arrayStrings = ["a", "b", "c"];
var arrayTypeArrayString = ["a", "b", "c"];
var arrayTypeArrayAny = ["a", "b", "c", 1, 2, 3, 0xFA, true];
var arrayGenericaJS = ["a", "b", "c", 1, 2, 3];
//enum
var estado_civil;
(function (estado_civil) {
    estado_civil["Solteiro"] = "solteiro";
    estado_civil["Casado"] = "casado";
    estado_civil["Divorciado"] = "divorciado";
})(estado_civil || (estado_civil = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
if (meu_estado_civil === estado_civil.Solteiro) {
    console.log('sou solteiro');
}
