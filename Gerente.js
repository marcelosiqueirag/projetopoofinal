"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Funcionario_1 = require("./Funcionario");
var OperadorDeSistema_1 = require("./OperadorDeSistema");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, email, senha, matricula, salario, operadores) {
        var _this = _super.call(this, nome, email, senha, matricula, salario) || this;
        _this.operadores = operadores;
        return _this;
    }
    Gerente.prototype.getOperadores = function () {
        return this.operadores;
    };
    Gerente.prototype.setOperadores = function (operadores) {
        this.operadores = operadores;
    };
    Gerente.prototype.adicionarOperador = function (nome, email, senha, matricula, salario) {
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);
        var operacao = new OperadorDeSistema_1.OperadorDeSistema(nome, email, senha, matricula, salario);
        this.operadores.push(operacao);
        return operacao;
    };
    Gerente.prototype.removerOperador = function (email) {
        for (var i = 0; i < this.operadores.length; i++) {
            if (this.operadores[i].getEmail() == email) {
                this.operadores.splice(i, 1);
                return "operador deletado";
            }
        }
        return "email não encontrado";
    };
    return Gerente;
}(Funcionario_1.Funcionario));
exports.Gerente = Gerente;
console.log("ta rodando");
var gerente = new Gerente("Marcelo", "marcelo@email.com", "123", "123", 400.000, []);
console.log(gerente.adicionarOperador("Karla", "karla@email.com", "123", "1234", 200.000));
console.log(gerente.adicionarOperador("Lindberg", "lindberg@email.com", "123", "1234", 200.000));
console.log(gerente.getOperadores());
console.log(gerente.removerOperador("lindberg@email.com"));
console.log(gerente.getOperadores());
