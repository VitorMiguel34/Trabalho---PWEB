
export default class Validaçao{

    validarConfirmacaoDaSenha(senha, confirmacaoDaSenha){

        if(senha.trim() === confirmacaoDaSenha.trim()){
            return true
        }
        return false
        }

    validarMatricula(matricula){

        if( (matricula.length == 10) && (matricula.slice(0, 3) == '202' )){
            return true 
        } 
        return false
        }

    validarNome(nome){

        let validar = true
        for( let i of nome.spllit(' ') ){

            if (!(( i.trim() == i) && ( i[0].toUpperCase() == i[0]))){
                validar = false
            } 
            return validar
        }
    }

    validar
}
