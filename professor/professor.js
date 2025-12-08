import Aluno from '../scripts/Aluno.js';

let listaDeAlunos = JSON.parse(localStorage.getItem("listaDeAlunos"))

function carregarListaDeAlunos(){
    const lista = document.getElementById("lista-de-alunos")
    let aluno, caixaAluno;
    for(let matriculaDoAluno of Object.keys(listaDeAlunos)){
        aluno = listaDeAlunos[matriculaDoAluno]
        caixaAluno = `
            <li id="${aluno.matricula}" class="list-group-item d-flex justify-content-between align-items-center">
                <div class="col-8">
                    <span class="fw-bold me-2">Matrícula: ${aluno.matricula}</span>
                    <span>${aluno.nome}</span>
                </div>
                <div class="col-4 text-end">
                    <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#lancarNotaModal"
                    data-matricula="${aluno.matricula}"
                    data-nome=${aluno.nome}>
                        <i class="bi bi-pencil-fill me-1"></i> Lançar Nota
                    </button>
                </div>
            </li>
        `
        lista.innerHTML += caixaAluno
    }
}

function carregarDadosDoAlunoNoModal(event){
    //Isso retorna o botao que foi clicado, ou seja, oq lancou o evento
    const botao = event.relatedTarget; 
        
    let nomeAluno = botao.getAttribute('data-nome');
    let matriculaAluno = botao .getAttribute('data-matricula');
    
    const tituloDoModal = document.getElementById("lancarNotaModalLabel")
    tituloDoModal.textContent = `Lançar Nota para ${nomeAluno}`;

    let dadosAluno= listaDeAlunos[matriculaAluno]
    const aluno = new Aluno(dadosAluno)
    const select = document.getElementById("materiaSelect")
    select.innerHTML = "<option selected disabled value=''>Selecione...</option>"
    
    for(let materia of aluno.boletim.buscarMaterias()){
        select.innerHTML += `
            <option value="${materia}">${materia}</option>
        `
    }

    document.getElementById("lancarNotaModal").setAttribute("data-matricula",aluno.matricula)
}

function atualizarBoletimDoALuno(){
    let materia = document.getElementById("materiaSelect").value 
    let nota = parseFloat(document.getElementById("inputNota").value)
    if(nota < 0 || nota > 10){
        alert("A nota deve estar entre 0 e 10")
        return null
    }
    
    let matriculaAluno = document.getElementById("lancarNotaModal").getAttribute("data-matricula")
    let dadosDoAluno = listaDeAlunos[matriculaAluno]
    const aluno = new Aluno(dadosDoAluno)

    let notasDaMateria = aluno.boletim.buscarNotasDaMateria(materia)
    if(notasDaMateria.length == 3){
        alert("Ja tem todas as notas na materia!")
    }
    else{
        aluno.boletim.adicionarNotaDaMateria(nota,materia)
        listaDeAlunos[matriculaAluno] = aluno 
        localStorage.setItem("listaDeUsuarios",JSON.stringify(listaDeAlunos))
        alert("Nota lançada!")
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const lancarNotaModal = document.getElementById('lancarNotaModal');
    lancarNotaModal.addEventListener('show.bs.modal', carregarDadosDoAlunoNoModal)

    const botoaSubmitNota = document.getElementById("submitButton")
    botoaSubmitNota.addEventListener("click", atualizarBoletimDoALuno)
});

carregarListaDeAlunos()