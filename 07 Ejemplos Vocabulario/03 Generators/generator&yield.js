// 1.- Generador normal que solo retorna en una direccion los valores
function* serie() {
     yield 1; // retorna esto la primera vez que se llama y mientras la aplicacion esta en ejecucion guarda el contexto en donde se quedo
     yield 10; // y porsigue a retornar el siguiente valor si esque lo hay
     yield 100;
     yield 1000;
     yield 10000;
}
const genSerie = serie();
console. log(genSerie.next()); // { value: 1, done: false }
console. log(genSerie.next()); // { value: 10, done: false }
console. log(genSerie.next()); // { value: 100, done: false }
console. log(genSerie.next()); // { value: 1000, done: false }
console.log(genSerie.next()); // { value: 10000, done: false }
console.log(genSerie.next()); // { value: undefined, done: true } //El done corresponde a la clave que devuelve el metodo next que a su vez es devolvido por el iterador en forma de objeto, y la clave done nos dice que si aun quedan elementos dentro del iterable al cual estamos iterando

// 2.- Generador que retorna valores de otro generador
function* subSerie() {
     yield 'Hola';
     yield 'Estoy en otro generador';
}     
function* serie2(i) {
     yield i;
     yield i + 5;
     yield* subSerie(); // Al llegar aqui pasa al otro generador y no pasa hasta al otro yield del generador principal hasta que termine de ejecutar todos los yields del generador pasado
     yield i + 10;
     yield i + 20;
}
const genSerie2 = serie2(50);
console. log(genSerie2.next());
console. log(genSerie2.next());
console. log(genSerie2.next());
console. log(genSerie2.next());
console. log(genSerie2.next());
console. log(genSerie2.next());


//3.- 
// Generators

function crearGenerator (arreglo) {
     let index = 0;
     while (index < arreglo.length) {
       yield arreglo[index++];
     }
 }
 const thankYou2 = crearGenerator(['ariana', 'grande']);
 console.log(thankYou.next()); // { value: "ariana", done: false }
 console.log (thankYou.next()); // { value: "grande", done: false }
 console.log (thankYou.next()); // { value: undefined, done: true }