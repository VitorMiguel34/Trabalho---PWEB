export default class Usuario{
    // removi #senha e #cpf

    constructor(nome, email, matricula, cpf, senha, turno, serie, curso){
        this.nome = nome
        this.email = email
        this.matricula = matricula
        
        // manti como público
        this.cpf = cpf
        this.senha = senha
        
        this.notas = []
        this.turno = turno
        this.serie = serie
        this.curso = curso
    }

    // removi getSenha() e getCpf()

    calcularMedia(){
        let somaNotas = 0
        for(let nota of this.notas){
            somaNotas += nota
        }
        // Adicionada checagem para evitar divisão por zero
        let mediaDoAluno = this.notas.length > 0 ? somaNotas/this.notas.length : 0;
        return mediaDoAluno
    }
}