//Se dice que la recursividad es cuando una funcion se llama a si misma una y otra vez hasta que se cumpla cierto objetivo

//En este primer intento lo que genere fue un bulce infinito de funciones paralelas atrapada una dentro de otra sin poder salir a menos que luego de hacer el llamado a la funcion dentro de ella coloque un break pero aun asi el nuevo valor ingresado se pierde en la linea en que llame a la funcion y solo queda el primer valor que fue el valor que ingrese incorrecto para que entrara en un principio a la funcion por ende si ese valor no se modifica termina eternamente entrando una y otra vez al bucle y llamando a la funcion generando funciones en paralelo
// const solicitar_numero = (num = prompt('Ingrese un numero entero del 1 al 20'))=>{
//     while(true){
//         if(isNaN(num) || (parseInt(num) > 20 || parseInt(num) < 1) || num == ""){
//             console.log(num);
//             alert('Ingrese un número valido');
//             solicitar_numero();
//         }
//         else{
//             break;
//         }
//     }
//     return parseInt(num);
// };
// const numero_usuario = solicitar_numero();
// console.log(numero_usuario);

//Con la siguiente funcion aprendi que al ocupar recursividad se van creando funciones paralelas y con esta funcion lo comprobe porque si ingreso en el primer if se llama de nuevo a la funcion pero digamos que es una funcion nueva y si entro de nuevo en el if vuelve a crear una nueva llamada a la funcion y cada llamada es su mundo en paralelo a parte y sus variables no estan relacionadas, se van creando nuevas en un entorno paralelo por ende el igual de veces que entre a la condicion sera el mismo numero de veces que se repita el console.log("fin"); sumado una vez mas que fue la llamada inicial en la linea 35
// let num = 0;
// const solicitar_numero = (n = prompt('Ingrese un numero entero del 1 al 20'))=>{
//         if(isNaN(n) || (parseInt(n) > 20 || parseInt(n) < 1) || n == ""){
//             console.log(n);
//             alert('Ingrese un número valido');
//             solicitar_numero();
//         }
//         else{
//             console.log("entro");
//             num = parseInt(n);
//             console.log(num);
//         }
//         console.log("fin");
// };
// solicitar_numero();
// console.log(num);
