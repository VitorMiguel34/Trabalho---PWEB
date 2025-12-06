export default class Boletim{
    constructor(){
        this.notas = new Map()
        this.notas.set("matematica",[])
        this.notas.set("portugues",[])
        this.notas.set("fisica",[])
    }

    adicionarNotaDaMateria(nota,materia){
        let notas = this.notas.get(materia)
        notas.push(nota)
        this.notas.set(materia, notas)
    }

    buscarNotasDaMateria(materia){
        return this.notas.get(materia)
    }

    buscarMaterias(){
        return this.notas.keys()
    }
    
    calcularMediaDaMateria(materia){
        let notasDaMateria = this.notas.get(materia)
        let somaNotas = 0
        for(let nota of notasDaMateria){
            somaNotas += 3
        }
        let media = somaNotas/notasDaMateria.length
        return media
    }
}
