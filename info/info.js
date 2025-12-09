import Aluno from '../scripts/Aluno.js'

const MATRICULA = localStorage.getItem("matricula") 
let listaDeAlunos = JSON.parse(localStorage.getItem("listaDeAlunos"))

//Objeto com os dados do usuario, mas sem os metodos!!!
let dadosUsuario = listaDeAlunos[MATRICULA]

const USUARIO = new Aluno(dadosUsuario)

function carregarBoletim(){
    let boletim = document.getElementById("boletim")
    for(let materia of USUARIO.boletim.buscarMaterias()){
        boletim.innerHTML += `
            <tr>
                <th scope="row">${materia}</th>
                <td class="nota-${materia} text-center"></td>
                <td class="nota-${materia} text-center"></td>
                <td class="nota${materia} text-center"></td>
                <td class="text-center fw-bold" id="media-${materia}"></td>
                <td class="text-center"><span class="badge rounded-pill fw-normal" id="situacao-${materia}"></span></td>
            </tr>`
    }
}

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
carregarBoletim()
carregarNotasDoUsuario()
