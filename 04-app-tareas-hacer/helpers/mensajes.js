require('colors')

const mostrarMenu = () => {

    return new Promise((resolve, reject)=>{
        console.clear()
        console.log("===============================".green)
        console.log("     Seleccione una Opcion     ".green)
        console.log("===============================".green)
        console.log("")
        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar Tarea`)
        console.log(`${'7.'.green} Salir`)
        console.log("")
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question("Seleccione una opcion: ", (opcion)=>{
            readline.close()
            resolve(opcion)
        })
    })
}

const pausa = () => {

    return new Promise((resolve, reject)=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (enter)=>{
            readline.close()
            resolve()
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}