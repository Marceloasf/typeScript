// let _myArray: Array<number> = [];
// function funcaoAP11(array: Array<number>){ }
function funcaoGenerics(param) {
    return param;
}
var variableGeneric = funcaoGenerics(2);
var Lista = /** @class */ (function () {
    function Lista() {
        this.itens = [];
    }
    Lista.prototype.add = function (item) {
    };
    Lista.prototype.remove = function (item) {
    };
    return Lista;
}());
var lista = new Lista();
