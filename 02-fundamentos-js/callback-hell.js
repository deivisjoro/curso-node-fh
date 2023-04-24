/*
infierno de los callback, un callback dentro de otro y este dentro de otro, y asi sucesivamente, lo cual se convierte en algo dificil de manejar cuando crece bastante
Aqui podemos hacer referencia al meme de street fighter
*/

const empleados = [
    {
        id: 1,
        nombre: 'Deivis'
    },
    {
        id: 2,
        nombre: 'Liam'
    },
    {
        id: 3,
        nombre: 'Alejandro'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1200
    },
    {
        id: 2,
        salario: 3100
    }
]

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id===id)
    if(empleado){
        callback(null, empleado)
    }
    else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback)=>{
    const salario = salarios.find(s => s.id===id)
    if(salario){
        callback(null, salario)
    }
    else{
        callback(`No existe salario para el id ${id}`)
    }
}

const id = 1
/*
getEmpleado(id, (error, empleado)=>{
    if(error){
        return console.log(error)
    }

    console.log(empleado)
})

getSalario(id, (error, salario)=>{
    if(error){
        return console.log(error)
    }

    console.log(salario) 
})
*/

getEmpleado(id, (error, empleado)=>{
    if(error){
        return console.log(error)
    }

    getSalario(id, (error, salario)=>{
        if(error){
            return console.log(error)
        }
    
        console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario.salario}`) 
    })
})
