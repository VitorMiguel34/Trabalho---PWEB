const USUARIO = JSON.parse(localStorage.getItem("usuarioLogado") )

function carregarNotasDoUsuario(){
    let materiasDoUsuario = USUARIO.boletim.buscarMaterias()
    let caixasNotas, somaNotas, nota, notasDaMateria, mediaDaMateria;

    for(let materia of materiasDoUsuario){
        caixasNotas = document.getElementsByClassName(`nota-${materia}`)
        notasDaMateria = USUARIO.boletim.buscarNotasDaMateria(materia)

        if(notasDaMateria.length === 0){
            continue
        }

        somaNotas = 0;

        for(let indiceNota in notasDaMateria){
            nota = notasDaMateria[indiceNota]
            caixasNotas[indiceNota].textContent = nota 
            somaNotas += nota
        }
        
        mediaDaMateria = somaNotas/notasDaMateria.length
        document.getElementById(`media-${materia}`).innerText = mediaDaMateria
    }
}

function carregarInformacoesDoUsuario(){
    document.getElementById("nomeCompletoUsuario").innerText = USUARIO.nome
    document.getElementById("matriculaUsuario").innerText = USUARIO.matricula
    document.getElementById("cursoUsuario").innerText = USUARIO.curso
    document.getElementById("turmaUsuario").innerHTML = USUARIO.serie
}

carregarInformacoesDoUsuario()
carregarNotasDoUsuario()