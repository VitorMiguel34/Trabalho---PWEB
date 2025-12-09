export default class Validacao {

    static Geral(infoUsuario) {

        if (infoUsuario.tipo === "aluno") {
            return this.ValidarAluno(infoUsuario);
        }
        if (infoUsuario.tipo === "professor") {
            return this.ValidarProfessor(infoUsuario);
        }

        alert("Erro interno: tipo de cadastro inválido!");
        return false;
    }

    static ValidarAluno(info) {

        if (!this.Nome(info.nome)) {
            alert("O nome do aluno deve ter iniciais maiúsculas!");
            return false;
        }
        if (!this.ConfirmacaoDaSenha(info.senha, info.confirmacaoDaSenha)) {
            alert("As senhas devem ser iguais!");
            return false;
        }
        if (!this.Matricula(info.matricula)) {
            return false;
        }
        if (!this.CPF(info.CPF)) {
            alert("O CPF deve ter 11 dígitos numéricos!");
            return false;
        }
        if (!this.Email(info.email)) {
            alert("O email deve possuir um domínio válido!");
            return false;
        }
        if (!this.Turma(info.turma)) {
            alert("A turma deve seguir o padrão [curso][turno][série]!");
            return false;
        }

        return true;
    }

    static ValidarProfessor(info) {

        if (!this.Email(info.email)) {
            alert("O email do professor deve ser válido!");
            return false;
        }
        if (!info.usuario || info.usuario.trim().length < 4) {
            alert("O usuário do professor deve ter pelo menos 4 caracteres!");
            return false;
        }
        if (!this.ConfirmacaoDaSenha(info.senha, info.confirmacaoDaSenha)) {
            alert("As senhas devem coincidir!");
            return false;
        }

        return true;
    }

    static ConfirmacaoDaSenha(senha, confirmacao) {
        return senha.trim() === confirmacao.trim();
    }

    static Matricula(matricula) {
        let listaDeAlunos = JSON.parse(localStorage.getItem("listaDeAlunos")) || {}
        let matriculasExistentes = Object.keys(listaDeAlunos)
        
        if(isNaN(Number(matricula))){
            alert("A matricula so pode ter numeros!")
            return false
        }
        if(matricula.slice(0,3) != "202"){
            alert("A matricula deve começar com 202!")
            return false
        }
        if(matricula.length !== 10){
            alert("A matricula deve ter 10 dígitos!")
            return false
        }
        if(matriculasExistentes.includes(matricula)){
            alert("Ja existe um aluno com essa matricula!")
            return false
        }
        return true
    }

    static Nome(nomeUsuario) {
        let nomevalido = true;

        for (let nome of nomeUsuario.split(" ")) {
            if (!((nome.trim() == nome) && (nome[0].toUpperCase() == nome[0]))) {
                nomevalido = false;
            }
        }
        return nomevalido;
    }

    static CPF(cpf) {
        return cpf.length === 11 && !isNaN(cpf);
    }

    static Email(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    static Turma(turma) {
        const TURNOS = ["1", "2"];
        const SERIES = ["1", "2", "3"];
        const CURSOS = ["2", "3", "4", "5", "6", "7", "9"];

        return (
            turma &&
            CURSOS.includes(turma[0]) &&
            TURNOS.includes(turma[1]) &&
            SERIES.includes(turma[2])
        );
    }
}