//El simbol es un tipo de dato primitivo unico he irrepetible dentro de JavaScript y al asignarlo como una propiedad mas a un objeto es decir como la clave de un objeto el valor que pose dicha key o propiedad lo vuelve privado y solo es posible acceder a el a través de su identificador como en el ejemplo de acontinuación
const a = Symbol();
const b = Symbol();
const obj = {};
obj[a] = "a";
obj[b] = "b";
obj.c = "c";
obj.d = "d";
           
for (let i in obj) {
  console.log(i); // solo imprime "c" y "d"
} 
obj[a]; // "a" 11