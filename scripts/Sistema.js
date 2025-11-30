export default class Usuario{

    #senha
    #cpf

    constructor(nome,email,matricula,cpf,senha){
        this.nome = nome
        this.email = email
        this.matricula = matricula
        this.#cpf = cpf
        this.#senha = senha
        this.notas = []
    }

    calcularMedia(){
        let somaNotas = 0
        for(let nota of this.notas){
            somaNotas += nota
        }
        let mediaDoAluno = somaNotas/this.notas.length
        return mediaDoAluno
    }

    getSenha(){
        return this.#senha 
    }

    getCpf(){
        return this.#cpf
    }

}