//Hace que un elemento desaparezca en un principio con la funcion fadeOut y luego es recuperado por la funcion fadeIn luego de eso creo un setInterval que lo que hace es ejecutar una funcion repetidas veces en un intervalo de tiempo y asi le da un efecto de que aparece y desaparece cada cierto tiempo
function fade(){
    $('button').fadeOut(500,function(){
        $(this).fadeIn(500)
    })
}
let n = 0;
let interval = setInterval(fade,1000)
console.log(interval)
setTimeout(clearInterval,10000,interval);

/*Formula para calcular la cantidad de veces que quiero que se repita una animacion con un setInterval y luego detenerla
veces = setTimeout / (la cantidad de lo que demore mas tiempo, si el fadeOut y In sumados o el setInterval puesto, si ambos duran lo mismo es decir la suma del fade y el interval entonces da igual por cual) y el resultado si es decimal, se aproxima al entero superior da igual si es 1.1 daria como resultado 2 veces porque ese .1 que queda es tiempo para que se alcanze a lanzar de nuevo la funcion y el tiempo total de finalizacion lo dara la suma al final del tiempo mayor por el cual dividimos en un principio el setTimeOut
*/
let mayor = 0;
setInterval > (fadeOut + fadeIn) ? mayor = setInterval : mayor = fadeOut + fadeIn;

let veces = Math.ceil(setInterval /  mayor);
console.log(veces)

// let gf = {nombre: 'pepe', func:
// function prueba(a,parametros){
//     return a;
// }}
// let a = gf.func("hola",function (p){console.log(p)});

// //Guardando una funcino en un arreglo y luego aplicando destructuring para hacer unso de ella de una manera mas comoda
// let ar = [1,2,3,function pera(){console.log("holaaaa")}];
// let [uno,dos,tres,funcino] = ar;
// funcino();
