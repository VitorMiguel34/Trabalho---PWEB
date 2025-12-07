import Boletim from './Boletim.js'

export default class Usuario{
    constructor(informacoesDoUsuario){
        this.nome = informacoesDoUsuario.nome
        this.email = informacoesDoUsuario.email
        this.matricula = informacoesDoUsuario.matricula
        this.cpf = informacoesDoUsuario.CPF
        this.senha = informacoesDoUsuario.senha
        this.turma = informacoesDoUsuario.turma
        try{
            this.boletim = new Boletim(informacoesDoUsuario.boletim.notas)
        }
        catch{
            this.boletim = new Boletim()
        }
    }
}