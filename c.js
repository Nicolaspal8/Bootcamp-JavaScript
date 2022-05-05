//Ejemplo de alcance de variables
var x = 4;
if (true) {
var x = 7;
}
console.log(x); // >> 7
for (var i = 0; i < 4; i++) {
let j = 10;
}
console.log(i); //4 Porque var no tiene alcance de bloque si no que global y eso hace poder modificarla y acceder a ella desde cualquier lado
console.log(j); //Error no definida
