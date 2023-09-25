let edadUsuario = parseInt(prompt('Ingrese su edad:'));
let usuario;
let contraseña;
let menu;
let saldo = 50000;
let ingresar;
let retirar;
let confirmar;

if( edadUsuario >= 18 ){
        
        while(true){
                menu = parseInt(prompt(`Bienvenida/o ! elija la operacion que desee realizar: 
                \n 1-Ver saldo \n 2-Ingresar Dinero \n 3-Retirar Dinero \n 4-Hacer Transferencia \n 5-Salir`));
                
                        switch(menu){
                                case 1: 
                                        document.write(`Su saldo es de: ${saldo}`)
                                break;
                
                                case 2: 
                                        ingresar = parseInt(prompt('Ingrese el monto:'));
                
                                        document.write(`Su monto actual es de: ${ingresar + saldo}`)
                                break;
                
                                case 3: 
                                        retirar = parseInt(prompt(`Ingrese el monto que desee retirar`))
                                        
                                        if( retirar <= saldo){
                                                document.write(`Retiro EXITOSO ! Su monto actual es de: ${saldo - retirar}`)
                                        }else{
                                                alert('El monto que desea ingresar supera su saldo, vuelva a intentarlo')
                                        }
                                break;
                
                                case 4: 
                                        document.write(`transferir`)
                                break;
                
                                case 5: 
                                        alert('ADIOS')
                                break;
                        }  
                        if(confirm("Desea continuar") === false) {
                                break;
                        }
        }                       
}else{
        alert('Usted es menor de edad, por lo tanto no puede ingresar. ADIOS!')
}

