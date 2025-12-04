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


    static Nome(nome){

        let nomevalido = true
        for( let i of nome.split(' ').filter(Boolean) ){
            if (!(( i.trim() == i) && ( i[0].toUpperCase() == i[0]))){
                nome  = false
            } 
        }
        return nomevalido
    }

    static CPF(cpf){

        return cpf.length == 11 && !isNaN(cpf)

    }

    static Turma(turma){

        const TURMAS = [2, 3, 4, 5, 6, 7, 8, 9]

        //Caso o primeiro digito seja das turmas acima e os tres primeiros digitos sao numeros
        if (TURMAS.includes(parseInt(turma[0])) && !(isNaN(Number(turma.slice(0, 3))))){
            return true
        } 
        return false
    }

    static Geral(nome, matricula, cpf, senha, confirmarsenha, turma){

        if(!this.Nome(nome)){
            alert("O nome deve ter iniciais minúsculas!")
            return false
        }
        if (!this.ConfirmacaoDaSenha(senha, confirmarsenha)){
            alert("As senhas devem ser iguais!")
            return false
        }
        if (!this.Matricula(matricula)){
            alert("A matrícula deve começar com algum ano e ter 10 dígitos!")
            return false
        }
        if (!this.CPF(cpf)){
            alert("O CPF deve ter 11 dígitos!")
            return false
        }
        if (!this.Turma(turma)){
            alert('A turma deve ter o primeiro dígito referente ao seu curso!')
            return false
        }

        return true
    }

}
