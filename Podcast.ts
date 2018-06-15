import {Audio} from './Audio';

export class Podcast extends Audio{
    private tematica: string

    public constructor (codigo:string, nome:string, genero:string, preco:number, autor:string, duracao:number, tematica:string){
        super(codigo, nome, genero, preco, autor, duracao);
        this.tematica = tematica;

    }

    public gettematica() : string{
        return this.tematica;
    }

    public settematica(tematica : string) : void{
        this.tematica = tematica
    }
}