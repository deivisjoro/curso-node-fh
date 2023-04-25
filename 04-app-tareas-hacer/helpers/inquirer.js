require('colors')
const inquirer = require('inquirer')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: 2,
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: 3,
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: 4,
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: 6,
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: 7,
                name: `${'7.'.green} Salir`
            },
        ]
    }
]

const inquirerMenu = async ()=>{

    console.clear()
    console.log("===============================".green)
    console.log("     Seleccione una Opcion     ".white)
    console.log("===============================".green)

    const { opcion } = await inquirer.prompt(preguntas)
    return opcion
}

const pausa = async () => {
    const pregunta = [
        {
            type:'input', 
            name: 'tecla', 
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(pregunta)
}

const leerInput = async (mensaje)=>{
    const pregunta = [
        {
            type:'input', 
            name: 'entrada', 
            message: mensaje,
            validate(value){
                if(value.trim().length===0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    const {entrada} = await inquirer.prompt(pregunta)
    return entrada
}

const listadoTareasEliminar = async ( tareas = [] )=>{

    const choices = tareas.map((tarea, i) =>{
        const indice = `${i+1}.`.green
        return {
            value: tarea.id,
            name: `${indice} ${tarea.descripcion}`
        }
    })

    choices.push(new inquirer.Separator())
    const ultimo = choices.length
    choices.push({
        value: ultimo,
        name: `${(ultimo+'.').green} Cancelar [No eliminar]`
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione la tarea a eliminar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas)
    return id

}

const mostrarListadoChecklist = async ( tareas = [] )=>{

    const choices = tareas.map((tarea, i) =>{
        const indice = `${i+1}.`.green
        return {
            value: tarea.id,
            name: `${indice} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione las tareas para cambiar su estado',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta)
    return ids

}

const confirmar = async (mensaje='')=>{
    const pregunta = [
        {
            type: 'confirm',
            name: 'respuesta',
            message: mensaje
        }
    ]
    const {respuesta} = await inquirer.prompt(pregunta)
    return respuesta

}

module.exports = {
    inquirerMenu,
    pausa, 
    leerInput,
    listadoTareasEliminar,
    confirmar,
    mostrarListadoChecklist
}
