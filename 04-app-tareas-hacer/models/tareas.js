const Tarea = require("./tarea")

class Tareas{

    listado = {}

    constructor(){
        this.listado = {}
    }

    get listadoArray(){
        const result = []
        Object.keys(this.listado).forEach(key=>{
            const tarea = this.listado[key]
            result.push(tarea)
        })
        return result
    }
    
    crearTarea(descripcion=''){
        const tarea = new Tarea(descripcion)
        this.listado[tarea.id] = tarea
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(element => {
            this.listado[element.id] = element  
        })
    }

    listadoCompleto(){
        console.log()
        this.listadoArray.forEach((element, index) => {
            const indice = `${index+1}.`.green
            const {descripcion, completadoEn} = element
            const estado = (completadoEn) 
                            ? 'Completada'.green 
                            : 'Pendiente'.red  
            console.log(`${indice} ${descripcion} :: ${estado}`)
        })
    }

    listarPendientes(){
        console.log()
        let indice = 0
        this.listadoArray.forEach((element) => {
            
            const {descripcion, completadoEn} = element
            if(!completadoEn){
                indice++
                const estado = 'Pendiente'.red 
                console.log(`${(indice+'.').green} ${descripcion} :: ${estado}`)
            }
        })
    }

    listarCompletas(){
        console.log()
        let indice = 0
        this.listadoArray.forEach((element) => {
            
            const {descripcion, completadoEn} = element
            if(completadoEn){
                indice++
                const estado = (completadoEn+'').green 
                console.log(`${(indice+'.').green} ${descripcion} :: ${estado}`)
            }
        })
    }

    borrarTarea(id=''){
        if(this.listado[id]){
            delete this.listado[id]
        }
    }

    toggleCompletadas(ids=[]){

        ids.forEach(id => {
            const tarea = this.listado[id]
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArray.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                const task = this.listado[tarea.id]
                task.completadoEn = null    
            }   
        })

    }

}

module.exports = Tareas