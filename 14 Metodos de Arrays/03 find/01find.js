/*El metodo find permite obtener un objeto o dato que cumpla con cierta especificación y a diferencia del metodo filter find solo nos devuelve el primero objeto o elemento que cumpla dicha condicion propuesta dentro de sus parametros recibe lo mismo que los otros
arreglo.find(callback(element[, index[,
    array]])[, thisArg])*/

//Ejercicio 1 Del siguiente arreglo de objetos, busque el pokemon con el nombre Pikachu y muestre el resultado.
var pokemones = [
    {nombre: 'Charmander', level: 22},
    {nombre: 'Pikachu', level: 28},
    {nombre: 'Dito', level: 37},
   ];
let pikachu = pokemones.find(element =>{
    return element.nombre == 'Pikachu';
});
console.log(pikachu);