export default class Validaçao{

    validarConfirmacaoDaSenha(senha, confirmacaoDaSenha){
    if(senha.trim() === confirmacaoDaSenha.trim()){
        return true
    }
    return false

    }
}
