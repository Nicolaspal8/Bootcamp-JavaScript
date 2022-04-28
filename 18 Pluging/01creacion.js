/* Creación de un Plugin
Para poder crear un plugin es necesario aplicar y conocer ciertas reglas que son necesarias
para respetar la estructura de un plugin como tal. Por ejemplo:

● El archivo que crees con el código de tu plugin lo debes nombrar como
jQuery.[nombre de tu plugin].js. Por ejemplo jQuery.desaparece.js.

● Añade las funciones como nuevos métodos por medio de la propiedad fn del objeto
jQuery, para que se conviertan en métodos del propio objeto jQuery.

● Dentro de los métodos que añades como plugins, la palabra "this" será una
referencia al objeto jQuery que recibe el método. Por tanto, podemos utilizar "this"
para acceder a cualquier propiedad del elemento de la página con el que estamos
trabajando.

● Debes colocar un punto y coma ";" al final de cada método que crees como plugin,
para que el código fuente se pueda comprimir y siga funcionando correctamente.
Ese punto y coma debes colocarlo después de cerrar la llave del código de la
función.

● El método debe retornar el propio objeto jQuery sobre el que se solicitó la ejecución
del plugin. Esto lo podemos conseguir con un return this; al final del código de la
función.


● Se debe usar this.each para iterar sobre todo el conjunto de elementos que puede
haber seleccionado. Recordemos que los plugins se invocan sobre objetos que se
obtienen con selectores y la función jQuery, por lo que pueden haberse seleccionado
varios elementos y no sólo uno. Así pues, con this.each podemos iterar sobre cada
uno de esos elementos seleccionados. Esto es interesante para producir código
limpio, que además será compatible con selectores que correspondan con varios
elementos de la página.

● Asigna el plugin siempre al objeto jQuery, en vez de hacerlo sobre el símbolo $, así
los usuarios podrán usar alias personalizados para ese plugin a través del método
noConfict(), descartando los problemas que puedan haber, si dos plugin tienen el
mismo nombre. */