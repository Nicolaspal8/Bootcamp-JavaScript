// La clase Math posee entre sus metodos el metodo random lo que nos permite obtener un numero aleatorio entre 0 y 1 excluyendo el 1 

//Ejemplo de obtener un numero aleatorio del 5 al 10
//Se utiliza math floor para aproximarlo al entero inferior y luego multiplicamos el maximo + 1 por el minimo es decir entre los rangos que queremos obtener el numero y luego le sumamos el menor numero
for (let index = 0; index < 10; index++) {
    let aleatorio = Math.floor(Math.random() * (11 - 5)) + 5;
    console.log(aleatorio);
}

//Experimentos, dicen que para obtener un numero aleatorio entre 0 y el numero que quieras solo tienes que multiplicar el math random resultante por el numero que quieras obtener ya que la resta entre el numero y 0 siempre sera el numero pero a la vez creo que no nos dara el rango completo de numeros que es 1 a continuacion haré la prueba con el mismo for anterior
for (let index = 0; index < 10; index++) {
    let aleatorio = Math.floor(Math.random() * (100));
    console.log(aleatorio);
}
// --> El seultado de lo anterior fueron numeros entre 0 y 4 incluyendo el 4 y 0 asi que efectivamente si es cierto luego probe con 100 y fueron del 0 al 99


//Haré otra prueba obteniendo numeros negativos y determinar cuales deben ser los parametros
//1.- Resultado haciendo la formula clasica el resultado obtenido fueron el mismo numero siempre el numero negativo restado al final
for (let index = 0; index < 10; index++) {
    let aleatorio = Math.floor(Math.random() * (-10 - 10) + 10);
    console.log(aleatorio);
}
//2.- Conclusión: Para obtener numeros negativos la formula es el menor menos el mayor mas el mayor

//Nota Da igual si el numero sumado al final esta dentro o fuera del math floor porque el math floor solo nos aproxima al numero entero mas cercano inferiormente es decir si es 1.9 nos da 1