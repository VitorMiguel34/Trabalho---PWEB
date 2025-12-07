let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios")) || {};

function verificarLogin(){
    let matricula = document.getElementById('matricula').value
    let senha = document.getElementById('senha').value

    if(listaDeUsuarios[matricula] === undefined){
        alert('Não há usuário com essa matrícula!')
        return false
    }
    if((listaDeUsuarios[matricula].senha != senha)){
        alert('Senha incorreta!')
        return false
    }
    return true

}

function direcionar(event){
    if(verificarLogin()){
        event.preventDefault()
        let matricula = document.getElementById('matricula').value
        localStorage.setItem("matricula",matricula)
        window.location.href = "../info/info.html"
    }

}

addEventListener('DOMContentLoaded', () => {
    let botaoLogin = document.getElementById('botaoLogin')
    botaoLogin.addEventListener('click', direcionar)
})