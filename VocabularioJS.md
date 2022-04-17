# Vocabulario JS

[Syntaxis de Markwdown](https://daringfireball.net/projects/markdown/syntax)\
[Guia MarkDown](https://pandao.github.io/editor.md/en.html)

1. - **Built-in functions** : Son las funciones que dispone el lenguaje de programación para
su uso.
2. - **ECMA** : Acrónimo de European Computer Manufacturers Association.
3. - **Ranspilador** : Herramienta o programa que traduce un lenguaje en otro para poder
usarlo en plataformas que no son compatibles.
4. - **Tabla de kangax** : Nos entrega la compatibilidad
de la característica en su respectiva versión y como funciona en diferentes versiones de navegadores y transpiladores(Un lenguaje de programación).
5. - **Labels en JS** : [Ejemplo en JS](/07%20Ejemplos%20Vocabulario/01%20Label/label.js) Son las etiquetas que puedes utilizar para referirte a un bucle en especifico y en base a eso realizar una accion como la de terminarlo, sirven para simplificar la logica y se usan en los bucles anidados asiendo referencia a otro mas externo 

6. - **Iteradores** : [Ejemplo en JS](/07%20Ejemplos%20Vocabulario/02%20Iteradores%20y%20Iterando/iteradores%26iterando.js)El protocolo iterador define una forma estándar que permite producir una secuencia de valores\
 Regresan un **Objeto** en el cual tiene una funcion dentro de la clave next: la cual regresa otro objeto con una clave valor y otra done que es un boolean que nos dira si termino la iteracion sobre el objeto


7. - **yield** : [Ejemplo en JS]() Es una palabra reservada de JS que lo que hace es darnos una forma de retornar parcialmente el generador es decir que se llamara la funcion y se ejecutara y nos retornara un valor diferente tantas veces como yield tenga el generador
8. - **Generadores** : [Ejemplo en JS]()Son funciones que podemos congelar o pausar y luego poder volver a acceder a ellas las cuales mantienen el contexto en el cual se quedaron, el cual posee dentro de su return una palabra reservada llamada yield que es lo que sale en el punto numero 7, para ocupar el generador tenemos que crear una referencia en una constante de la funcion o generador, para entenderlo bien hay que tener claro como funcionan los iteradores y los iterados  
    - Un generador utiliza yield para retornar parcialmente lo que nececitamos
    - Mantiene su contexto mientras la aplicacion se encuentre en ejecucion da igual en que parte de la aplicacion nos encontremos, el puede seguir trabajando en el lugar donde estaba

9. - **Symbol y Symbol.iterator** : Tipo de dato primitivo nuevo EC6 crea un valor unico y cuando son insertados en objetos como propiedades son privados solo pueden ser accedidos cuando tenemos ese valor unico en alguna parte
- El symbol.iterator cuando es parte de la propiedad de un objeto lo vuelve un iterable y lo que le dice a JavaScript que cuando se intente iterar sobre este objeto devuelva lo que hay en la funcion que no recibe parametros es decir la funcion Symbol.iterator 
10. - **Spread Operator** 
11. - **Destructuring** 
12. - **Contexto** Contexto de la funcion = Quiere decir lo que sucede dentro de la funcion y si decimos que la funcion guarda el contexto es decir que al volver a ser ejecutada recordara donde y que estaba haciendo y que tiene que hacer ahora 
13. - ** ** 