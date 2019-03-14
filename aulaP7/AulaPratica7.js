var somaFunction = function (x, y) { return x + y; };
var valor = somaFunction(2, 3);
var funcao = function (sobrenome) { return "Marcelo " + sobrenome; };
var funcaoDefaultParams = function (first_name, last_name) {
    if (last_name === void 0) { last_name = 'Antonio'; }
};
funcaoDefaultParams("Marcelo");
var funcaoOptionalParams = function (first_name, last_name) { };
funcaoOptionalParams("Marcelo");
