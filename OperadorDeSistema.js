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
var Filmes_1 = require("./Filmes");
var Series_1 = require("./Series");
var Podcast_1 = require("./Podcast");
var Musica_1 = require("./Musica");
var Pacote_1 = require("./Pacote");
var Data_1 = require("./Data");
var OperadorDeSistema = /** @class */ (function (_super) {
    __extends(OperadorDeSistema, _super);
    function OperadorDeSistema(nome, email, senha, matricula, salario, filmes, series, musica, podcast, pacote) {
        var _this = _super.call(this, nome, email, senha, matricula, salario) || this;
        _this.filmes = filmes;
        _this.series = series;
        _this.musica = musica;
        _this.podcast = podcast;
        _this.pacote = pacote;
        return _this;
    }
    OperadorDeSistema.prototype.adicionarProduto = function (Produto) {
        // this.produtos.push(Produto);
        return this.produtos;
    };
    OperadorDeSistema.prototype.adicionarFilmes = function (codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao) {
        var filme = new Filmes_1.Filmes(codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao);
        this.filmes.push(filme);
        this.adicionarProduto(filme);
        return this.filmes;
    };
    OperadorDeSistema.prototype.adicionarSeries = function (codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpsodio) {
        var serie = new Series_1.Series(codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpsodio);
        this.series.push(serie);
        this.adicionarProduto(serie);
        return this.series;
    };
    OperadorDeSistema.prototype.adicionarMusica = function (codigo, nome, genero, preco, autor, duracao, album) {
        var musica = new Musica_1.Musica(codigo, nome, genero, preco, autor, duracao, album);
        this.musica.push(musica);
        this.adicionarProduto(musica);
        return this.musica;
    };
    OperadorDeSistema.prototype.adicionarPodcast = function (codigo, nome, genero, preco, autor, duracao, tematica) {
        var podcast = new Podcast_1.Podcast(codigo, name, genero, preco, autor, duracao, tematica);
        this.podcast.push(podcast);
        this.adicionarProduto(podcast);
        return this.podcast;
    };
    OperadorDeSistema.prototype.adicionarPacote = function (codigo, nome, genero, preco, produtos, validade, precoDeProtudos) {
        var pacote = new Pacote_1.Pacote(codigo, nome, genero, preco, produtos, validade, precoDeProtudos);
        this.pacote.push(pacote);
        this.adicionarProduto(pacote);
        return this.pacote;
    };
    return OperadorDeSistema;
}(Funcionario_1.Funcionario));
exports.OperadorDeSistema = OperadorDeSistema;
console.log("tá rodando");
var filme = [new Filmes_1.Filmes("0001", "Era do gelo", "aventura", 1, 2011, 12, 90)];
// let serie = [new Series ("002", "gameofthrones", "aventura", 20, 2018, 18, 50, 45, )]
// let musica = [new Musica ("003", "mar eu", "MPB", 10, "Iracemas", 2, "Plurisom")]
// let podcast = [new Podcast("004", "AULADEPOO", "Educação", 100, "Anderson", 10, "trabalhofinal")]
var data = new Data_1.Data(19, 12, 2018);
console.log(filme);
var pacote = [new Pacote_1.Pacote("888", "sóterro", "terro", 200, data, 20, filme)];
console.log(pacote[0].getProdutos());
