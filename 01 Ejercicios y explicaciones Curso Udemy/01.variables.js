//var, let y const  

//variable:Valor que me permite guardar un espacio en 
//memoria  

//declaración de la variable
let mascota;

//inicialización de la varible 
mascota="perro"

//declaración e inicialización 
//de una variable  

let mascota1="perro"

console.log(mascota1)

//REGLAS DE LAS VARIABLES  
/* 1.let no me permite declarar la variable 
     con el mismo nombre
   
   2.let permite declarar la variable y no inicializarla 
     y más tarde en cualquier lugar del código 
     inicializarla
   3. let no se ve afectada por el hoisting es decir es declarada como undefined porque no esta inicializada pero si es elvada solo que no se le asigna el valor correspondiente

    1.var me permite declarar otra variable con el mismo 
      nombre y se ve afectada por el hoisting es decir se le asigna el valor en la parte superior del scope

    2.Tambien me permite declarar sin inicializar.
  
    3.const no nos deja declarar una variable sin inicializarla

    4.const no nos deja declarar una variable con el mismo nombre
    */

//EJemlo de la diferencia de elevacino de las variables let y var y el error que arroja es distinto si vambiamos a let sera porque no esta inicializada pero si declarada ya que de todas formas se eleva si cambiamos a var se soluciona
/* let numeros = {};
numeros.uno
= 1;
numeros.dos = 2;
console.log(numeroTres);
let numeroTres = 3;
let resultado = sumar (numeros.uno, numeroTres);
console.log(resultado);
function sumar (a, b) {
return a + b;
} */

var nombre="Pedro"

console.log(nombre)

var nombre="Carlos"

console.log(nombre)

var pajaro; 


pajaro="Loro"

console.log(pajaro)

//variable undefined o variable null  

let pez ; 

console.log(pez)


function saltar(){
    let tiburon="blanco"
}

// console.log(tiburon)

//Estado inicial 

let encendido=null 

console.log(encendido)

//const  

const perro="lucas";

const perro1="perez"

console.log(perro)
console.log(perro1)

//No usaremos nunca var  
//Usaremos let cuando nuestra variable vaya a cambiar 
//Usaremos const cuando nuestra variable sea fija y no cambie 


let fuerzaEnemigo=20;


fuerzaEnemigo=30

console.log(fuerzaEnemigo)