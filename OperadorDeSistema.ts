import { Funcionario } from './Funcionario';

export class OperadorDeSistema extends Funcionario{
   
    public constructor (nome: string, email: string, senha:string, matricula: string,salario: number){
        super (nome, email, senha, matricula, salario)  
    
    }

    // Adicionar Produtos
    // Remover Produtos
    // Listar os Clientes e Produtos
    // Procurar Cliente e Produto por email ou codigo
}