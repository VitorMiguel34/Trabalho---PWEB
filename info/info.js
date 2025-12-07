import Usuario from '../scripts/Usuario.js'

const MATRICULA = localStorage.getItem("matricula") 
let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios"))

//Objeto com os dados do usuario, mas sem os metodos!!!
let dadosUsuario = JSON.parse(localStorage.getItem("dadosDoUsuario")) || listaDeUsuarios[MATRICULA]

const USUARIO = new Usuario(dadosUsuario)

function carregarNotasDoUsuario(){
    let materiasDoUsuario = USUARIO.boletim.buscarMaterias()
    let caixasNotas, caixaDaMedia, nota, notasDaMateria, mediaDaMateria;

    for(let materia of materiasDoUsuario){
        caixasNotas = document.getElementsByClassName(`nota-${materia}`)
        notasDaMateria = USUARIO.boletim.buscarNotasDaMateria(materia)

        for(let indiceNota in notasDaMateria){
            nota = notasDaMateria[indiceNota]
            caixasNotas[indiceNota].innerText = nota 
        }
        mediaDaMateria = USUARIO.boletim.calcularMediaDaMateria(materia)
        caixaDaMedia = document.getElementById(`media-${materia}`)

        if(mediaDaMateria >= 6){
            caixaDaMedia.style.color = "green"
        }
        else{
            caixaDaMedia.style.color = "red"
        }

        caixaDaMedia.innerText = mediaDaMateria.toFixed(2)
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