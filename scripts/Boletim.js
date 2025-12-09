export default class Boletim{
    constructor(boletimDoUsuario = null){
        if(boletimDoUsuario === null){
            this.notas = {
                "Artes": [],
                "Biologia": [],
                "Educaçāo Física": [],
                "Filosofia": [],
                "Física": [],
                "Geografia": [],
                "História": [],
                "Lingua Inglesa": [],
                "Lingua portuguesa": [],
                "Matemática": [],
                "Química": [],
                "Sociologia": []   
            }  
        }
        else{
            this.notas = {}
            for(let materia of Object.keys(boletimDoUsuario)){
                this.notas[materia] = boletimDoUsuario[materia]
            }
        }

    }

    adicionarNotaDaMateria(nota,materia){
        let notas = this.notas[materia]
        notas.push(nota)
        this.notas[materia] = notas
    }

    calcularMediaDaMateria(materia){
        let notasDaMateria = this.buscarNotasDaMateria(materia)
        if(notasDaMateria.length === 0){
            return 0
        }

        let somaNotas = 0
        for(let nota of notasDaMateria){
            somaNotas += nota
        }
        let media = somaNotas/3
        return media
    }

    buscarNotasDaMateria(materia){
        return this.notas[materia]
    }

    buscarMaterias(){
        return Object.keys(this.notas)
    }
}
