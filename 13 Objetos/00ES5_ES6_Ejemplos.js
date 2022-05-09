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
class Vehiculo {
  constructor(marca) {
    this._marca = marca;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    return (this._marca = marca);
  }
}
let v1 = new Vehiculo("Ford");
console.log(v1);

console.log(v1.marca);
v1.marca = "Kisa";
console.log(v1.marca);

// v1.marca();
// console.log(v1)

//Ejemplo de Herencia Aplicado con ES5 y ES6
function FiguraGeometrica(lado) {
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
function Poligono(lado) {
  FiguraGeometrica.call(this, lado);
}
/* Paso 3: Ya nuestra clase hija “Polígono”, realiza el llamado a las propiedades de la
clase padre, por lo que hace falta indicarle a ambas clases que una es extensión de
la otra, esto lo lograremos mediante la instrucción “Object.create”, asignando al
prototipo de la clase hija “Polígono” como nuevo objeto el prototipo de la clase padre: */
function Poligono(lado) {
  FiguraGeometrica.call(this, lado);
}
Poligono.prototype = Object.create(FiguraGeometrica.prototype);
/* Paso 4: El último paso para poder completar la clase hija con lo indicado en el
ejercicio, sería crear un método para el cálculo del área del Polígono, el cual se
realizará como se ha trabajado hasta el momento, agregandolo al prototipo de la
clase, como se muestra a continuación:*/
Poligono.prototype.calcularArea = function () {
  return this.lado * this.lado;
};
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
  constructor(lado) {
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
  constructor(lado) {
    super(lado);
  }
}
/*  Paso 3: Para finalizar con la clase hija, solo hace falta crear el método que nos
permita calcular el área del cuadrado. Este método retorna la multiplicación del
atributo lado por lado, lo implementaremos mediante la nomenclatura de ES6: */

class Poligono extends FiguraGeometrica {
  constructor(lado) {
    super(lado);
  }
  calcularArea() {
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
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
console.log(padre);
var hijo = Object.create(padre);
console.log(hijo);
var nieto = Object.create(hijo);
console.log(nieto);

/* ES6
Paso 1: Crear una carpeta en nuestro lugar de trabajo y dentro de esta carpeta se
debe crear un archivo con el nombre de “script.js”, luego crearemos la clase Motores,
con su constructor y método “datosMotor”, para retornar los datos del motor como
serial y fabricante. */
class Motores {
  constructor(serial, fabricante) {
    this.serial = serial;
    this.fabricante = fabricante;
  }
  datosMotor() {
    return `El número de serial es: ${this.serial} y el fabricante
    es la empresa: ${this.fabricante}`;
  }
}
/* Paso 2: Definiremos la clase Eléctricos, la cual extiende de Motores y define el
método “tipoCorriente”, que retorna el tipo de corriente del motor eléctrico. */
class Electricos extends Motores {
  constructor(serial, fabricante, potencia, corriente) {
    super(serial, fabricante);
    this.potencia = potencia;
    this.corriente = corriente;
  }
  tipoCorriente() {
    return `El tipo de corriente es: ${this.corriente}`;
  }
}
/* Paso 3: Finalmente definiremos las clases CC y CA, las cuales serán extensiones de la
clase Eléctricos, por lo tanto se puede decir que son nietas de la clase principal
denominada Motor. Esto mediante la herencia permitirá acceder desde las clases
más inferiores a los métodos de las clases superiores y ejecutarlos para obtener un
resultado. Igualmente es importante destacar que al constructor se le deben ir
indicando como parámetros todos los atributos de las clases superiores así como
los propios de cada clase. */
class CC extends Electricos {
  constructor(serial, fabricante, potencia, corriente, voltaje, tipo) {
    super(serial, fabricante, potencia, corriente);
    this.voltaje = voltaje;
    this.tipo = tipo;
  }
}
class CA extends Electricos {
  constructor(serial, fabricante, potencia, corriente, fases, frecuencia) {
    super(serial, fabricante, potencia, corriente);
    this.fases = fases;
    this.frecuencia = frecuencia;
  }
}
/* Paso 4: Acceder a las distintas partes de nuestro código. Si generamos una instancia
para cada tipo de motor, deberíamos ser capaces de acceder y ejecutar los métodos
pertenecientes a las clases superiores. */
let motorCC = new CC("133DGH", "GE", "2000W", "CC", "220CC", "Shunt");
let motorCA = new CA("7566DGD", "ABB", "2HP", "CA", "Monofasico", "50Hz");
console.log(motorCC.datosMotor());
console.log(motorCC.tipoCorriente());
console.log(motorCA.datosMotor());
console.log(motorCA.tipoCorriente());
/* Paso 5: Una vez definida las instancias, podremos ejecutar el código directamente
desde la terminal con ayuda del comando node script.js. Obteniendo como
resultado: */
/* OutPut
El número de serial es: 133DGH y el fabricante es la empresa: GE
El tipo de corriente es: CC
El número de serial es: 7566DGD y el fabricante es la empresa: ABB
El tipo de corriente es: CA */