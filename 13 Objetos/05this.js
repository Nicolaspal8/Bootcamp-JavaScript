/*This es una variable que cambia su valor depende del contexto donde se es ejecutada y si esta en una funcion el tipo de funcion que la esta utilizando, this toma el valor por defecto del "objeto" contenedor primario o el objeto padre o dueño como lo quieras llamar y hace referencia a este y con ello podemos trabajar con las propiedades de dicho objeto, po ejemplo si llamamos a this en el contexto de ejecucion global de lo cual escribi en el vocabulario en contextos de ejecucion, obtendremos el valor del objeto window con todas sus propiedades al igual que si lo llamamos dentro de una funcion declarada ya que se esta siendo declarada dentro del objeto windows pero esto solo lo podremos ver ejecutandolo en el navegador ya que ahi es donde el motor de JavaScript es donde crea el objeto windows dicho esto veamos unos ejemplo que se pueden ejecutar en la consola del navegador*/

//Ejemplo 1
function Rectangulo(ancho, alto) {
  console.log("antes: ", this);
  this.ancho = ancho;
  this.alto = alto;
  console.log("despues: ", this);
}
var r1 = new Rectangulo(4, 6);

//Ejemplo 2
const Triangulo = function (base, altura) {
  this.base = base;
  this.altura = altura;
};
Triangulo.prototype.calculoArea = function () {
  return (this.base * this.altura) / 2;
};
const triangulo1 = new Triangulo(2, 5);
console.log("El cálculo del área es: ");
console.log(triangulo1.calculoArea());