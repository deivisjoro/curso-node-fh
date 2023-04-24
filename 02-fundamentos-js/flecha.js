
function sumar(a,b){
    return a+b
}

console.log(sumar(5,10))

/*
las funciones pueden recibir valores por defecto
function sumar(a,b=10){
    return a+b
}

console.log(sumar(5))
*/

const adicionar = (a,b) =>{
    return a+b
}

console.log(adicionar(4,7))

/*
Cuando una funcion de flecha tiene una sola instruccion en su cuerpo y es el return puede quedar asi
const adicionar = (a,b) => a+b

const saludar = () => "Hola mundo"

estas funciones tambien reciben parametros por defecto

cuando es un solo parametro se puede omitir los parentesis

const saludar = nombre => `Hola ${nombre}`

las funciones tradicionales manejan el this y las de flecha no, es decir no manejan el mismo scope y la otra diferencia esta en el registro que se realiza de ambas en el stack de operaciones
*/