// console.log("fn1", fn1()); 
// //que imprime? 
// console.log("fn2", fn2());
//  //que imprime? 
//  //function expression 
//  var fn1 = function() { return 1; }; 
//  //function declaration 
//  function fn2() { return 2; }
// Es muy posible que nuestra lógica apunte a pensar que V8 interprete de la siguiente forma.
// var fn1 = function() { return 1; }; 
// function fn2() { return 2; } console.log("fn1", fn1()); 
// //que imprime? 
// console.log("fn2", fn2());
//  //que imprime? 
//  //function expression 
//  //function declaration

// En este caso no tenemos una definicion de fn1 lo que
// tenemos es una asignacion por referencia de una funcion
// a una variable, por lo que V8 lo interpreta de la siguiente forma.
// var fn1; 
// // <- la variable es elevada 
// function fn2() { return 2; } 
// // <- declaración y definición son elevadas
// console.log("fn1", fn1());
// // throw TypeError: undefined is not a function 
// console.log("fn2", fn2()); 
// //2 //function expression 
// fn1 = function() { return 1; };
// Por definición Hoisting hace que la declaración de variables 
// sea procesada antes de que cualquier código se ejecute, declarar 
// una variable en cualquier parte es lo mismo que declararla al inicio.
// Esto también significa que una variable puede ser usada antes de su declaración.

//FUNCIONES AUTOEJECUTABLES  Y 
//FUNCIONES ANÓNIMAS AUTOEJECUTABLES 

//función autoejecutable  clasica

const saludo2=(function(parametro1 = "hola"){
    document.write('buenas noches <br>');
})()

//funcion moderna autoejecutable 

const saludo3=(()=>{
    document.write('buenas tardes');
})() 

let input = document.querySelector('input');
let log = document.getElementById('log');
let textoInput = document.getElementById('inpu')
let boton = document.querySelector('#botton');
let hora = new Date();
console.log(hora.getTime());
// console.log(`Esta es la hora 2: ${hora}`);
console.log(hora.getHours(), hora.getMinutes());

boton.addEventListener('click', function(){
    console.log("Se ha dado click con exito")
});
// hora.onchange = console.log(hora);
input.onchange = handleChange;

function handleChange(e) {
    textoInput.value = 'Presente';
    boton.click();

  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}


const arr = ["valor1",2,3,4,5];

const mascota=[{
    nombre:"Pipo",
    raza:"Pastor Aleman",
    edad:3, 
    propietario:"Luis Fernandez",
    aficciones:['saltar','jugar','morder']
}]
console.log("for of");

for (var kjk of mascota) {
    console.log(kjk.raza);
}

// const mascota={
//     nombre:"Pipo",
//     raza:"Pastor Aleman",
//     edad:3, 
//     propietario:"Luis Fernandez",
//     aficciones:['saltar','jugar','morder']
// }

// for(const propiedad in mascota){
//     console.log(propiedad)
// }