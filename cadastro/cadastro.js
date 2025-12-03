import Usuario from '../scripts/Sistema.js'
import Validaçao from '../scripts/Validacao.js'

//Tenta pegar a lista de usuarios na local storage, se nao existir cria uma lista vazia
let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios")) || {}


function pegarInformacoesDoUsuario(){
    let nomeUsuario = document.getElementById("inputNome").value 
    let emailUsuario = document.getElementById("inputEmail").value 
    let matriculaUsuario = document.getElementById("inputMatricula").value 
    let cpfUsuario = document.getElementById("inputCPF").value 
    let senhaUsuario = document.getElementById("inputSenha").value 
    let confirmacaoSenhaUsuario = document.getElementById("inputConfirmacaoSenha").value 

    let informacoesDoUSuario = {
        "nome": nomeUsuario,
        "email": emailUsuario,
        "matricula": matriculaUsuario,
        "CPF": cpfUsuario,
        "senha": senhaUsuario,
        "confirmacaoDaSenha": confirmacaoSenhaUsuario,
    }
    return informacoesDoUSuario
}

function cadastrarNovoUsuario(){

    let infosUsuario = pegarInformacoesDoUsuario()

    let novoUsuario = new Usuario(
        infosUsuario["nome"],
        infosUsuario["email"],
        infosUsuario["matricula"],
        infosUsuario["CPF"],
        infosUsuario["senha"])
        

        listaDeUsuarios[novoUsuario.matricula] = novoUsuario

        //Guarda a lista de usuarios atualizada no localStorage
        localStorage.setItem("listaDeUsuarios",JSON.stringify(listaDeUsuarios))

        window.location.href = '../login/login.html'
        //Direciona para info ao efetuar cadastro
    
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastro = document.getElementById("botaoCadastro")
    botaoCadastro.addEventListener("click", cadastrarNovoUsuario)  
})
