/*
const heroe = {
    nombre: "Tony",
    apellido: "Stark",
    personaje: "Iroman",
    getNombreCompleto: function(){
        return `${this.nombre} ${this.apellido} ${this.personaje}`
    }
}*/
//lo anterior tambien se puede escribir de la siguiente forma
const heroe = {
    nombre: "Tony",
    apellido: "Stark",
    personaje: "Iroman",
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido} ${this.personaje}`
    }
}
console.log(heroe.getNombreCompleto())
//para no extraer los valores de la siguiente forma
/*
const nombre = heroe.nombre
const apellido = heroe.apellido
const personaje = heroe.personaje*/

//puedo extraer tambien funciones

const {nombre, apellido, personaje, getNombreCompleto} = heroe

console.log(nombre, apellido, personaje, getNombreCompleto)


/**
 puedo tener algo como
 const {nombre, apellido, personaje, getNombreCompleto, edad} = heroe
 edad seria undefined

 puede inicializarse
 const {nombre, apellido, personaje, getNombreCompleto, edad=0} = heroe
 edad es igual a 0

 en el objeto si la propiedad existe de la siguiente forma
 const heroe = {
    nombre: "Tony",
    apellido: "Stark",
    personaje: "Iroman",
    edad: 40,
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido} ${this.personaje}`
    }
}
y hacemos lo siguiente
const {nombre, apellido, personaje, getNombreCompleto, edad=0} = heroe
edad es igual a 40

 */

/*
dentro de los argumentos de una funcion se pueden desestructurar las propiedades que se requieran, las propiedades tambien pueden recibir valores por defecto, por ejemplo
*/

function imprimirVengador({nombre, apellido, edad=0}){
    console.log(`El vengador es ${nombre} ${apellido}`)
}
imprimirVengador(heroe)

/*
ojo, estas variables no son constantes, asi que dentro de la funcion se les puede modificar el valor

La desestructuracion se puede realizar utilizando variables o constantes
const {a,b} = objeto
let {a,b} = objeto

La desestructuracion tambien aplica para arrays
const frutas = ['mango', 'pera']

En vez de hacer
const mango = frutas[0]
const pera = frutas[1]

se facilita de la siguiente forma
const [mango, pera] = frutas

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]


Ignorar algunos valores devueltos
Puedes ignorar los valores de retorno que no te interesan:

function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1


Asignar a nuevos nombres de variable
Una propiedad se puede desempacar de un objeto y asignar a una variable con un nombre diferente al de la propiedad del objeto.

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

Asignar nombres a nuevas variables y proporcionar valores predeterminados
Una propiedad puede ser ambas

Desempacada de un objeto y asignada a una variable con un nombre diferente.
Se le asigna un valor predeterminado en caso de que el valor desempacado sea undefined.
const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5

*/

