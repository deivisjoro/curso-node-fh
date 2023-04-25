require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquirerMenu, pausa, leerInput, listadoTareasEliminar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer')
const Tareas = require('./models/Tareas')

const main = async () => {
    
    const tareas = new Tareas()
    const tareasDB = leerDB()
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }

    let opcion = 0
    do{
        opcion = await inquirerMenu()
        
        switch (opcion) {
            case 1: 
                const descripcion = await leerInput('Descripcion:')
                tareas.crearTarea(descripcion)
            break;

            case 2: tareas.listadoCompleto(); break;

            case 3: tareas.listarCompletas(); break;

            case 4: tareas.listarPendientes(); break;

            case 5: 
                const ids = await mostrarListadoChecklist(tareas.listadoArray);   
                tareas.toggleCompletadas(ids)           
            break;

            case 6: 
                const id = await listadoTareasEliminar(tareas.listadoArray) 
                if(id!==(tareas.listadoArray.length+1)){
                    const confirm = await confirmar('¿Esta seguro de eliminar la tarea?')  
                    
                    if(confirm){
                        tareas.borrarTarea(id)
                        console.log('La tarea ha sido eliminada'.bgWhite.black)
                    }
                }
            break;
        }
        guardarDB(tareas.listadoArray)
        if(opcion!==7) await pausa()

    }while(opcion!==7)
}

main()