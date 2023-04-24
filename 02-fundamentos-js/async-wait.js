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

const id = 13
const getInfoUsuario = async (id) => {

    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empleado ${empleado} es ${salario}`        
    } 
    catch (error) {
        throw error                
    }

    
}


getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(error=>console.log(error))