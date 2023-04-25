require('colors')

const { mostrarMenu, pausa } = require('./helpers/mensajes')

console.clear()

const main = async () => {
    let opcion = ''
    do{
        opcion = await mostrarMenu()

        if(opcion!=='7') await pausa()
        
    }while(opcion!=='7')
}

main()