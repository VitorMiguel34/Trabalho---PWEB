import Validacao from "../scripts/Validacao.js";
import Aluno from "../scripts/Aluno.js";
import Professor from "../scripts/Professor.js";

let listaDeAlunos = JSON.parse(localStorage.getItem("listaDeAlunos")) || {};
let listaDeProfessores = JSON.parse(localStorage.getItem("listaDeProfessores")) || {};


// MANIPULAÇÃO DAS TELAS


document.addEventListener("DOMContentLoaded", () => {

    const botaoAluno = document.getElementById("aluno");
    const botaoProfessor = document.getElementById("professor");

    const telaEscolha = document.getElementById("tela-escolha");
    const formAluno = document.getElementById("form-aluno");
    const formProfessor = document.getElementById("form-professor");

    botaoAluno.addEventListener("click", () => {
        localStorage.setItem("escolhaDeLogin", "aluno");
        telaEscolha.classList.add("d-none");
        formAluno.classList.remove("d-none");
    });

    botaoProfessor.addEventListener("click", () => {
        localStorage.setItem("escolhaDeLogin", "professor");
        telaEscolha.classList.add("d-none");
        formProfessor.classList.remove("d-none");
    });

    // eventos de cadastro
    document.getElementById("botaoCadastroAluno")
        .addEventListener("click", cadastrarAluno);

    document.getElementById("botaoCadastroProfessor")
        .addEventListener("click", cadastrarProfessor);
});


// CADASTRO DE ALUNO


function cadastrarAluno(event) {
    event.preventDefault();

    const dados = {
        tipo: "aluno",
        nome: document.getElementById("inputNome").value,
        email: document.getElementById("inputEmail").value,
        usuario: document.getElementById("inputMatricula").value,
        CPF: document.getElementById("inputCPF").value,
        turma: document.getElementById("inputTurma").value,
        senha: document.getElementById("inputSenha").value,
        confirmacaoDaSenha: document.getElementById("inputConfirmacaoSenha").value
    };

    if (!Validacao.Geral(dados)) return;

    let novoAluno = new Aluno(dados);
    listaDeAlunos[novoAluno.usuario] = novoAluno;

    localStorage.setItem("listaDeAlunos", JSON.stringify(listaDeAlunos));
    window.location.href = "../login/login.html";
}


// CADASTRO DE PROFESSOR


function cadastrarProfessor(event) {
    event.preventDefault();

    const dados = {
        tipo: "professor",
        nome: "--",
        email: document.getElementById("inputProfessorEmail").value,
        usuario: document.getElementById("inputProfessorUsuario").value,
        CPF: "--",
        turma: "--",
        senha: document.getElementById("inputSenhaProf").value,
        confirmacaoDaSenha: document.getElementById("inputConfirmacaoSenhaProf").value
    };

    if (!Validacao.Geral(dados)) return;

    let novoProf = new Professor(dados);
    listaDeProfessores[dados.usuario] = novoProf;

    localStorage.setItem("listaDeProfessores", JSON.stringify(listaDeProfessores));
    window.location.href = "../login/login.html";
}
