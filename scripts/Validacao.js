export default class Validacao{

    static ConfirmacaoDaSenha(senha, confirmacaoDaSenha){
        
        if(senha.trim() === confirmacaoDaSenha.trim()){
            return true
        }
        return false
    }

    static Matricula(matricula){
        if( (matricula.length == 10) && (matricula.slice(0, 3) == '202' )){
            return true 
        } 
        return false
    }

    static Nome(nome){

        let nomeValido = true
        for( let i of nome.split(' ') ){
            if (!(( i.trim() == i) && ( i[0].toUpperCase() == i[0]))){
                nomeValido  = false
            } 
        }
        return nomeValido
    }
}
