import Boletim from './Boletim.js'

export default class Usuario{

    constructor(nome, email, matricula, cpf, senha, turno, serie, curso){
        this.nome = nome
        this.email = email
        this.matricula = matricula
        
        this.cpf = cpf
        this.senha = senha
        
        this.notas = []
        this.turno = turno
        this.serie = serie
        this.curso = curso
        this.boletim = new Boletim()
    }
}