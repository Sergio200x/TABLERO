let argumento = process.argv[2]
let usuario = process.argv[3]
let contraseña =process.argv[4]
let saldo= process.argv[5]
let usuario2= process.argv[6]
let funciones = require("./funciones.js");

switch (argumento) 
{
    case "consultar": console.log(funciones.consultarUser(usuario,contraseña)) 
        break
    case "transferir": funciones.transferirSaldo(usuario,contraseña,saldo,usuario2)
        break
    case "agregarSaldo": funciones.agregarSaldo(usuario,contraseña,saldo)
        break
    default: console.log("No entiendo que queres hacer")    
}
