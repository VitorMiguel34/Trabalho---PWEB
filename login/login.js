let listaDeAlunos = JSON.parse(localStorage.getItem("listaDeAlunos")) || {};
let listaDeProfessores = JSON.parse(localStorage.getItem("listaDeProfessores")) || {};

function verificarLogin(){
    let identificador = document.getElementById('identificador').value
    let senha = document.getElementById('senha').value
    let tipoDeIdentificador = localStorage.getItem("escolhaDeLogin")

    if (tipoDeIdentificador === 'aluno'){ 

        if(listaDeAlunos[identificador] === undefined){
            alert('Não há aluno com essa matrícula!')
            return false
        }
        if((listaDeAlunos[identificador].senha != senha)){
            alert('Senha incorreta!')
            return false
        }
        return 'aluno'

    } else {

        if(listaDeProfessores[identificador] === undefined){
            alert('Não há professor com esse usuário!')
            return false
        }
        if((listaDeAlunos[identificador].senha != senha)){
            alert('Senha incorreta!')
            return false
        }
        return 'professor'

    }
}

function direcionar(event){

    event.preventDefault()

    let matricula = document.getElementById('identificador').value

    let condição = verificarLogin()

    if(condição === 'aluno'){
        
        window.location.href = "../info/info.html"
        localStorage.setItem("matricula",matricula)

    } else if (condição === 'professor'){
        
        window.location.href = "../professor/professor.html"
        localStorage.setItem("matricula",matricula)

    }

}

addEventListener('DOMContentLoaded', () => {
    let botaoLogin = document.getElementById('botaoLogin')
    botaoLogin.addEventListener('click', direcionar)
})