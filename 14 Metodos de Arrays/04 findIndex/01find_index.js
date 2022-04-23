/*Permite conocer el indice que cumpla alguna condicion en especifico y al igual que los metodos anteriores recibe los mismos parametros
arreglo.findIndex(callback( element[,
    index[, array]] )[, thisArg]) */

//Ejercicios uno recuperar el indice del objeto con la propiedad nombre y el valor ramitas
var productos = [
    {nombre: 'coca-cola', precio: 990},
    {nombre: 'papas fritas', precio: 590},
    {nombre: 'ramitas', precio: 290},
    {nombre: 'kapo', precio: 190},
   ];
let ramita = productos.findIndex(element =>{
    return element.nombre == 'ramitas';
});
console.log(ramita);

//Ejercicios 2 encontrar la persona que tenga 5 o mas años de experiencia
var experiencias = [
    {
    titulo: "Practica",
    anos: 1,
    },
    {
    titulo: "Programador Junior",
    anos: 2,
    },
    {
    titulo: "Programador Senior",
    anos: 4,
    },
    {
    titulo: "Jefe de proyecto",
    anos: 5,
    }
    ];
let experto = experiencias.findIndex(element => element.anos >= 5 );
console.log(experto);