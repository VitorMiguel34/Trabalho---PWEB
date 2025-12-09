export default class Validacao{

    static ConfirmacaoDaSenha(senha, confirmacaoDaSenha){
        
        if(senha.trim() === confirmacaoDaSenha.trim()){
            return true
        }
        return false
    }

    static Matricula(matricula){
        
        if( (matricula.length === 10) && 
            (matricula.slice(0, 3) === '202' ) && 
            (!isNaN(Number(matricula)))){
            return true 
        } 
        return false
        }


    static Nome(nomeUsuario){

        let nomevalido = true

        if (nomeUsuario === ''){
            return false
        }
        for( let nome of nomeUsuario.split(' ')){
            if (!(( nome.trim() == nome) && ( nome[0].toUpperCase() == nome[0]))){
                nomevalido = false
            } 
        }
        return nomevalido
    }

    static CPF(cpf){

        return cpf.length == 11 && !isNaN(cpf)

    }

    static Email(email){

        //Regex que testa se o email tem @().com
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);

    }

    static Turma(turma){

        const TURNOS = ['1', '2']
        const SERIES = ['1', '2', '3']
        const CURSOS = ['2', '3', '4', '5', '6', '7', '9']

        return CURSOS.includes(turma[0]) && TURNOS.includes(turma[1]) && SERIES.includes(turma[2])
    }

    static Geral(infoUsuario){

        if(!this.Nome(infoUsuario['nome'])){
            alert("O nome deve ter iniciais maiúsculas!")
            return false
        }
        if (!this.ConfirmacaoDaSenha(infoUsuario['senha'], infoUsuario['confirmacaoDaSenha'])){
            alert("As senhas devem ser iguais!")
            return false
        }
        if (!this.Matricula(infoUsuario['matricula'])){
            alert("A matrícula deve começar com algum ano e ter 10 dígitos!")
            return false
        }
        if (!this.CPF(infoUsuario['CPF'])){
            alert("O CPF deve ter 11 dígitos!")
            return false
        }
        if (!this.Email(infoUsuario['email'])){
            alert('O email deve ter @ e ter um domínio!')
            return false
        }
        if (!this.Turma(infoUsuario['turma'])){
            alert('A turma deve seguir o padrão [curso][turno][serie]!')
            return false
        }

        return true
    }

}
