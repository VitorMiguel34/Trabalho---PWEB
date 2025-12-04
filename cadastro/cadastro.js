import Usuario from '../scripts/Sistema.js'
import Validacao from '../scripts/Validacao.js'

//Tenta pegar a lista de usuarios na local storage, se nao existir cria uma lista vazia
let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios")) || {}


function pegarInformacoesDoUsuario(){
    let nomeUsuario = document.getElementById("inputNome").value 
    let emailUsuario = document.getElementById("inputEmail").value 
    let matriculaUsuario = document.getElementById("inputMatricula").value 
    let cpfUsuario = document.getElementById("inputCPF").value 
    let senhaUsuario = document.getElementById("inputSenha").value 
    let confirmacaoSenhaUsuario = document.getElementById("inputConfirmacaoSenha").value 
    let turmaUsuario = document.getElementById("inputTurma").value
    let serieUsuario = document.getElementById("escolhaSerie").value
    let cursoUsuario = document.getElementById("escolhaCurso").value

    let informacoesDoUSuario = {
        "nome": nomeUsuario,
        "email": emailUsuario,
        "matricula": matriculaUsuario,
        "CPF": cpfUsuario,
        "senha": senhaUsuario,
        "confirmacaoDaSenha": confirmacaoSenhaUsuario,
        "turma": turmaUsuario,
        "serie": serieUsuario,
        "curso": cursoUsuario
    }
    return informacoesDoUSuario
}

function cadastrarNovoUsuario(){

    let infosUsuario = pegarInformacoesDoUsuario()

    let valido = true

    valido = Validacao.Geral(
        infosUsuario["nome"],
        infosUsuario["matricula"],
        infosUsuario["CPF"],
        infosUsuario["senha"],
        infosUsuario["confirmacaoDaSenha"],
        infosUsuario["turma"]
    )

    if (valido){
    //Esse bloco para baixo deverá passar pelas verificações
        let novoUsuario = new Usuario(
            infosUsuario["nome"],
            infosUsuario["email"],
            infosUsuario["matricula"],
            infosUsuario["CPF"],
            infosUsuario["senha"],
            infosUsuario["turma"],
            infosUsuario["serie"],
            infosUsuario["curso"])
        
            listaDeUsuarios[novoUsuario.matricula] = novoUsuario

            //Guarda a lista de usuarios atualizada no localStorage
            localStorage.setItem("listaDeUsuarios",JSON.stringify(listaDeUsuarios))

            alert('Usuário Cadastrado')

            window.location.href = '../login/login.html'
            //Direciona para info ao efetuar cadastro

    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastro = document.getElementById("botaoCadastro")
    botaoCadastro.addEventListener("click", cadastrarNovoUsuario)  
})
