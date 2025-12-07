import Usuario from '../scripts/Usuario.js'
import Validacao from '../scripts/Validacao.js'

let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios")) || {}

function pegarInformacoesDoUsuario(){

    let nomeUsuario = document.getElementById("inputNome").value 
    let emailUsuario = document.getElementById("inputEmail").value 
    let matriculaUsuario = document.getElementById("inputMatricula").value 
    let cpfUsuario = document.getElementById("inputCPF").value 
    let senhaUsuario = document.getElementById("inputSenha").value 
    let confirmacaoSenhaUsuario = document.getElementById("inputConfirmacaoSenha").value 
    let turmaUsuario = document.getElementById('inputTurma').value

    let informacoesDoUsuario = {
        "nome": nomeUsuario,
        "email": emailUsuario,
        "matricula": matriculaUsuario,
        "CPF": cpfUsuario,
        "senha": senhaUsuario,
        "confirmacaoDaSenha": confirmacaoSenhaUsuario,
        "turma": turmaUsuario
    }
    return informacoesDoUsuario
}

function cadastrarNovoUsuario(event){

    //Bloqueia que a página reinicie ao clicar no botão
    event.preventDefault()

    let infosUsuario = pegarInformacoesDoUsuario()

    let valido = Validacao.Geral(infosUsuario)
    if (valido){

        let novoUsuario = new Usuario(infosUsuario)

        listaDeUsuarios[novoUsuario.matricula] = novoUsuario

        localStorage.setItem("listaDeUsuarios",JSON.stringify(listaDeUsuarios))
        
        window.location.href = '../login/login.html'
        //Direciona para info ao efetuar cadastro
    } 
    
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastro = document.getElementById("botaoCadastro")
    botaoCadastro.addEventListener("click", cadastrarNovoUsuario)  
})
