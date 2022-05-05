Paso 1: Dirígete a un directorio donde quieras guardar tu código fuente, crea una
carpeta llamada fullstack-entorno y entra en ella utilizando la terminal de tu sistema
operativo:
mkdir fullstack-entorno // se crea la carpeta
cd fullstack-entorno // entremos dentro de la carpeta creada

Paso 2: Una vez dentro lo primero que haremos será inicializar nuestro gestor de
paquetes NPM, a través del comando npm init -y. Luego de unos segundos,
saldrá por la terminal lo siguiente:
~~~
{
"name": "fullstack-entorno",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}
~~~
 Paso 3: Con esto tenemos lo que necesitamos para descargar e instalar Babel en
nuestro computador mediante la líneas de comando de la terminal, siendo estas:

~~~
npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill
npm i core-js
~~~
La primera línea instala el comando Babel, la API principal y el preset de transpilación que
usarás. Hoy en día, env es el preset principal de babel y contiene instrucciones para
transpilar todas las funcionalidades presentes en el lenguaje. Mientras que
@babel/polyfill y core-js, instala una colección de polyfills para ser incorporados al
código publicado a los navegadores. Un polyfill es un código escrito en ES5 que rellena
partes de la API que han sido modificadas como parte de ES6, pero que aún no han sido
implementadas por todos los navegadores.

Paso 4: Una vez se haya instalado todo, con tu editor de texto de preferencia vuelve a
revisar tu package.json, por lo que el código en ese archivo en específico se vería así:
~~~
{
"name": "fullstack-entorno",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/cli": "^7.12.1",
"@babel/core": "^7.12.3",
"@babel/polyfill": "^7.12.1",
"@babel/preset-env": "^7.12.1"
},
"dependencies": {
"core-js": "^3.7.0"
}
}
~~~
Si te fijas hay dos tipos de dependencias en NPM: dependencies y devDependencies.
“dependencies” almacena los nombres y las versiones de las dependencias necesarias para
que el programa corra (como por ejemplo jQuery, Angular, VueJS y React).
“devDependencies” almacena todas las herramientas que, aunque no son necesarias
directamente para la ejecución del programa, son necesarias para armarlo. Por eso, es que
Babel va mayoritariamente en devDependencies, con la excepción de cosas que se ejecutan
como parte del código que usamos (como los polyfill). Por ende, ya tenemos instalado
Babel, pero no está listo para usar, en el siguiente punto continuaremos con el ejercicio
quedando en el paso 5.

Una vez realizados los pasos anteriores, lo primero es crear una nueva
carpeta con los archivos de JavaScript, la carpeta creada en los pasos anteriores fue
denominada fullstack-entorno, ahora debemos crear la siguiente estructura de
carpetas:

fullstack-entorno
|- src
    |- for-anidados.js
    |- rest-spread-objetos.js

Paso 6: Si no has ingresado a la carpeta, ingresa mediante el siguiente comando por
la terminal, pero si ya estás dentro de la carpeta, omite este paso:
~~~
cd fullstack-entorno
~~~

Paso 7: Ahora creamos la estructura, de la siguiente manera:
~~~
mkdir src
cd src
~~~
Paso 8: Luego, creamos los archivos .js: for-anidados.js y
rest-spread-objetos.js, en la carpeta src y para cada uno de ellos copiamos el
código a continuación:
~~~
/*** archivo src/for-anidados.js ***/
for (let i = 0; i < 3; i++) {
console.log(i);
let log = '';
for (let i = 0; i < 3; i++) {
log = i;
console.log(log);
};
};
for (let i of [1, 2, 3, 4, 5]) {
    console.log(i);
}

/*** archivo src/rest-spread-objetos.js ***/
function combinarObjetos(a, b) {
return { ...a, ...b };
}
let a = { unaLlave: "un valor" },
b = { otraLlave: "otro valor" },
combo = combinarObjetos(a, b);
console.log(combo);
~~~

Paso 9: En tu terminal, dentro del directorio actual: fullstack-entorno, escribe
npx babel src/ -d dist/, lo que compilará todos los archivos .js de la carpeta src
y dejará el resultado en la carpeta dist/. Es decir, con el comando anterior, Babel se
encargará de transpilar el código existente, crear una nueva carpeta y pasar los
códigos ya modificados dentro de esa carpeta en nuevos archivos con el mismo
nombre. Si la operación fue exitosa podrás observar el siguiente output en el terminal
(el tiempo puede variar): Successfully compiled 2 files with Babel
(373ms).

 Paso 10: Luego de un minuto aparecerá un mensaje diciendo que todo se compiló
correctamente. Con el editor de código dentro de la carpeta dist/ puedes observar
los archivos js. y veremos que son prácticamente iguales. Esto era de esperarse. ES6
comenzó a salir en 2015 y ya hay muchas funcionalidades implementadas en todos
los entornos que ejecutan JavaScript. Por defecto Babel solo transpila lo necesario y
si queremos que transpile todo hay que indicarselo en un archivo de configuración.
● Paso 11: Ahora crearemos un nuevo archivo en la raíz del proyecto, o sea dentro de la
carpeta fullstack-entorno, el archivo que crearemos se llamará
babel.config.json, con el siguiente contenido
~~~
{
"presets": [
[
"@babel/env",
{
"targets": {
"edge": "17",
"firefox": "60",
"chrome": "67",
"safari": "11.1"
},
"useBuiltIns": "usage",
"corejs": "3.6.4",
"forceAllTransforms": true
}
]
]
}
~~~

Esta es una configuración base estándar para Babel, está configurado el preset @babel/env
con los browser que pretendemos soportar con nuestro código y useBuiltins habilitado
para que babel inserte referencias a polyfills de core-js. La única línea extra es
"forceAllTransforms": true, que hace que babel fuerce la conversión de todo el código
ES6, incluyendo el que ya está soportado universalmente.
● Paso 12: Ahora ejecuta el comando npx babel src/ -d dist/ --config-file
./babel.config.json
~~~
$ npx babel src/ -d dist/ --config-file ./babel.config.json
Successfully compiled 2 files with Babel (900ms)
~~~

Paso 13: Ejecuta lo siguiente en la terminal de tu computador node
dist/for-anidados.js y obtendrás el siguiente resultado

Paso 14: Para ver el resultado del segundo archivo, ejecuta lo siguiente en la terminal
de tu computador node dist/rest-spread-objetos.js y obtendrás el siguiente
resultado