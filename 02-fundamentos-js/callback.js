/*
Es una funcion que se pasa como argumento a otra funcion, y esta ultima la ejecutara cuando sea necesario, generalmente se utiliza para devolverle un valor y quien llame a la funcion1, toma el valor por el callback y ejecuta una operacion

funcion2 llama a funcion1, funcion1 realiza una operacion y cuando tiene el resultado lo pasa al callback que ella tiene en sus argumentos, funcion2 al tener el valor del callback continua con otras operaciones

*/
const getUsuarioById = (id, callback) => {

    const user = {
        //id:id darle a una propiedad el valor de una variable que tiene el mismo nombre en ES6 es redundante, asi que quedaria asi
        id,
        nombre: "Deivis"
    }

    setTimeout(()=>{
        callback(user)
    }, 1500)

}

getUsuarioById(10, (usuario)=>{
    //aqui podemos continuar con acciones apenas se tenga la info de usuario y se realiza de forma asincrona
    console.log(usuario)

})
