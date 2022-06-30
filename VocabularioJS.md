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
14. **Objetos en JavaScript**: [Ubicación de carpeta ejemplo de funcionamiento (Carpeta 13)](13%20Objetos/objeto.js)Los objetos son el resultado de instanciar una clase, un objeto puede ser cualquier cosa que pueda poseer metodos y atributos los cuales los definire a continuación:
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
16. - **Ambito Léxico** = Determina el cuando y donde de nuestro codigo, es decir donde y cuando declaramos una variable, funcion, matriz, nuestro codigo en si, tambien se define como un objeto el cual almacena las variables a através de pares de llaves y valor de la misma forma que un diccionario y pertenece al contexto de ejecucion.\
El lugar donde se guardan las variables o datos es llamado registro de entorno o enviroment record y cada entorno lexico tiene un puntero al entorno lexico exterior donde fue creado
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
    - **Fase de ejecución** : Aquí comienza la ejecucion del codigo, se asigna el valor de las variables globales. Hay que tener en cuenta que aqui no se invoca ninguna funcion como en el contexto de ejecucion de funciones
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
18. **Hoisting en JS** : Conciste en el proceso que realiza el motor de JavaScript por el cual las variables var y las funciones declaras son elevadas a la parte inicial del codigo siendo asignadas en memoria y declaradas lo que sucede en el contexto de ejecucion global en la fase de creacion, un ejemplo de como podemos aplicar esto a las funciones declaradas ![Ejemplo de Hoisting](/27%20Hoisting/01hoisting.js)
19. **Programación Basada en Prototipos** : Es un estilo de Programación Orientada a Objetos, que permite la creación de un objeto sin definir explícitamente su clase, derivando sus atributos al agregar propiedades y métodos a una instancia de otra clase o agregarlos a un objeto vacío.
20. **Abstracción** : Proceso por el cual se descompone un objeto en partes más simples, para hacer más fácil la comprensión del mismo. y en vez de pensar en como funciona algo solo preguntamos que es lo que necesitamos es decir responde mas al ¿Que? que al ¿Como?
21. **Azúcar Sintáctico** (Syntactic Sugar): Es un término acuñado por Peter J Landin en 1964 para referirse a los añadidos a la sintaxis de un lenguaje de programación diseñados para hacer algunas construcciones más fáciles de leer o expresar. Como el caso de la palabra reservada Class.
22. **Encapsulación** : Mecanismo de la Programación Orientada a Objetos por el cual se oculta información propia de un objeto al entorno exterior a él, con el fin de mantener su integridad. a su vez este principio nos dice que debemos aplicar metodos a través de los cuales podemos acceder a las variables de un objeto ya sea para modificarla o leerla y solo podemos acceder a ellos a través de estos metodos que se le conocen como los getter y setter y asi impedir la modificacion directa de la propiedad de un objeto.
23. **Mutabilidad** :  Capacidad de un valor u objeto para cambiar su valor o estado.
24. **Node** : Es un entorno JavaScript que permite ejecutar código en el servidor de manera asíncrona.
25. **NPM** :  Node Package Manager, es un gestor de paquetes de JavaScript que facilita el trabajo con cualquier librería disponible.
26. **POO** :  Programación Orientada a Objetos. Es un paradigma de programación, es decir, una manera que permite diseñar un programa y pensar en los datos en términos de objetos del mundo real, con propiedades y comportamientos.
27. **Programación Basada en Prototipos** :  Es un estilo de Programación Orientada a
Objetos, que permite la creación de un objeto sin definir explícitamente su clase,
derivando sus atributos al agregar propiedades y métodos a una instancia de otra
clase o agregarlos a un objeto vacío.
28. **Pureza** :  Propiedad de una función. Se considera que una función es pura cuando noproduce efectos secundarios y cuando produce los mismos resultados cada vez quese le pasan los mismos argumentos.
29. **Patron de Diseño** : El patron de diseño es el que nos dice como esta construida una aplicacion o en base a que fundamentos se desarrollara esta, un ejemplo de un patron de diseño serie el ocupado en sitios web llamado MVC (Model View Controller) Modelo Vista Controlador
30. **Transpilación** : Transpilacion quiere decir que un programa es adaptado a codigo funte de versiones anteriores del mismo programa para poder ser interpretado por los navegadores o aplicaciones que aun no soportan las nuevas versiones y escrituras o cambios en la sintaxis
31. **Interprete** : Un interprete es el que genera la traduccion de nuestro programa para ser entendido directamente por el computador a diferencia de un compilador que genera un archivo ejecutable un interprete es como una traduccion en tiempo real y mas rapida que un compilador
32. **Prototipo** : Su definicion como palabra quiere decir que representa a el ejemplar original o al primer molde en el que se fabrico alguna cosa u objeto, tambien significa que es el modelo mas representativo de algo según la RAE
33. **Prototype** : [Aqui un buen video el cual ayudará mejor a la comprension del  Prototype](https://www.youtube.com/watch?v=6gmYapa-KBY&ab_channel=JuanJoseOrtiz)El prototype en si de un objeto es heredado por defecto del Object Prototype, el cual es agregado al momento de crear dicho objeto por el motor de javascript, en si cada objeto tendra dentro de sus propiedades el objeto o protype que es lo mismo ya que es un objeto y una propiedad del objeto, tendra el constructor del objeto creado y la propiedad \__proto__ que es otro objeto que contiene a su vez un objeto mas\
Puntos importantes a tener en cuenta:
+ Al crear un objeto y agregar ciertas propiedades las cuales pueden contener diferentes tipos de datos hasta una funcion se le sera agregada a todas las instancias creadas de dicho objeto por defecto, es decir que cada nuevo objeto que creemos a partir de una funcion constructora o de una clase esta extendera las caracteristicas presentes en el prototype a todas los objetos creados a partir de ella, y si en el trascurso de nuestro codigo modificamos o agregamos mas propiedades a el prototype de un objeto creado a partir de la clase base entonces automaticamente seran agregadas a todos los otros objetos que vengan de dicha clase o constructor
+ El motor de JavaScript cuando queremos invocar o hacer referencia a una propiedad de un objeto este busca en las propiedades que aregamos nosotros a través del constructor y por defecto tambien busca en el prototype de dicho objeto es decir que si en el prototype agregamos una funcion no sera necesario acceder a ella de la forma convencional a través del nombre de las diferentes propiedades externas hasta llegar a el objeto que contiene o la propiedad(cada vez que hablamos de objeto o propiedad es lo mismo porque una propiedad a su vez es un objeto que contiene mas objetos o propiedades)si no que solo necesitaremos escribir el nombre de dicha funcion o propiedad nueva agregada antecedido del nombre de nuestro objeto ya que por defecto el motor de JavaScript hará un escaneo en dichas propiedades a parte de las que ya le agregamos nosotros como primera capa 
34. **Encapsulación** : Es el proceso de proteger las propiedades de los estados internos es decir de los objetos para solo poder accedidas y modificadas a través de los getters y setter y no directamente es decir es un tipo de aislacion
35. **Object.defineProperty** : [El ejemplo esta en carpeta 13 archivo new](13%20Objetos/02new.js)(this,'nombreVariable',{get o set
Al trabajar con este metodo para definir propiedades, trabajamos con los parametros pasados dentro de la funcion defineProperty y le asignamos una propiedad con el nombre de la variable y luego un objeto con sus respectivos set y get y a la hora de llamar al get o set no hará falta especificar si es por ejemplo objeto.nombrePropiedad.set o .get si no que solo js identificara a cual nos referimos ya que uno recibe parametros y el otro no recibe parametros entonces si le enviamos paramatros asimilara que se llama al set y si no recibe ningún parametro hará referencia al getter
36. **UML** : Unifed Modeling Language o lenguaje unificado de modelado, es un lenguaje el cual se usa para modelar varios procesos en informatica que permite la interaccion de clientes y programadores teniendo una vista del funcionamiento mas clara del codigo y cual sera su estructura a seguir
    + Diagramas de Comportamiento : Muestra como se comporta el sistema de forma dinamica, es decir los cambios que experimenta en su ejecucion y la interaccion con otros sistemas del cual hay 7 subtipos
        - Diagrama de Actividad
        - Diagrama de Casos de uso de una maquina de estados y de interaccion que esta se subdivide en :
            + Diagrama de secuencia global de interaccion
            + de comunicacion
            + de tiempos
        - Diagrama de Estructura : Muestra la estructura estatica de un sistema y sus partes en sus diferentes niveles de abstraccion del cual surgen 6 subtipos
            + Diagrama de clases
            + De componentes
            + De objetos
            + De estructura compuesta
            + De despliegue de paquetes
El mas utilizado en la POO es el diagrama de Clases que representa clases dentro del sistema, atributos y operaciones asi como la relacion entre las diferentes clases
37. **Cardinalidad** : Nos dice la cantidad de objetos que pueden estar asociados a otros objetos es decir que especificamos en un proyecto que una empresa que seria un objeto no puede tener mas de 50 trabajadores es decir objetos de la clase trabajador o persona
+ Existen diversas formas con las que podemos asociar múltiples objetos, dos formas
sencillas de lograrlo son con arrays y hashes (objetos literales)
38. **Tipos de datos** : Principalmente se dividen entre los primitivos y los tipos de objeto <br>
Ejemplo:
~~~
console.log(typeof true);
console.log(typeof 2);
console.log(typeof '');
console.log(typeof function () {});
console.log(typeof {});
console.log(typeof Symbol());
console.log(typeof undefined);
~~~
![Tipos de datos en js](img/04Tipos%20de%20datos.png)

39. **Diagrama de clases** : 
+ Parte Superior: Inidica el nombre de la clase
+ Division Central: se refiere a los atributos de las clases indicando el nombre y el tipo de dato deparado por dos puntos ":"
+ Pie de Tabla: Describe los metodos a emplear y el tipo de dato que retorna
![Imagen de daigrama de clases](img/05%20diagrama%20de%20clases.png)
40. **Retrocompatibilidad** : Es la capacidad de un sistema para ejecutar código que fue escrito para una versión más antigua del sistema.
41. **Babel** : Babel, el transpilador que habla todos los lenguajes, sirve para hacer correr codigo de lenguajes con nuevas versiones en navegadores que aun no soportan estas, traduciendo de lo nuevo a lo viejo a codigo fuente
42. **Transpilador** : Un transpilador es básicamente lo mismo que un compilador, con la diferencia que en vez de 
producir lenguaje binario para su ejecución directa por un CPU, produce código fuente que hace lo 
mismo, pero escrito en otro lenguaje (o en este caso, otra versión).
43. **Azucar sintáctico** : En ES6 se agregó “class” como azúcar sintáctico, es decir, una forma más abreviada y sucinta 
de definir funciones constructoras y sus prototipos.\
Cuando se habla de azúcar sintáctico, nos referimos a que si bien ES6 implementa clases y 
otros aspectos del paradigma orientado a objetos, es sólo a nivel de sintaxis, ya que como 
sabemos JavaScript está orientado a prototipos.
44. **IFE** : Las expresiones de función ejecutadas inmediatamente (Immediately-invoked
function expressions o IIFE) son funciones que se ejecutan tan pronto como se
definen.
45. **Closures** : Es una funcion autoejecutable o no la cual devuelve varias variables o funciones las cuales puedes luego trabajar con ellas, engloba toda la funcion en parentesis y al final la hace autoejecutable a través de los parentesis "()", tambien se define como una funcion que la cual posee funciones anidadas y variables a niveles de scope superior las cuales se anclan a las funciones anidadas y asi podemos acceder a ellas, modificarlas o leerlas a través de las funciones anidadas que posee dicha funcion.\
Aparte de ser definida como una funcion puede ser definida como una variable que almacena una funcion, al estudiar las closures hay que tener en cuenta los conceptos que forman parte de esta como:
+ Cada vez que creamos una funcion o hacemos referencia a una desde una variable distinta, se es creado un nuevo contexto de ejecucion con un nuevo entorno lexico
+ entorno lexico el cual esta definido mas abajo
+ Contexto de ejecucion
+ Caracteristicas de las closures
    + Nos permite crear variables a las cuales solo puedo acceder a través de los metodos y no directamente a ella
    + Sirve como una fabrica de funciones ya que puedo utilizar una funcion y objetener diferentes resultados en base a los parametros que les pasamos 
    + las funciones anidadas pueden interactuar con los argumentos de la funcion y tambien si le agregamos un valor por defecto a los arguments
+ **Cuidado como las usas** : Si bien su uso puede optimizar nuestro codigo cuando veamos que seria bueno utilizar una closure tambien hay que tener cuidado como manejamos los datos o variables creadas porque por ejemplo si creamos una variable en el entorno lexico anterior a la funcion anidada dicha varible sera almacenada en memoria tantas veces como utilizemos dicha funcion y la almecenemos en otra variable por lo que es recomendable crear los parametros por defecto en el entorno lexico donde se creo la clausura y no en el mismo asi solo se es creada una vez dicha variable y luego referenciada desde adentro de la funcion aciendo uso solamente de lo necesesario y no creando copias en la memoria de dicha variable
~~~
const miContador=(function(){
    let _contador=0;
    function incrementar (){
      return _contador++;
    }
    function decrementar (){
      return _contador--;
    }
    function valor(){
      return _contador;
    }
    return{
      incrementar,
      decrementar,
      valor
      }
  })();  
  console.log(miContador.incrementar())
  console.log(miContador.incrementar())
  console.log(miContador.incrementar())   
~~~
46. **Polimorfismo** : En JavaScript el polimorfismo es la posibilidad de llamar a metodos en comun sin afectar a los otros objetos
47. **Encapsulamiento** : Es el proceso de aislar nuestras variables presentes en las clases para que no puedan ser accedidas y modificadas directamente si no que para hacerlo tendermos que hacer a través de metodos que predefiniremos dentro de la clase, en java seria simplemente creando variables privadas junto con los getter y setter pero como en JavaScript no tenemos las palabras reservadas de private para las variables(Ahora si y se utiliza anteponiendo un # antes de la variable como #mivariable) lo que hacemos es crear las variables dentro del constructor y tratarla como tal, no como propiedad haciendo referencia al this.variable si no que como let variable y crearemos los metodos para acceder o modificar esa variable dentro del constructor ya que el alcanze de esa variable es local y debe ser accedida desde ahi y luego fuera del constructor crearemos otros getter y setter los cuales retornaran thi.get o this.set que fue como lo definimos dentro del constructor
48. **Sincrono** : Es cuando los procesos dentro del programa se ejecutan uno tras otro esperando que el anterior termine para que el siguiente pueda ser ejecutado
49. **Asincrono** : Es cuando los procesos de ejecutan al mismo tiempo y no necesitan esperar a los otros para poder ser ejecutados
50. **Concurrencia** :  La concurrencia es el conjunto de cosas que suceden juntas pero pueden haber empezado mas tarde o temprano y terminar antes o despues pero que se topan en algún punto si progresan simultáneamente
51. **Paralelismo** : Es cuando dos o mas tareas se ejecutan exactamente al mismo tiempo
52. **Race condition** : Es un concepto que se interpreta como la ejecucion de varios procesos o eventos a la vez modificando datos  de forma concurrente sin tener la certeza sobre cuales seran los valores finales retornados por estos procesos lo cual puede producir incongruencias en nuestro codigo o errores inesperados
53. **Callback** :Es una funcion que se va a ejecutar luego de que otra lo haga o tambien Se le conoce como callback a la referencia a una funcion dentro de los parametros de otra o simplemente a dicha funcion ejecutada dentro de los parametros de otra funcion para utilizar lo que retorne la funcion pasada como callback en los parametros 
54. **setTimeOut** : Es un metodo el cual nos permite ejecutar una funcion en un lapso de tiempo expresado en milisegundos, el primer parametro que recibe es la referencia a la funcion o la funcion misma pero cuidado porque si es una referencia no debe tener los parentesis ya que se ejecutara tan pronto como tu programa por eso solo debe ser una referencia a dicha funcion, tambien le podemos pasar mas parametros a la funcion a través de los prametros subsiguientes al tiempo de ejecución
`setTimeout(function(){}, milliseconds, param1, param2, ...)`
 + Su ejecución no bloquea el stack, por lo que es una función que se procesa de forma asíncrona.

55. **Threads** : Es lo que define en cuanto al tiempo y espacio de ejecución como trabajara nuestro programa ya sea dependiendo del lenguaje de programación que estemos utilizando por ejemplo JavaScript es solo de un hilo pero hay otros que son multi hilo (Single Thread, Multi Thread) entonces sera capaz de ejecutar un proceso a la vez pero como se implementa entonces la asincronia? si son varios procesos pasando al mismo tiempo, mas abajo la explicación
56. **CallStack** : LIFO (First in Last Out) Es la pila de llamadas que se genera al ir ejecutandose un programa en JavaScript la cual almacena las instrucciones o sentencias a ejecutar\
![CallStack Imagen](/img/07%20CallStack.png)
57. **Motor V8 de JavaScript** :
El motor V8 es un motor en tiempo de ejecución de ensamblaje web de código abierto y alto rendimiento para JavaScript escrito en C ++ por Google. La mayoría de los navegadores ejecutan JavaScript usando el motor V8, e incluso el popular entorno de tiempo de ejecución de node js también lo usa.\
En simples palabras, el V8 es un programa C ++, que recibe código JavaScript, lo compila y lo ejecuta.\
El V8 hace dos cosas importantes;
 - Asignación de memoria de pila
 - Contexto de ejecución de la pila de llamadas
Lamentablemente, nuestra sospecha estaba equivocada. El V8 tiene solo una pila de llamadas, piense en la pila de llamadas como el hilo.
Un hilo === una pila de llamadas === una ejecución a la vez.
58. **Api web** : Es lo que nos permite que JavaScript sea un lenguaje asincrono y no bloqueante es decir que puedan ejecutarse varios procesos a la vez, cuando el motor de JS V8 detecta codigo de la ApiWeb es decir codigo asincrono en su mayoría, se lo pasa a esta para no bloquear el callstack y poder seguir ejecutando sus procesos tranquilamente en un solo hilo, y la ApiWeb es la que se encarga del otro codigo el cual luego es devuelto a una call Queue o Cola de espera que luego devolvera nuestro bloque de instrucciones al CallStack en otras palabras.\
Los navegadores proporcionan eventos, temporizadores y solicitudes Ajax en el lado del cliente y, a menudo, se denominan API web. ¡Son los que permiten que el JavaScript de un solo subproceso sea no bloqueante, concurrente y asincrónico! ¿Pero cómo?\
Hay tres secciones principales para el flujo de trabajo de ejecución de cualquier programa JavaScript, la pila de llamadas(CallStack), la API web y la cola de tareas.
59. **Cola de tareas o Call Queue** : Es donde llega el codigo devuelto por la API Web, Una cola es una estructura de datos que funciona según el principio Primero en entrar, primero en salir, de modo que a medida que las tareas se introducen en la cola, salen en el mismo orden. Las tareas que han sido ejecutadas por las API web, que se envían a la cola de tareas, luego regresan a la pila de llamadas para imprimir su resultado.
60. **Event Loop** : El bucle de eventos es un proceso que espera a que la pila de llamadas se elimine antes de enviar devoluciones de llamada de la cola de tareas a la pila de llamadas. Una vez que la pila está limpia, el ciclo de eventos se activa y verifica la cola de tareas para ver si hay devoluciones de llamada disponibles. Si hay alguno, lo empuja a la Pila de llamadas, espera a que la Pila de llamadas se borre nuevamente y repite el mismo proceso.\
El diagrama muestra el flujo de trabajo básico entre Event Loop y Task Queue.\
![Diagrama de Event Loop y Task Queue](/img/08%20Event%20Loop.png)
61. **Memory Heap** : El Memory Heap concentra todas los objetos y datos dinámicos, como las variables y
constantes que debe sostener en la memoria durante la ejecución de las aplicaciones.
62. **API** : Aplication Programing Interface es la interfaz que nos permite mover datos entre serivdores lo cual gracias a esto podemos utilizar diversos recursos disponibles en la red para implementarlos en nuestras aplicaciones, a su vez hay 4 tipos de API:
    + **API XML RCP**:
    + **API JSON RCP**:
    + **API SOAP**: Simple Object Access Protocol Solo soporta tipo de datos en formato XML, y sirve para la comunicacion de dos procesos los cuales intercambian datos XML
    + **API REST**: Representational State Transfer Interfaz sobre sistemas a través del protocolo HTTP para obtener datos o generar operaciones respecto a dichos datos en todos los formatos posibles como XML y JSON junto con este tipo de API vienen otros conceptos como:
        - Cliente/Servidor : Es un tipo de arquitectura o modelo por el cual dos o mas dispositivos se comunican entre si y transfieren y manipulan datos, principalmente tenemos un cliente el cual hara request o peticiones a un servidor a través de un tipo de protocolo, generalmente HTTP (Hyper Text Trasnfer Protocol) y luego el servidor respondera con un response o respuesta, junto con esto tenemos las 4 operacinoes principales presentes en la arquitectura de cliente/servidor:
            + Get : Obtener
            + Post : Crear
            + Put : Editar
            + Delete : Eliminar
        - Sin estado
        - Cache
        - Sistema de Capas
        - Interfaz uniforme
        - Codigo de baja demanda
63. **^** : Caret es el nombre del simbolo muchas veces son agregados al comienzo de las versiones de las dependencias al importar algun paquete con npm install y esto dira que se  utilizara la ultima version disponible a partir del rango inicial y el siguiente como 1.1 1.2 1.3 hasta 1.9 es decir que si pongo ^1.1 y esta disponible la 1.9 usara la 1.9 pero el problema de esto es que si ocurre que una version del proyecto es maliciosa afectara al nuestro ya que instalara la ultima y no tendremos control directo sobre esta ya que le decimos que instale la ultima disponible por eso si le quitamos el caret solo intalaremos la versiona especificada y tambien usaremos esa para direferentes proyectos que requieran esa dependencia 
64. **npm info nombre_dependencia** : te dice informacion sobre un proyecto en especifico para usarlo como dependencia o como sea, sirve para ver por ejemplo en que version va dicho proyecto
65. **Node js** : entorno de ejecucion para ejecutar js del lado del servidor
+ single Thread
+ utiliza el motor v8 de google al igual que js
+ crece hacia los lados y no tanto verticalmente
+ creado en 2009 
+ npm creado en 2010 como gestor de paquetes para ser utilizados por node
+ usa la libreria libuv : Le permite a node enviar el codigo asincrono a esta libreria y trabajarlo desde allí con el proceso similar del event loop de javascript en el navegador en este caso libuv sera como la api web que se encarga del codigo asincrono
66. **Express** : infraestructura de aplicaciones
67. **middleware** : son un punto intermedio de validacion creado entre una solicitud a una ruta especifica, es un metodo el cual ustilizamos el objeto express que guardamos generalmente en una constante llamada app y utilizamos el metodo
~~~ 
app.use(Path, (req,res, next) => {
    //Validaciones
    next()
})
~~~
    El metodo next es como decir si pasa la prueba puede seguir ya que generalmente en este punto validamos algo como alguna clave de autorización
68. **Dependencias y gestores** : Primero, es importante conocer qué es una dependencia. Una dependencia corresponde a
un módulo externo de código, librería o paquete de código que presta o desarrolla una
función específica. Las dependencias pueden estar empaquetadas dentro de un solo
archivo o en un conjunto de archivos, carpetas o algún otro tipo de estructura. La librería
jQuery (https://jquery.com/) es un conocido ejemplo de dependencia, ya que provee un
conjunto de funcionalidades para gestionar el DOM de una página web con una sintaxis
simplificada.
Entonces, un gestor de dependencias es un software especializado que es capaz de
coordinar la integración de dependencias en otros paquetes de software. Para lograr esto,
los softwares operan bajo archivos de configuración que condicionan el cómo van a actuar,
logrando almacenar scripts de ejecución, versiones específicas de dependencias,
configurando ambientes de ejecución, entre otros.
69. **Protocolo SMTP** : Simple Mail Transfer Protocol 
70. **Semantic version** : son las versiones de las dependencias de los proyectos las cuales estan representadas por 3 numeros 1.1.1 el ultimo indica los parches o cosas no tan grandemente significativas, el penultimo indica ya cambios un poco mas significativos como agregar nuevas cosas o utilidades y el primero ya indica un cambio que si que afecta a la forma como utilizamos la libreria o paquete 
71. ** ** :
72. ** ** :
73. ** ** :
74. ** ** :
75. ** ** :
76. ** ** :
77. ** ** :
78. ** ** :
79. ** ** :
80. ** ** :
81. ** ** :
82. ** ** :
83. ** ** :
84. ** ** :
85. ** ** :
86. ** ** :
87. ** ** :
88. ** ** :
89. ** ** :
90. ** ** :
91. ** ** :
92. ** ** :
93. ** ** :
94. ** ** :
95. ** ** :
96. ** ** :
97. ** ** :
98. ** ** :
99. ** ** :
100. ** ** :