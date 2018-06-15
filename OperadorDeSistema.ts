import { Funcionario } from './Funcionario';
import { Produto } from './Produto';
import { Video } from './Video';
import {Filmes} from './Filmes';
import {Series} from './Series';
import {Podcast} from './Podcast';
import {Musica} from './Musica';
import {Pacote} from './Pacote';
import { Data } from './Data';

export class OperadorDeSistema extends Funcionario{
    
    private produtos: Array<Produto>
    private filmes?: Array<Filmes>
    private series?: Array<Series>
    private musica?: Array<Musica>
    private podcast?: Array<Podcast>
    private pacote?: Array<Pacote>
    

    public constructor (nome: string, email: string, senha:string, matricula: string,salario: number,
   
        filmes?: Array<Filmes>, 
        series?: Array<Series>, 
        musica?: Array<Musica>, 
        podcast?: Array<Podcast>, 
        pacote?:Array<Pacote>){

        super (nome, email, senha, matricula, salario)  
        this.filmes = filmes;
        this.series = series;
        this.musica = musica;
        this.podcast = podcast;
        this.pacote = pacote;

    }

    public adicionarProduto ( Produto: Produto) : Produto[] { 
        // this.produtos.push(Produto);
            return this.produtos 
    
    }

    public adicionarFilmes ( codigo:string, nome:string, genero:string, preco:number, 
        anoLocamento:number, faixaEtaria:number, duracao:number) : Filmes[]{

        let filme = new Filmes (codigo, nome, genero, preco, anoLocamento, faixaEtaria, duracao) 
        this.filmes.push(filme)
        this.adicionarProduto(filme);       
             return this.filmes
             
    }

    public adicionarSeries ( codigo:string, nome:string, genero:string, preco:number, 
        anoLocamento:number, faixaEtaria:number, numeroDeEpisodios : number, duracaoMediaDeEpsodio : number ) : Series []{

        let serie = new Series (codigo, nome, genero, preco, anoLocamento, faixaEtaria, numeroDeEpisodios, duracaoMediaDeEpsodio);
        this.series.push (serie);
        this.adicionarProduto(serie);
            return this.series;
        
    }

    public adicionarMusica ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, album:string) : Musica[]{
        let musica = new Musica ( codigo, nome, genero, preco, autor, duracao, album);
        this.musica.push (musica);
        this.adicionarProduto (musica);
            return this.musica;
    }

    public adicionarPodcast ( codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, tematica:string) : Podcast []{
        let podcast = new Podcast ( codigo, name, genero, preco, autor, duracao, tematica);
        this.podcast.push ( podcast);
        this.adicionarProduto (podcast);
            return this.podcast;
    }

    public adicionarPacote ( codigo:string, nome:string, genero:string, preco:number, 
        produtos:Array<Produto>, validade: Data, precoDeProtudos:number) : Pacote []{

        let pacote = new Pacote (codigo, nome, genero,preco, produtos, validade,precoDeProtudos)
        this.pacote.push ( pacote)
        this.adicionarProduto (pacote)
            return this.pacote
        }

        
       

            
    
    // Adicionar Produtos
    // Remover Produtos
    // Listar os Clientes e Produtos
    // Procurar Cliente e Produto por email ou codigo
}

console.log ("tá rodando")
let filme = [new Filmes ("0001", "Era do gelo", "aventura", 1, 2011, 12, 90)];
// let serie = [new Series ("002", "gameofthrones", "aventura", 20, 2018, 18, 50, 45, )]
// let musica = [new Musica ("003", "mar eu", "MPB", 10, "Iracemas", 2, "Plurisom")]
// let podcast = [new Podcast("004", "AULADEPOO", "Educação", 100, "Anderson", 10, "trabalhofinal")]

let data = new Data (19,12,2018)
console.log(filme)
let pacote = [new Pacote ("888", "sóterro","terro", 200,  data, 20, filme)]

console.log(pacote[0].getProdutos());