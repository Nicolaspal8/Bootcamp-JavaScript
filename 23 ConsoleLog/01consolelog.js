// Ejemplo de imprimir mensajes personalizados
// console. log('%c Error: el usuario no está registrado ', 'background: red; color: white;')
// Error: el usuario no está registrado
// undefined
// console. log('%c Warn: el usuario no tiene dirección ', 'background: orange; color: white;')
// Warn: el usuario no tiene dirección
// undefined
// console. log('%c Éxito: usuario registrado ', 'background: green; color: white;')
// Exito: usuario registrado
// undefined

function crearImpresoraDeMensajes(tipo, estilos){
    return function mensaje(str){
       console.log(`%c ${tipo}: ${str} estilos`);
    }
}
const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');
const warning = crearImpresoraDeMensajes( 'Warning', 'background: orange; color: white');
const exito = crearImpresoraDeMensajes ('Éxito', 'background: green; color: white; ');