
console.log('Inicio del programa')

setTimeout(()=> {
    console.log("Primer Timeout")
}, 3000)

setTimeout(()=> {
    console.log("Segundo Timeout")
}, 0)

setTimeout(()=> {
    console.log("Tercer Timeout")
}, 0)

console.log('Fin del programa')

/*
primero se registran todas las funciones
segundo se ejecutan las instrucciones sincronas
las instrucciones asincronas se llevan a otra pila, en esta pila cuando esten listas para ejecutar pasan a otra lista desde donde se van llamando segun el orden de entrada
*/
