const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar a generar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Bandera para definir si se muestra por consola la tabla a generar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Definir el limite superior de la tabla a generar'
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'ERROR: La base tiene que ser un numero'.red
        }

        if(isNaN(argv.h)){
            throw 'ERROR: El limite h tiene que ser un numero'.red
        }
        return true
    })
    .argv

module.exports = argv