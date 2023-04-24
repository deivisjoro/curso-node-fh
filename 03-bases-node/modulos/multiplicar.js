const fs = require("fs")

const crearTabla = async (base=1, listar=false, hasta=10)=>{
    let salida = ""

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base*i}\n`    
    }

    if(listar){
        console.log(`==================`.green)
        console.log(`   TABLA DEL ${base}`.green)
        console.log(`==================`.green)
        console.log(salida)
    }
    await fs.writeFile(`./archivos/tabla-${base}.txt`, salida, (error)=>{
        if(error){
            throw error
        }        
    })
    return `El archivo tabla-${base}.txt ha sido generado`

}

module.exports = {
    crearTabla
}