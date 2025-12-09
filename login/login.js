let listaDeAlunos = JSON.parse(localStorage.getItem("listaDeAlunos")) || {};
let listaDeProfessores = JSON.parse(localStorage.getItem("listaDeProfessores")) || {};

function verificarLogin(){
    let identificador = document.getElementById('identificador').value
    let senha = document.getElementById('senha').value
    let tipoDeIdentificador = localStorage.getItem("escolhaDeLogin")

    if (tipoDeIdentificador === 'aluno'){ 

        if(!Object.keys(listaDeAlunos).includes(identificador)){
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
        if((listaDeProfessores[identificador].senha != senha)){
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

    let botaoVoltar = document.getElementById("botaoVoltar")
    botaoVoltar.addEventListener('click',voltarParaEscolha)

    let listaDeBotaoAvancarLogin = document.getElementsByClassName("botaoAvancarLogin")
    for(let botao of listaDeBotaoAvancarLogin){
        botao.addEventListener('click',avancarParaLogin)
    }
})

const telaEscolha = document.getElementById('tela-escolha');
const telaFormulario = document.getElementById('tela-formulario');

const inputIdentificador = document.getElementById('identificador');
const labelIdentificacao = document.getElementById('label-identificacao');
const titulo = document.getElementById('titulo-dinamico');

function avancarParaLogin(event) {
    const botaoDeLoginClicado = event.currentTarget
    let tipo = botaoDeLoginClicado.id

    telaEscolha.classList.add('d-none');

    localStorage.setItem('escolhaDeLogin', tipo)

    telaFormulario.classList.remove('d-none');
    telaFormulario.classList.add('fade-in');

    if (tipo === 'aluno') {
        titulo.innerText = "Login Aluno";
        labelIdentificacao.innerText = "Matrícula";
        inputIdentificador.placeholder = "Digite sua matrícula";
        inputIdentificador.setAttribute('maxlength', '10');
    } else {
        titulo.innerText = "Login Professor";
        labelIdentificacao.innerText = "Usuário";
        inputIdentificador.placeholder = "Digite seu usuário";
        inputIdentificador.removeAttribute('maxlength');
    }
}

function voltarParaEscolha() {
    telaFormulario.classList.add('d-none');
    telaEscolha.classList.remove('d-none');
    telaEscolha.classList.add('fade-in');
    
    inputIdentificador.value = '';
    document.getElementById('senha').value = '';
}