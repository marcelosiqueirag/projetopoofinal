import { Funcionario } from './Funcionario';

export class Gerente extends Funcionario{
   
    public constructor (nome: string, email: string, senha:string, matricula: string,salario: number){
        super (nome, email, senha, matricula, salario)  
    
    }

    // Adicionar Operadores 
    // Remover Operadores
    // Listar os Clientes, Produtos e Operadores
    // Procurar Cliente, Produto e Operadore por email ou codigo
}