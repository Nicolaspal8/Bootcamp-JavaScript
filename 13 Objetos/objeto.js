//Algunos metodos comunes para trabajar con objetos son los de agregar valores y elminar

let animal = {
    nombre: 'pepe',
    apellido: 'pepon',
    edad: 12,
    patas:4
}
console.log(animal);
//Agrega una propiedad a un objeto
animal.color = 'cafe';
console.log(animal);
//Elimina una propiedad del objeto
delete animal.edad;
console.log(animal);

let datosWeb = ["JavaScript","VueJS","AngularJS","ReactJS","NodeJS"];
console.log(datosWeb.length);
datosWeb.length = 4;
datosWeb[7] = "Express"
console.log(datosWeb);

//Creacion de una tabla a partir de un array de objetos
let alumnos = [{
    nombre: 'Pedro',
    apellido: 'Soto',
    peso: '66kg',
    altura: '1.80m',
    edad: 25
    },
    {
    nombre: 'Ana',
    apellido: 'Gutierrez',
    peso: '57kg',
    altura: '1.60m',
    edad: 27
    },
    {
    nombre: 'Mario',
    apellido: 'Torres',
    peso: '80kg',
    altura: '1.82m',
    edad: 33
    },
    ];
    var texto =
    "<tr><th>Nombre</th><th>Apellido</th><th>Peso</th><th>Altura</th><th>Edad</th></tr>";
    for (var i = 0; i < alumnos.length; i++) {
        texto += 
        `<tr>
            <td>${alumnos[i].nombre}</td>
            <td>${alumnos[i].apellido}</td>
            <td>${alumnos[i].peso}</td>
            <td>${alumnos[i].altura}</td>
            <td>${alumnos[i].edad}</td>
        </tr>`;
}
// document.getElementById("cuerpo-tabla").innerHTML = texto;

//Obtener un arreglo de las propiedades de un objeto, de los valores y de ambos juntos
var mascotas = {
    perros: "Pastor Aleman",
    gatos: 5,
    aves: "guacamayas"
    };
var keys = Object.keys(mascotas);
console.log(keys);
var values = Object.values(mascotas);
console.log(values);
var entries = Object.entries(mascotas);
console.log(entries);

var fecha = new Set("06-07-198588888888888");
console.log(fecha);
fecha.delete("1");
fecha.delete("9");
fecha.delete("8");
fecha.delete("5");
console.log(fecha);
fecha.add("j");
fecha.add("u");
fecha.add("l");
fecha.add("i");
fecha.add("o");
console.log(fecha);
fecha.forEach(function(element) {
console.log(element);
});


/*1. ¿Cuál es la cadena de texto que al pasar por el método split da como resultado este
array ["mesa","silla","comedor"]? No puedes usar ',' para conectar la cadena de
texto, valida con el método split.*/
var filtros = 'mesa silla comedor';
var filtros = filtros.split(' ');
console.log(filtros);
/*2. Estás consumiendo una interfaz de información que devuelve un listado de
pokemones: ["pikachu","ditto","bulbasaur"], pero los propietarios de la
página web donde estas realizando el trabajo necesitan que el despliegue de la
información sea en el título de la página web, por lo que necesitas transformar en
texto para que quede separado por guiones (-) implementado el método join.*/
var pokemons = ["pikachu","ditto","bulbasaur"];
console.log(pokemons.join(" - "));
/*3. Utilizando el método map, crea un nuevo arreglo con el cuadro de cada elemento del
arreglo original. Puedes utilizar el método Math.pow().*/
var numeros = [1,2,3,5,8,13,21];
numeros_nuevo = numeros.map(function(num) {
                                return Math.pow(num,2);
                            });
console.log(numeros_nuevo);
/*4. Obtenga el promedio de notas del siguiente arreglo de notas = [6,7,7,5,4] utilizando el
método reduce.*/
var notas = [6, 7, 7, 5, 4];
var sumaNotas = notas.reduce(function(acumulador, nota){
                                return (acumulador + nota);
                            },0);
var promedio = (sumaNotas / notas.length);
console.log(promedio);
/*5. Del siguiente arreglo denominado pokemones, obtenga los pokemones con
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
/*6. Escriba el código para obtener este arreglo final usando el método concat var */
resultado = ["perro","gato","ratón","iguana"];
var animalesA = ["perro","gato"];
var animalesB = ["ratón","iguana"];
var animales = animalesA.concat(animalesB);
console.log(animales);


/*1. ¿Cuál es el resultado de aplicar sort al siguiente array var lista
=["Pepe",5,2,"Diego","1"]? */
var lista = ["Pepe",5,2,"Diego","1"];
console.log(lista.sort()); // Array(5) [ "1", 2, 5, "Diego", "Pepe" ]
/*2. Sin probar el código. ¿Cuál es el resultado de esta operación ["perro", "gato",
"ratón"].reverse() ? */
Array(3) [ "ratón", "gato", "perro" ]
/*3. Para el arreglo mostrado a continuación, invierte e itera con un forEach los
elementos dispuesto en el arreglo. Luego muestra el resultado final por medio de un
console.log. */
var nombres =
['Juan','Manuel','Elio','Ali','Yecelis','Yecenia','Laura'];
nombres.reverse();
nombres.forEach(function(nombre) {
console.log(nombre);
});
/*4. Del siguiente arreglo de objetos, busque el pokemon con el nombre Pikachu y
muestre el resultado. */
var pokemones = [
{nombre: 'Charmander', level: 22},
{nombre: 'Pikachu', level: 28},
{nombre: 'Dito', level: 37},
];
var pikachu = pokemones.find(function(pokemon){
                                return pokemon.nombre == 'Pikachu';
                            });
console.log(pikachu);

/*5. Para el siguiente arreglo denominado experiencias, muestra la posición (índice), que
contenga la experiencia mayor o igual a 5 años.*/
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
var expeIndice = experiencias.findIndex(function(persona){
                                            return persona.anos >= 5;
                                        });
console.log(expeIndice);
/*6. ¿Hay en el listado algún pokémon tipo agua? Implementa el método some para
verificar la condición indicada, retornando true o false.*/
var pokemones = [
{nombre: 'Charmander', tipo: "Fuego"},
{nombre: 'Pikachu', tipo: "Electricidad"},
{nombre: 'Dito', tipo: "normal"},
];
var tipoAgua = pokemones.some(function(tipo){
                                return tipo.tipo == "Fuego"
                            });
console.log(tipoAgua);
