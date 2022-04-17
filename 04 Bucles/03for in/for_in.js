//El for in itera sobre la propiedad o nombre del valor no sobre el valor es decir que si tenemos un array de strings nos iterara sobre el valor del indice como 1 2 o 3 y en base a este tendremos que sacar el valor y no posee el continue o break
// Otra cosa importante es que itera sobre todos los elementos que modifican dicho array como los valores del prototipo a diferencia del for of
// y es bueno para iterar sobre objetos no iterables como un object por defecto

let numeros = [1,2,3,4,5];


for (const key in numeros) {
    console.log(numeros[key]);
}

// Y ahora si agregamos algo al prototipo del array
numeros.otro = 'Agregado';

for (const key in numeros) {
    console.log(numeros[key]);
}