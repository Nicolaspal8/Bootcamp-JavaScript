//Filter permite devolver un arreglo con todos los elementos que cumplan alguna condicion expecificada en el return
/*Como parametros recibe 
var nuevoArreglo =
arreglo.filter(callback(currentValue[,
    index[, array]])[, thisArg])*/
/*1. Del siguiente arreglo denominado pokemones, obtenga los pokemones con
experiencia (level) mayor a 30.*/
var pokemones = [
    {nombre: 'Pikachu', level: 28},
    {nombre: 'Charmander', level: 22},
    {nombre: 'Dito', level: 37},
    ];
    var level = pokemones.filter(function(experiencia){
    return experiencia.level > 30;
    });
    console.log(level);
//En este caso nos retorna el array con el objeto que cumple dicha condicion

/* 2 Se desea obtener solo los clientes que sean mayores de edad */
var clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
];
let mayores = clientes.filter((cliente,index,array,thisArg)=>{
    console.log(index);
    console.log(array);
    console.log(thisArg);
    return cliente.edad>17;
});
console.log(mayores);