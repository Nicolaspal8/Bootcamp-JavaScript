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

function a(n){
 return n * 2;
}

function b(n){
 return n * n;
}
function c(n){
 return b(a(n)) / 2 / 2;
}

console.log(c(4));

const test = () => test();
test();