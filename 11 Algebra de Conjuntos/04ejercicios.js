/* 1. Para el siguiente arreglo: num = [-1,20,33,74,15,6], itera por todos los elementos
dentro del arreglo utilizando for para mostrar cada valor mediante un
document.write();*/
let  num1 = [-1,20,33,74,15,6];
for(let i = 0; i < num1.length; i++){
    console.log(num1[i]);
}

/*2. Para el siguiente arreglo: num = [1, 2, 3, 5, 8, 13, 21, 34, 55], muestra todos los
elementos del arreglo utilizando for...in y luego for...of para mostrar cada valor
mediante un document.write();*/

let num = [1,2,3,5,8,13,21,34,55];
for (let element in num){
console.log(element+"<br>");
};
for (let values of num){
console.log(values+"<br>");
};

/*3. Para los siguientes arreglos: data1 = ["JS", Vue", "React"] y data2 = ["Node",Angular",
"Express"], realiza la unión de ambos arreglos para obtener un solo arreglo final. */

let data1 = ["JS", "Vue", "React"];
let data2 = ["Node","Angular","Express"];
let concat = data1.concat(data2);