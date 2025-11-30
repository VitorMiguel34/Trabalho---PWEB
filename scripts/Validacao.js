export default function validarConfirmacaoDaSenha(senha, confirmacaoDaSenha){
    if(senha.trim() === confirmacaoDaSenha.trim()){
        return true
    }
    return false
}
