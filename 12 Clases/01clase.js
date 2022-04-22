//La sintaxis basica de una clase -->
class NombreClase {

    propiedad1 = "Rojo";
    propiedad2 = 4;

    constructor(propiedad1,propiedad2) {
    this.propiedad1 = propiedad1;
    this.propiedad2 = propiedad2;
    
    }
    metodo1() {
    
    }
    metodo2() {
    
    }
};
//Otro Ejemplo con la clase pokemon
class Pokemon {
    constructor(nombre, tipo, nivel, ataque) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.tipo = tipo;
    this.ataque = ataque;
    }
    lanzarAtaque(){
    return this.ataque * Math.random()
    }
};

//Ahora instanciamos la clase pokemon

let pikachu = new Pokemon('Pikachu','electrico','2',10);
console.log(pikachu);
let charmander = new Pokemon('Charmander', 'Fuego', 30, 67);

//Transformando una clase en una funcion constructora
function Pokemon2(nombre, tipo, nivel, ataque) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.tipo = tipo;
    this.ataque = ataque;
    this.lanzarAtaque = function() {
    return this.ataque * Math.random();
    }
};

var bulbasaur = new Pokemon2('Bulbasaur', 'Planta', 27, 51);
var squirtle = new Pokemon2('Squirtle', 'Agua', 25, 48);
console.log(bulbasaur.lanzarAtaque() + " v/s " + squirtle.lanzarAtaque());

/* Ejercicio:
Crear una clase utilizando la sintaxis correcta vista anteriormente que permita recibir los
datos de base y altura de un triángulo rectángulo, posteriormente crea un método dentro de
la clase que permita retornar el valor del área y ser mostrado en un alert. Luego transforma
la clase creada en una función constructora.
 */

class Triangulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
    area(){
        return console.log(this.base * this.altura / 2);
    }
};

let trianguloRectangulo = new Triangulo(10,20);
trianguloRectangulo.area();

function Triangulo2(base, altura){
    this.base = base;
    this.altura = altura;
    this.area = function(){return console.log(this.base * this.altura / 2)};
}
let triangulito = new Triangulo2(5,10);
triangulito.area();