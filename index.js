let argumento = process.argv[2]
let usuario = process.argv[3]
let contraseña =process.argv[4]
let saldo= process.argv[5]
let usuario2= process.argv[6]
let funciones = require("./funciones.js");

switch (argumento,usuario.tostring(),contraseña.tostring(),saldo,usuario2.tostring() ) 
{
    case "consultar": console.log(funciones.consultarUser(usuario,contraseña)) 
        break
    case "transferir": funciones.transferirSaldo(usuario.tostring(),contraseña.tostring(),saldo,usuario2.tostring())
        break
    case "agregarSaldo": funciones.agregarSaldo(usuario.tostring(),contraseña.tostring(),saldo)
        break
    default: console.log("No entiendo que queres hacer")    
}
