
const nombre = "Iroman"
const real = "Tony Stark"

const normal = nombre + " " + real
console.log(normal)

const template1 = `Valor de la variable`
console.log(template1)

const template2 = `El valor de la suma de 2 y 4 es ${2+4}`
console.log(template2)

const template3 = `${nombre} ${real}`
console.log(template3)

console.log(normal===template3) //imprime true

template4 = `El nombre es ${normal}`
console.log(template4)

template5 = `Este es
un contenido
multimedia`
console.log(template5)

const html = `
    <h1>Titulo del bloque</h1>
    <p>
        Contenido del parrafo
    </p> 
    <p>El personaje es ${nombre}</p>
`
console.log(html) //al principio se genera un salto de linea porque dentro del template asi se escribio

/*
Los template string o template literal permiten hacer inyeccion o interpolacion de valores y expresiones de js dentro de una cadena, permite la concatenacion de una forma mas sencilla
Esta sintaxis permite el contenido multilinea

*/
