
export default class Usuario{
    // REMOVIDO: #senha e #cpf

    constructor(nome, email, matricula, cpf, senha, turma, serie, curso){
        this.nome = nome
        this.email = email
        this.matricula = matricula
        
        // Mantemos como propriedades públicas (serializáveis)
        this.cpf = cpf
        this.senha = senha
        
        this.notas = []
        this.turma = turma
        this.serie = serie
        this.curso = curso
    }

    // REMOVIDO: getSenha() e getCpf()

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