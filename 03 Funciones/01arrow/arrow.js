// 1.- Arrow function = Son funciones expresadas que nos permiten simplificar nuestro codigo particularidades =
// 00. Son Anonimas y poseen una sintaxis mas corta y no tiene tiene su propio this, arguments, super o new.target.
// 1. Al ser expresada no permite el Hoisting 
// 2. Si solo tienes una linea de codigo puede omitir las llaves como 
// const flecha = () => console.log('Hola');
// 03. si tienes un parametro y solo uno puedes omitir los parentesis como 
// const flecha = nombre => console.log(`Hola ${nombre}`);
// 04. Return implicito solo cuando es una operacion en una linea como la anterior si tenemos mas lineas ya no funciona el return implicito

// Una particularidad de las arrows function es que al utilizar el elemento this no hace referencia al objeto primario donde esta almacenado si no que hace referencia al objeto global donde esta que es el objeto windows por lo cual en objetos literales como este de a continuación que poseen funciones 
const perro = {
    nombre: 'pepito',
    ladrar(){console.log('Ladrando')} 
};
//Declaramos asi como lo hize anteriormente la funcion esa es la forma correcta de declarar una funcion dentro de un objeto literal porque si lo hariamos con una arrow function y utilizamos el metodo this para hacer referencia a alguna de sus propiedades como this.nombre ejemplo
const perro2 = {
    nombre: 'pepito',
    ejemplo: ()=>{console.log(this.nombre)} 
};
// no hará referencia al objeto perro si no que al objeto windows es decir al contexto global donde se es declarada pero eso no pasaria si lo haríamos con una funcion normal declarada como 
const perro3 = {
    nombre: 'pepito',
    ejemplo: function(){console.log(this.nombre)} 
};
//Entonces la funcion anterior dentro del objeto si hará referencia al objeto primario donde se encuentra



//*****Parametros requeridos no requeridos y por defecto **********/
//1.- Parametro por defecto pero no requerido
const pow = (a, b = 2) => Math.pow(a, b);
const foo = pow(2); // 4
const bar = pow(3, 3); // 27
//2.- Agregar un parametro requerido a través de una segunda funcion siendo llamada de la arrow function como parametro por defecto si es que no se especifica ningun parametro


// Check required parameters in Javascript

//Funcion para remplazar en parametros por defecto de nuestra arrow function
const checkRequired = paramName => {
    throw new Error(`${paramName} is required`);
  };
//Es pasada la funcion en los parametros por defecto de la funcion doSomething
const doSomething = (requiredParam = checkRequired('requiredParam')) => {
     console.log(` Do something with ${requiredParam}`);
   };
doSomething('foo');
//Try catch para comprobar que el llamado a funcion tenga parametros
try {
    doSomething();
} catch (error) {
    console.log(error); // requiredParam is required
}



/* **********Generación de valores por defecto ***************** */
const giveMeADeveloper = (
    nombre,
    age,
    helloText = `${nombre} is ${age} years old`
) => ({nombre, age, helloText});//devuelve un objeto y se le asignan automaticamente los valores a las claves por el orden en que son colocados dichos parametros
const aDeveloper = giveMeADeveloper('Pepe', '33');
console.log(aDeveloper);//{nombre: Pepe, age: 33, helloText: 'Pepe is 33 years old'}

/* ***********Historia
Las funciones flechas existen desde casi los inicios de javaScript solo que no se utilizaban como la conocemos hoy en dia, solo era utilizada la flecha y no la llamada funcion para envolver un bloque de codigo en comentarios y asi los navegadores que no estaban actualizados puedieran interpretar el codigo javascript y no interpretarlo solo como texto plano.
Todo parte con Lambda que es lo que llamamos a la forma de incorportar una funcion dentro de los parametros de otra.
en 1936 Alonzo Church y Alan Turing se encontraban desarrollando de forma independiente poderosos modelos matematicos computacionales Turing desarrollo las maquinas de Turing es su comienzo llamada a-maquina pero luego apodada asi de forma popular.
Church se econtraba trabajando con funciones mas bien escribiendo sobre ellas, y desarrollo un modelo llamado el calculo λ que es la letra griega minuscula llamada lambda y por este motivo Lisp usó la palabra lambda para notar funciones.
¿Que es el λ-cálculo ? fue uno de los primeros lenguajes de progamación que no fue diseñado para serlo ya que las computadoras con programas almacenados aparecerian una decada despues, fue diseñado para poder interpretar cualquier tipo de calculo matematico, Church queria esto para explicar cosas sobre la computación general y se dio cuenta que lo que necesitaba eran funciones y en base a eso luego se desarralloran las siguientes ideas y formas de implementar el trabajo de funciones en los lenguajes de programación, en base a esto es posible reconstruir javascript completamente con funciones sin bucles ni operadores logicos ni nada puramente funciones nisiquiera objetos solo usando funciones como ifwhile un ejemplo de la escritura en el lenguaje desarrollado por Church
*/
//fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))
//Lo que hoy seria -->
var fix = f => (x => f(v => x(x)(v)))
               (x => f(v => x(x)(v)));