# RegExp (Regular Expressions)
## Modificadores
#### Los Modificadores son ecpresiones regulares que ayudan al tipo de busqueda que queremos realizar
1. **i (insensitive)**: Se utiliza para que
el patrón de búsqueda no discrimine entre mayúsculas y minúsculas. /leopardo/i \ Traera todas las palabras leopardo sin importar si contiene caracteres en mayuscula o minuscula
2. **g (global)** : Busca las coicidencias posibles dentro de una cadena de texto en funcion a un patrón dato, si no utilizamos este modificador solo se tomara la primera coincidencia encontrada \ 
Y podemos agregar ambos modificadores asi /palabra/ig da igual si esta antes o después de otro modificador 
3. **m (multi line)** : Este modificador permite encontrar coincidencias al principio y al final de cada linea de texto utilizando los operadores $ y ^ \ 
Por ejemplo: /leopardo$/igm  //Cada vez vamos sumando los modificadores para ver que se pueden utilizar en conjunto con otros \ 
Lo que traera resultado textos como 
+ el pequeño leopardo
+ algún día crecerás, pequeño leopardo
+ el león que enfrentó al leopardo
+ el gato que se creía leopardo
#### No validas
+ el leopardo temeroso
corría por la jungla
+ el conejo señaló al leopardo:
tú eres el culpable leopardo. \

# Meta Caracteres en Expresiones Regulares
Son caracteres especiales abreviados, utilizados para implementar un patron de busqueda 
1. **.** : El caracter de punto "." es como un comodín ya que busca un caracter cualquiera dentro de un patrón el cual tambien puede ir acompañado de otro patron que se necesite validar \ 
Ejemplo: \ 
        `const patron = /.perro./gim;`
        `const texto = 'el_perro_abandonado';`
        `console.log(texto.match(patron)); //["_perro_"]`
2. **\w** : Nos permite encontrar coincidencias con caracteres númericos y letras por ejemplo \
        `const patron = /\w/gim;`
        `const texto = 'juan carlos :-)';`
        `console.log(texto.match(patron)); //(10) ["j","u","a,"n","....o","s"];`
Y aplicada de manera inversa con \W en mayusculas obtendremos todos los que no estan en el output anterior // (5) [" ", " ", ":", "-", ")"]
3. **\d** : Nos permite encontrar las coincidencias solo con caracteres numericos por ejemplo: \
        `const patron = /\d/gim;`
        `const texto = 'mañana cumplo 20 años';`
        `console.log(texto.match(patron)); // (2) ["2", "0"]`
        

