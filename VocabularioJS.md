# Vocabulario JS 👍

[Syntaxis de Markwdown](https://daringfireball.net/projects/markdown/syntax)\
[Guia MarkDown](https://pandao.github.io/editor.md/en.html)

1. **Built-in functions** : Son las funciones propias que dispone el lenguaje de programación para su uso.
2. **ECMA** : Acrónimo de European Computer Manufacturers Association.
3. **Ranspilador** : Herramienta o programa que traduce un lenguaje en otro para poder
usarlo en plataformas que no son compatibles.
4. **Tabla de kangax** : Nos entrega la compatibilidad de la característica en su respectiva versión y como funciona en diferentes versiones de navegadores y transpiladores(Un lenguaje de programación).
5. **Labels en JS** : [Ejemplo en JS ](/07%20Ejemplos%20Vocabulario/01%20Label/label.js) Son las etiquetas que puedes utilizar para referirte a un bucle en especifico y en base a eso realizar una accion como la de terminarlo, sirven para simplificar la logica y se usan en los bucles anidados asiendo referencia a otro mas externo 

6. **Iteradores** : [Ejemplo en JS ](/07%20Ejemplos%20Vocabulario/02%20Iteradores%20y%20Iterando/iteradores%26iterando.js)El protocolo iterador define una forma estándar que permite producir una secuencia de valores\
Regresan un **Objeto** en el cual tiene una funcion dentro de la clave next: la cual regresa otro objeto con una clave valor y otra done que es un boolean que nos dira si termino la iteracion sobre el objeto por ejemplo:
~~~
function iterador(arr){
    let index = 0;
    return{
        next: function(){
            if(index < arr.length){
                return {value: arr[index++], done: false}
            }else{
                return {done:true}
            }
        }
    }
}
~~~


7. **yield** : [Ejemplo en JS ]() Es una palabra reservada de JS que lo que hace es darnos una forma de retornar parcialmente el generador es decir que se llamara la funcion y se ejecutara y nos retornara un valor diferente tantas veces como yield tenga el generador
8. **Generadores** : [Ejemplo en JS ]()Son funciones que podemos congelar o pausar y luego poder volver a acceder a ellas las cuales mantienen el contexto en el cual se quedaron, el cual posee dentro de su return una palabra reservada llamada yield que es lo que sale en el punto numero 7, para ocupar el generador tenemos que crear una referencia en una constante de la funcion o generador, para entenderlo bien hay que tener claro como funcionan los iteradores y los iterados  
+ Un generador utiliza yield para retornar parcialmente lo que nececitamos
+ Mantiene su contexto mientras la aplicacion se encuentre en ejecucion da igual en que parte de la aplicacion nos encontremos, el puede seguir trabajando en el lugar donde estaba

9. **Symbol y Symbol.iterator** : 
+ **Symbol** : Es un Tipo de dato primitivo nuevo EC6 crea un valor unico y cuando son insertados en objetos como propiedades son privados solo pueden ser accedidos cuando tenemos ese valor unico en alguna parte
+ **Symbol.iterator** : El symbol.iterator cuando es parte de la propiedad de un objeto lo vuelve un iterable y lo que le dice a JavaScript que cuando se intente iterar sobre este objeto devuelva lo que hay en la funcion que no recibe parametros es decir la funcion Symbol.iterator 
10. **Spread Operator** : ... itera sobre un objeto iterable, para que un objeto sea iterbale debe poseer entre sus propiedades el metodo de System.iterator que define como sera iterado dicho objeto
11. **Destructuring** : consiste en la desestructuración de un arreglo u objeto asignando nombres para hacer referencia a las propiedades de dicho elemento y asi poder manipularlas mas facilmente y sin tener que entrar siempre en cada valor con el indice o con el nombre de la propiedad asignado por la persona o programa
~~~
let arr = [1,2,3,4];
['uno','dos','tres','cuatro'] = arr; 
//Otro ejemplo 
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
~~~
12. **Contexto** Contexto de la funcion = Quiere decir lo que sucede dentro de la funcion y si decimos que la funcion guarda el contexto es decir que al volver a ser ejecutada recordara donde y que estaba haciendo y que tiene que hacer ahora 
13. **Algebra de Conjuntos** : Matematicamente un conjunto es una coleccion de objetos que pertenecen a la misma naturaleza por ejemplo un conjunto de numeros pares y otro conjunto de numeros impares, conociendo esto, hay operaciones que se pueden aplicar a los conjuntos de datos en un lenguaje de programación\
+ **Unión** : La unión de dos conjuntos A y B forman El conjunto A U B que contiene los elementos de ambos conjuntos en uno solo
+ **Intersección** : La intersección de A y B es el Conjunto A ∩ B que contiene los elementos en comun de ambos conjuntos
+ **Diferencia** : La diferencia entre A y B es el conjunto A \ B que contiene todos los elementos de A que no se encuentran en B 
14. **Objetos en JavaScript**: Los objetos son el resultado de instanciar una clase, un objeto puede ser cualquier cosa que pueda poseer metodos y atributos los cuales los definire a continuación:
+ **Clase**: Una clase sera como el plano de nuestro objeto es decir que va a poseer dicho objeto que caracteristicas y que funciones podra realizar a la hora de ser instanciado
+ **Instanciar**: Se refiere al proceso por el cual se crea un objeto a partir de una clase es decir el proceso de fabricación del objeto
+ **Metodos y Atributos** : Cada objeto los poseera y seran nuestras caracteristicas como el color de un auto la cantidad de ruedas o puertas, y a su vez poseera metodos que seran todo aquello que puede hacer nuestro objeto en este caso el auto, prender las luces, andar, etc
+ **Constructor**: Cada clase debe tener un constructor aunque sea vacío como buena practica, el constructor nos permitira construir dicho objeto con cierta propiedades que querramos que posea a través de parametros, es decir el color que queramos de nuestro auto, la cantidad de puertas , kilometraje etc
15. **hasOwnProperty** : Es un metodo de cada objeto que nos dira si tiene una valor como propiedad propia o como propiedad prototype un ejemplo seria creando un objeto perro de la clase animal y en el property agregarle la klave edad y el valor de 5 asi:\
`Animal.property.edad = 5;` luego iterarlo con un for in y utilizar el metodo dentro de la iteracion de la siguiente forma
~~~
 for (key in pepe) {
    if (pepe.hasOwnProperty(key)) {
        console.log(key, pepe[key]);
    }
 };
~~~
16. - **Ambito Léxico** = Determina el cuando y donde de nuestro codigo, es decir donde y cuando declaramos una variable, funcion, matriz, nuestro codigo en si\
Por ejemplo:
~~~
function hacerAlgo(){
    var color = 'Rojo';
    return `El color es ${color}`
}
~~~
La variable color esta siendo declarado dentro del ambito lexico de la funcion, o mas bien dicho lexicamente declarada dentro de la funcion hacerAlgo
17. - **Contexto de Ejecución** = Es el codigo que estamos ejecutando en un dicho momento y a su vez a los elementos del cual depende dicho codigo dentro de un ambito léxico\
Fases antes de la ejecucion de un codigo
+ **Tokenización** : la cadena de codigo fuente se divide en varios fragmentos llamados Tokens por ejemplo el codigo var color = 'rojo' se divide en var,color,=,',rojo,'
+ **Parsing** : Analiza la matris de toquens generara anteriormente  la cual se convierte en un arbol llamado AST(Arbol de sintaxis abstracta) de elementos anidados comprendidos por la gramatica del idioma donde estemos trabajando
+ **Generación de codigo Ejeutable** : Ahora el arbol creado en la fase anterior se convierte en codigo de bytes ejecutable el cual luego es optimizado aun mas por un compilador JIT(Just-in-Time).
    ## 2 tipos de contexto de ejecución
+ **Global Execution Context (GEC)** : Cada vez que ejecutamos un codigo de javascript es creado este contexto tambien conocido como contexto de ejecucion base y posee 2 fases al igual que el contexto de ejecucion de funcion 
    - **Fase de creacion** : Son creadas 2 cosas unicas, y se asignan espacio en memoria para variables y funciones y asignacion de valores undefined para variables es decir son solo declaradas ya que aqui es donde sucede el Hositing o elevacion
        - **Objeto Global windows(Para JS del lado del cliente)**
        - **Una variable Global llamada this** 
    - **Fase de ejecición** : Aquí comienza la ejecucion del codigo, se asigna el valor de las variables globales. Hay que tener en cuenta que aqui no se invoca ninguna funcion como en el contexto de ejecucion de funciones
+ **Function Execution Context (FEC)** : Este contexo es creado al invocar a una funcion\
Ejemplo:
~~~
    var perfil = 'Nicolaspal8';

    function mostrarPerfil() {
      console.log(this.perfil); 
    }

    // Llamemos a la función
    mostrarPerfil();
~~~
El Contexto de ejecución de la función pasa por las mismas fases mencionadas anteriormente
    - **Fase de ejecucion** : Tiene acceso al valor llamado arguments que son los argumentos o parametros que recibe nuestra funcion, y dependiendo de donde se cree y como nuestra funcion varia el valor de la variable global this ya que una funcion puede ser declarada o expresada que no es mas que:
~~~
    function declarada(){hacer algo};
    const funcionExpresada = function(){hacer algo};
~~~

Tambien depende el tipo de funcion que utilizamos si es una funcion normal o una funcion flecha pero eso esta explicado con detalle en la seccion numero 3 en funciones arrow\
- **Importante Tener en cuenta** : Cuando una función invoca a otra función se crea un nuevo contexto de ejecucion de funcion para la nueva llamada de funcion. y cada contexto de ejecucion de la funcion determina el alcanze que tienen las variables utilizadas dentro de dichas funciones 
18. **Hoisting en JS** : 