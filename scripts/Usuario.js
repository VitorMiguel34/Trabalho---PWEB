import Boletim from './Boletim.js'

export default class Usuario{

    constructor(nome, email, matricula, cpf, senha, turma){
        this.nome = nome
        this.email = email
        this.matricula = matricula
        
        this.cpf = cpf
        this.senha = senha
        
        this.notas = []
        this.turma = turma
        this.boletim = new Boletim()
    }
}