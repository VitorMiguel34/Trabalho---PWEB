const USUARIO = JSON.parse(localStorage.getItem("usuarioLogado") )

document.getElementById("nomeCompletoUsuario").innerText = USUARIO.nome
document.getElementById("matriculaUsuario").innerText = USUARIO.matricula