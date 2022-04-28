/* Objeto Iterador */
// 1.- Ejemplo Iterador
function nombreDelIterador(){
    return{
        next: function(){
            return{
                value: "El valor actual de iterador",
                done: false, // true | false
            }
        }
    };
}


function crearIterador(arreglo) {
    var siguienteIndice = 0;
    return { next: function() {
                    return siguienteIndice < arreglo.length
                    ? { value: arreglo[siguienteIndice++], done: false }
                    : { done: true };
                    }   
            }          
}
const thankYou = crearIterador (['ariana', 'grande' ]);
console.log(thankYou.next()); // { value: "ariana", done: false }
console.log(thankYou.next()); // (value: "grande", done: false }
console.log(thankYou.next()); // { value: undefined, done: true }

// 2.- Ejemplo Iterador pero ahora un pequeño cambio en la sintaxys pero que aun cumple la misma funcion
let colores = ['Amarillo', 'Azul', 'Rojo'];
function iterador(array) {
     let count = 0;
     return {
            next: function() {
                if (count < array. length)
                    return { value: array[count++], done: false }
                else
                    return { value: undefined, done: true }
               }
            }
}                                    
let refIterador = iterador(colores);
console. log(refIterador.next());
console. log(refIterador.next());
console. Log(refIterador.next());
console. log(refIterador.next());



// Iterable es un objeto que contiene un metodo a [Symbol.iterator](): iteratorObject dentro de sus propiedades
let iterable = {
    [Symbol.iterator](){return iteratorObject}
}
let iteratorObject = {
    next: function(){
        return {
        value: 'string',
        done: false
        }
    }
}


//3.- Ejemplo de como cambiar el comportamiento de iteracion de un objeto implementando el algoritmo de Durstenfeld suffle para regresar un array con sus valores aleatorio
class RandomArray extends Array {
    [Symbol.iterator]() {
      let getRange = n => Array.from(new Array(n), (_, i) => i); // [0, n)
      let shuffle = arr => { // Durstenfeld shuffle
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }   
        return arr;
      };
      let i = 0;
      let indices = shuffle(getRange(this.length));
      return {
        next: () => ({
          value: this[indices[i++]],
          done: i > this.length
        })
      }  
    }
}    

//4.- Ejemeplo de creacion de un objeto iterable con una funcion generadora la cual devuelve un generador que es lo que devuelve el yield
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]

