/* Un call back es lo que sucede cuando dentro de los parametros de una funcion llamamos a otra para obtener los parametros a través de la funcion llamada
Ejemplo: Crear tres funciones que se utilizarán con un 
solo llamado, dos de ellas se ejecutarán 
dentro de la primera, y devolverán el 
resultado en la función callback. La primera 
función debe retornar el doble del 
argumento pasado, mientras que la segunda 
función debe retornar el cuadrado del 
argumento y por último la tercera función 
debe retornar el 25% del número.
 */

// function a(n){
//  return n * 2;
// }

// function b(n){
//  return n * n;
// }
// function c(n){
//  return b(a(n)) / 2 / 2;
// }

// console.log(c(4));



//Ejemplo 2
function callB(value, callback){
    console.log("Funcion CallB", value)
    setTimeout(callback,4,value, value*value)
}

callB(4,(value, value2)=>{
    console.log("CallBack")
    console.log(value, value2)
})

console.log("----------------")
//Ejemplo 3 

function callB2(value, callback){
    console.log("Funcion CallB2", value)
    setTimeout(callback,4,value, value*value)
}
function fDeclarada(value, value2){
    console.log("CallBack2")
    console.log(value, value2)
}
callB2(4, fDeclarada)

//Para entender el funcionamiento es bueno ejecutarlo con node  o en el navegador y ver que el output se genera el console.log("---") pero aun no ejecuta lo enviado por parametro en el CallBack a la funcion entregada en primer lugar