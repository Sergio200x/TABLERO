const usuarios = require("./usuarios.js")

function validarUsuario(usuario,password)
{
    const consultarUsuario = usuarios.filter(parametro=>parametro.nombreUsuario===usuario&&parametro.password===password)
    
    if(consultarUsuario.length>0)
    {
        return consultarUsuario[0].nombreUsuario        
        
    }
    else
    {
        return "No existe este usuario"
 
    }
} 


function consultarUser(usuario,password)
{
     if(validarUsuario(usuario,password)===usuario)
     {
        let buscarUsuario = usuarios.filter(parametro=>parametro.nombreUsuario===usuario)
        return buscarUsuario
     } 
     else
     {
         return "Usuario o contraseña invalidos"
     }
       
}

function transferirSaldo(usuario1,password,saldoAtransferir,usuario2)
{      let buscarUsuario2=usuarios.filter(parametro=>parametro.nombreUsuario===usuario2)
        if(validarUsuario(usuario1,password)===usuario1)
    {       
            if(buscarUsuario2.length>0)
            {       
                let buscarUsuario1=consultarUser(usuario1,password)               
                if((consultarUser(usuario1,password)[0].saldo-saldoAtransferir)>=0)
                {
                    buscarUsuario1[0].saldo = buscarUsuario1[0].saldo-saldoAtransferir 
                    buscarUsuario2[0].saldo= buscarUsuario2[0].saldo+saldoAtransferir
                    console.log("Se ha descontado $"+saldoAtransferir+" de su cuenta y se a transferido a "+usuario2
                    +" ,su saldo actual es $"+buscarUsuario1[0].saldo)
                    
                }
                else
                {
                     console.log("Usted no tiene saldo suficiente para realizar esta transferencia")
                 } 
            }
            else    
            {
                console.log("No existe el usuario al que desea transferir dinero")
            }                  
    }
    else
    {
        console.log("Usuario y/o contraseña invalidos")
    }   
}


function agregarSaldo (usuario,password,saldoParaAgregar)
{
    if(validarUsuario(usuario,password)===usuario&&saldoParaAgregar>0)
    {   
        let buscarUsuario = consultarUser(usuario,password)
        buscarUsuario.saldo = buscarUsuario.saldo + saldoParaAgregar
        console.log ("Saldo acreditado exitosamente! su nuevo saldo es: $"+ buscarUsuario[0].saldo)
    }
    else
    {
        console.log("Usuario y/o contraseña invalidos")
    }

}

module.exports={consultarUser,validarUsuario,transferirSaldo,agregarSaldo}

