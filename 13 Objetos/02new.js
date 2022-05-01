//Formas de trabajar con los objetos, agregar propiedades y modificarlas 

/*1. Syntaxis Object.defineProperty(obj, prop, descriptor)
Parametros 
obj
The object on which to define the property.

prop
The name or Symbol of the property to be defined or modified.

descriptor
The descriptor for the property being defined or modified.

Return value
The object that was passed to the function.
configurable
true if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to false.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

A data descriptor also has the following optional keys:

value
The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.

writable
true if the value associated with the property may be changed with an assignment operator. Defaults to false.

An accessor descriptor also has the following optional keys:

get
A function which serves as a getter for the property, or undefined if there is no getter. When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property. Defaults to undefined.

set
A function which serves as a setter for the property, or undefined if there is no setter. When the property is assigned, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned. Defaults to undefined.*/

//1. Ejemplo
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


//2. Ejemplo 
function Archiver() {
    var temperature = null;
    var archive = [];
  
    Object.defineProperty(this, 'temperature', {
      get() {
        console.log('get!');
        return temperature;
      },
      set(value) {
        temperature = value;
        archive.push({ val: temperature });
      }
    });
  
    this.getArchive = function() { return archive; };
  }
  
  var arc = new Archiver();
  arc.temperature; // 'get!'
  arc.temperature = 11;
  arc.temperature = 13;
  arc.getArchive(); // [{ val: 11 }, { val: 13 }]

function Prueba(n){
    let nf = n
    Object.defineProperty(this,'prueba',{value:nf})
}

var prueba2 = new Prueba('valor de Prueba')
console.log(prueba2)