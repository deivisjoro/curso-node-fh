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

const getEmpleado = (id)=>{
    
    const promesa = new Promise((resolve, reject)=>{
        const empleado = empleados.find(e => e.id===id)?.nombre    

        if(empleado){
            resolve(empleado)
        }
        else{
            reject(`No existe empleado con id ${id}`)
        }
    })
    return promesa
}

const getSalario = (id)=>{
    
    const promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find(s => s.id===id)?.salario    

        if(salario){
            resolve(salario)
        }
        else{
            reject(`No existe salario para el id ${id}`)
        }
    })
    return promesa
}

const id = 1
/*
getEmpleado(id)
    .then(empleado=>console.log(empleado))
    .catch(error=>console.log(error))

getSalario(id)
    .then(salario=>console.log(salario))
    .catch(error=>console.log(error))
*/

/*getEmpleado(id)
    .then(empleado=>{

        getSalario(id)
        .then(salario=>{

            console.log(`El empleado: ${empleado} tiene un salario de ${salario}`)

        })
        .catch(error=>console.log(error))
    })
    .catch(error=>console.log(error))
*/

//promesas en cadena
let nombre=""
getEmpleado(id)
    .then(empleado=>{
        nombre = empleado
        return getSalario(id)
    })
    .then(salario=>{
        console.log(`El empleado: ${nombre} tiene un salario de ${salario}`)
    })
    .catch(error=>console.log(error))