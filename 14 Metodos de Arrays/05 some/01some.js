/*El metodo some devuelve true o false si algun elemento dentro de un array cumple la condicion 
Estructura : 
arreglo.some(callback(element[, index[,
    array]])[, thisArg])*/
/*Ejercicio 1 Implementar el método some para saber si existe un objeto del arreglo autos que contenga algún 
automóvil que utilice como combustible el Diesel. El arreglo auto será el siguiente */

var autos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
   ];
let tiene_diesel = autos.some(element => element.combustible == 'Diesel');//Es sensible a mayusculas
console.log(tiene_diesel);

