//solicitar al usuario un numero a traves de un prompt

//empezando desde 1 e ir incrementando este valor de a 1

//a medida que vemos todos los numeros enteros anteriores incluido el ingresado por el usuario quiero hacer un log de aquellos numeros que son multiples de 7 

//el log debe ser el siguiente
// *El numero X es multiplo de 7

/* let numero = parseInt(prompt('Ingrese un numero'));
let contador = 1;



while(contador <= numero) {

    if(numero % 7 === 0){
        console.log('El numero ' + contador + 'es multiplo de 7')
    }

    contador++

}

*/


let cantidad = 0;
let acumuladoNotas = 0;



do{

    let nota = parseInt(prompt('Ingrese las calificaciones del alumno'));
  
    if(nota > 0){
        cantidad++;
        acumuladoNotas += nota;
    }

}while(nota !== 0);

let promedio = acumuladoNotas/cantidad;