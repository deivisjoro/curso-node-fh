require("colors")

const argv = require('./config/yargs')
const { crearTabla } = require('./modulos/multiplicar')

console.clear()

// console.log(process.argv)
// const [, , arg3='--base=5'] = process.argv
// const [, base=5] = arg3.split("=")

const { base, listar, hasta } = argv

crearTabla(base, listar, hasta)
    .then(msg=>console.log(msg.rainbow))
    .catch(error=>console.log(error.red))
//console.log("mensaje en color verde".green)
