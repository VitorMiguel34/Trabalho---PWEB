import Usuario from '../scripts/Usuario.js'

const MATRICULA = localStorage.getItem("matricula") 
let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios"))

//Objeto com os dados do usuario, mas sem os metodos!!!
let dadosUsuario = JSON.parse(localStorage.getItem("dadosDoUsuario")) || listaDeUsuarios[MATRICULA]

const USUARIO = new Usuario(dadosUsuario)

function carregarSituacaoDaMateria(media,materia){
    let caixaSituacaoDaMateria = document.getElementById(`situacao-${materia}`)
    let corDoFundo = (media >= 6) ? "green":"red"
    let texto = (media >= 6) ? "Aprovado": "Reprovado"
    caixaSituacaoDaMateria.style.backgroundColor = corDoFundo
    caixaSituacaoDaMateria.innerText = texto
}

function carregarMediaDaMateria(media,materia){
    let caixaMediaDaMateria = document.getElementById(`media-${materia}`)
    let corDoTexto = (media >= 6) ? "green": "red"
    caixaMediaDaMateria.style.color = corDoTexto
    caixaMediaDaMateria.innerText = media
}

function carregarNotasDoUsuario(){
    let materiasDoUsuario = USUARIO.boletim.buscarMaterias()
    let caixasNotas, nota, notasDaMateria, mediaDaMateria;

    for(let materia of materiasDoUsuario){
        caixasNotas = document.getElementsByClassName(`nota-${materia}`)
        notasDaMateria = USUARIO.boletim.buscarNotasDaMateria(materia)

        for(let indiceNota in notasDaMateria){
            nota = notasDaMateria[indiceNota]
            caixasNotas[indiceNota].innerText = nota.toFixed(2)
        }
        mediaDaMateria = USUARIO.boletim.calcularMediaDaMateria(materia).toFixed(2)
        if(notasDaMateria.length === 3){
            carregarMediaDaMateria(mediaDaMateria, materia)
            carregarSituacaoDaMateria(mediaDaMateria, materia)
        }
    }
}

function carregarInformacoesDoUsuario(){
    document.getElementById("nomeCompletoUsuario").innerText = USUARIO.nome
    document.getElementById("matriculaUsuario").innerText = USUARIO.matricula
    document.getElementById("turmaUsuario").innerText = USUARIO.turma
    document.getElementById("emailUsuario").innerText = USUARIO.email
}

carregarInformacoesDoUsuario()
carregarNotasDoUsuario()
localStorage.setItem("dadosDoUsuario",JSON.stringify(USUARIO));