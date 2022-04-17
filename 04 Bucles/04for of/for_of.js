// El for of itera sobre el valor de la propiedad es decir sobre el valor en si del elemento pero solo toma en cuenta los valores originales en el array y no los valores agregados como prototipo a diferencia del for in y posee el continue y break es bueno para iterar sobre objetos iterables como arrays listas o nodos 
let numeros = [1,2,3,4,5];

for (const iterator of numeros) {
    console.log(iterator);
}