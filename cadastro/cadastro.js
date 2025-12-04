import Usuario from '../scripts/Sistema.js'
import Validacao from '../scripts/Validacao.js'

let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios")) || {}

function pegarInformacoesDoUsuario(){

    const INPUTS = [
        "inputNome",
        "inputEmail",
        "inputMatricula",
        "inputCPF",
        "inputSenha",
        "inputConfirmacaoSenha"
    ]
    let informacoesDoUSuario = {}
    let chave;

    for(let id of INPUTS){
        chave = id.slice(5)
        chave = chave.toLowerCase()
        informacoesDoUSuario[chave] = document.getElementById(id).value 
    }
    return informacoesDoUSuario
}

function cadastrarNovoUsuario(){

    let infosUsuario = pegarInformacoesDoUsuario()

    //Esse bloco para baixo deverá passar pelas verificações
    let novoUsuario = new Usuario(
        infosUsuario["nome"],
        infosUsuario["email"],
        infosUsuario["matricula"],
        infosUsuario["cpf"],
        infosUsuario["senha"]
    )
        
    listaDeUsuarios[novoUsuario.matricula] = novoUsuario

    localStorage.setItem("listaDeUsuarios",JSON.stringify(listaDeUsuarios))

    window.location.href = '../login/login.html'
    //Direciona para info ao efetuar cadastro
    
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastro = document.getElementById("botaoCadastro")
    botaoCadastro.addEventListener("click", cadastrarNovoUsuario)  
})
