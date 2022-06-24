/* Comandos utilizados para instalar las librerias
npm init -y
npm i express chalk@4.1.0 Instalamos una version anterior porque con la reciente no se puede utilizar el import o el require ya que no detecta el paquete ocmo modulo exportado
*/
//Probando la libreria Chalk para modificar el color de los mensajes por consola


const chalk = require("chalk")
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));



/* UUID */

const { v4: uuidv4 } = require('uuid')

console.log(uuidv4())

//Recordemos que estos identificadores los ocupamos para representar una entidad, por ejemplo, en una aplicación real que administre productos, cada producto podría ser identificado por estas cadenas de caracteres. No obstante, no estamos obligados a usar los 36 dígitos, podríamos ocupar el método splice o el slice para tomar solo una parte de estos. En el siguiente código se muestra cómo usar solo una parte de estos identificadores:

console.log(uuidv4().slice(0,6))


/* Moment */

const moment = require('moment')

console.log(moment())
console.log(moment().subtract(10, 'days').format('MMM Do YY'))

/* Ejercicio 
Desarrollar una mini aplicación que devuelva por consola la fecha actual sumandole 10.000 días, además supondremos que estas son consultas que serán registradas como un historial por lo que deberán tener un identificador único. */

const consulta = {
    fecha: moment().add(10000, 'days').format('MMM Do YY'),
    ID: uuidv4()
}

console.log(consulta)



/* Lodash 
Desarrollar una aplicación que divida un arreglo de números en 2 arreglos, separando los números pares e impares*/

const _ = require('lodash')

const numeros = [1,2,3,4,5,6]
console.log(_.partition(numeros, (n) => n % 2))

const axios = require('axios')

axios
    .get("https://rickandmortyapi.com/api/character/1")
    .then((data) => {
        const name = data.data.name;
        console.log(name);
    })
    .catch((e) => {
        console.log(e)
    })