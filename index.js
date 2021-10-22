let argumento = process.argv[3]
let usuario = process.argv[4]
let contraseña =process.argv[5]
let saldo= process.argv[6]
let usuario2= process.argv[7]

let funciones = require("./funciones.js");

switch (argumento,usuario,contraseña,saldo,usuario2) 
{
    case "consultar": console.log(funciones.consultarUser(usuario,contraseña)) 
        break
    case "transferir": funciones.transferirSaldo(usuario.tostring(),contraseña.tostring(),saldo,usuario2.tostring())
    break
    case "agregarSaldo": //cargar salgo en la cuenta del usuario
    break

}
