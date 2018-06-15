import { Funcionario } from './Funcionario';
import { Usuario } from './Usuario';
import { OperadorDeSistema } from "./OperadorDeSistema";

export class Gerente extends Funcionario{
    private operadores : Array<OperadorDeSistema>;
   
    public constructor (nome: string, email: string, senha:string, matricula: string,salario: number, 
        operadores: Array<OperadorDeSistema>){
        super (nome, email, senha, matricula, salario) 
        this.operadores = operadores;
    
    }

    public getOperadores() : Array<OperadorDeSistema>{
        return this.operadores;
    }

    public setOperadores (operadores: Array<OperadorDeSistema>) : void{
        this.operadores = operadores;
    }


    public adicionarOperador ( nome: string, email: string, senha: string, matricula:string, salario: number) : OperadorDeSistema{  
        
        // let operacao: Usuario =  new OperadorDeSistema (nome, email, senha, matricula, salario);

        let operacao: OperadorDeSistema =  new OperadorDeSistema (nome, email, senha, matricula, salario);
        this.operadores.push(operacao);
        return operacao;

    }

    public removerOperador( email: string) : string{
        
        for(let i = 0; i < this.operadores.length; i++){
            if(this.operadores[i].getEmail() == email){
                this.operadores.splice(i, 1);
                return "operador deletado";
            }
        }
        return "email não encontrado";
    }

    


    // Adicionar Operadores 
    // Remover Operadores
    // Listar os Clientes, Produtos e Operadores
    // Procurar Cliente, Produto e Operadore por email ou codigo
}

console.log("ta rodando");

let gerente = new Gerente("Marcelo", "marcelo@email.com", "123", "123", 400.000, []);
console.log(gerente.adicionarOperador("Karla", "karla@email.com", "123", "1234", 200.000));
console.log(gerente.adicionarOperador("Lindberg", "lindberg@email.com", "123", "1234", 200.000));
console.log(gerente.getOperadores());
console.log(gerente.removerOperador("lindberg@email.com"));
console.log(gerente.getOperadores());