//ES5 
// function Vehiculos(marca) {
//     this._marca = function(){
//    return marca;
//     };
//    }
//    Vehiculos.prototype.getMarca = function(){
//     return this._marca();
//    }
//    Vehiculos.prototype.setMarca = function(marca){
//     this._marca = function(){
//     return marca;
//     }
//    }
//    var v1 = new Vehiculos("Ford");
//    v1.getMarca();
//    v1.setMarca("Kia");
//    v1.getMarca();

//Ahora lo transformaremos a sintaxis de ES6
class Vehiculo{
    constructor(marca){
        this._marca = marca;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}
let v1 = new Vehiculo("Ford");
console.log(v1)

console.log(v1.marca);
v1.marca = "Kisa";
console.log(v1.marca);

// v1.marca();
// console.log(v1)


//Ejemplo de Herencia Aplicado con ES5 y ES6
function FiguraGeometrica(lado){
    this.lado = lado; 
}

/* Paso 2: Crear la función constructora para la clase de Polígono, pero como esta
clase será hija, es decir, hereda de una clase padre “FiguraGeometrica” los
atributos y métodos que ella posea, se debe hacer el llamado a las propiedades de la
clase padre, para ello se debe implementar el método call(), el cual llama a una
función con un valor “this” asignado, además de los argumentos provistos de forma
individual, en este caso, los argumentos serán el lado que recibe el Polígono, y se
pasara dos veces para completar los valores que necesita la función constructora de
nuestra clase padre, para luego ser inicializados y asignados a las propiedades
respectivas. */
function Poligono(lado){
    FiguraGeometrica.call(this, lado);
    }
/* Paso 3: Ya nuestra clase hija “Polígono”, realiza el llamado a las propiedades de la
clase padre, por lo que hace falta indicarle a ambas clases que una es extensión de
la otra, esto lo lograremos mediante la instrucción “Object.create”, asignando al
prototipo de la clase hija “Polígono” como nuevo objeto el prototipo de la clase padre: */    
function Poligono(lado){
    FiguraGeometrica.call(this, lado);
    }
    Poligono.prototype = Object.create(FiguraGeometrica.prototype);
/* Paso 4: El último paso para poder completar la clase hija con lo indicado en el
ejercicio, sería crear un método para el cálculo del área del Polígono, el cual se
realizará como se ha trabajado hasta el momento, agregandolo al prototipo de la
clase, como se muestra a continuación:*/
Poligono.prototype.calcularArea = function(){
    return this.lado * this.lado;
    }
/* Paso 5: Finalmente, nos queda por instanciar la clase hija, pasar los valores del lado,
llamar al método para calcular el área del Polígono y mostrarlo mediante un
console.log(). Aprovecharemos la instancia que crearemos para el Polígono para
mostrarla y observar el contenido de la misma. */
var cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());
/* Paso 6: Ahora, el resultado lo podemos obtener al ejecutar el archivo “script.js”
mediante la terminar con Node, con el comando: node script.js, resultando: */


//Mismo Ejemplo con ES6
/* Paso 1: Crear una carpeta en nuestro lugar de trabajo y dentro de esta carpeta se
debe crear un archivo JavaScript con el nombre de “script.js”, luego dentro del
archivo primeramente debes crear la clase padre “FiguraGeometrica”, recibiendo
como parámetros en el constructor las propiedades mencionadas anteriormente
“lado”, como se muestra a continuación:
 */
class FiguraGeometrica {
    constructor(lado){
    this.lado = lado;
    }
    }
/* Paso 2: Crear la clase hija con el nombre de Polígono, la cual, será una extensión de
la clase creada anteriormente denominada FiguraGeometrica, recibiendo en su
constructor los valores necesarios para asignar a los atributos, como lo son el alto y
el ancho. Luego, mediante la palabra reservada super(), hacemos el llamado al
constructor con los atributos de la clase padre y enviamos los valores recibidos en el
constructor de la clase hija. Esto es lo que se hizo utilizando el método call() en
ES5. */    
class Poligono extends FiguraGeometrica {
    constructor(lado){
        super(lado);
    }
    }
/*  Paso 3: Para finalizar con la clase hija, solo hace falta crear el método que nos
permita calcular el área del cuadrado. Este método retorna la multiplicación del
atributo lado por lado, lo implementaremos mediante la nomenclatura de ES6: */

class Poligono extends FiguraGeometrica {
    constructor(lado){
    super(lado);
    }
    calcularArea(){
    return this.lado * this.lado;
    }
    }
/* Paso 4: Finalmente, nos queda por instanciar la clase hija, pasar los valores de alto y
ancho, llamar al método para calcular el área del Polígono y mostrarlo mediante un
console.log(). Aprovecharemos la instancia que crearemos para el cuadrado para
mostrarla y observar el contenido de la misma. */
var cuadrado = new Poligono(3);
console.log(cuadrado);
console.log(cuadrado.calcularArea());
/*  Paso 5: Ahora, el resultado lo podemos obtener al ejecutar el archivo “script.js”
mediante la terminar con Node, con el comando: node script.js, resultando: */

//ES5 Para poder ver lo que contiene los objetos vacios hay que ejecutarlos en el navegador ya que hay se crea el objeto windows y se le es agregado el protype heredado del object prototype
var padre = {
    nombre: "Juan",
    saludar: function(){
    console.log("Hola, soy "+this.nombre);
    }
    }
    console.log(padre);
    var hijo = Object.create(padre);
    console.log(hijo);
    var nieto = Object.create(hijo);
    console.log(nieto);
    