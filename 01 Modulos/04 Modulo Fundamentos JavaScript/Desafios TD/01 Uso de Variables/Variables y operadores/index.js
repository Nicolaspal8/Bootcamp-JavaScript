// // Ejercicio 2.- Operadores Aritmeticos

//Declaracion de variables
let num1 = num2 = suma = resta = multi = divi = modulo = 0;
let bool = true
//Verificar si datos ingresados son validos
while(bool){
    num1 = prompt("Ingrese el primer numero al que le seran aplicadas las operaciones aritmeticas, debe ser mayor que 0");
    num2 = prompt("Ingrese Otro Numero Mayor a 0");
    //Comprobar si el valor ingresado es un numero
    if(isNaN(Number.parseFloat(num1)) || isNaN(Number.parseFloat(num2))){
        alert("Ingrese solo Numeros mayores a 0");
    }
    //Si no ahora los transformo a numeros
    else{
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        //Verificar que solo sean numeros mayores a 0
        if(num1 < 1 || num2 < 1){
            alert("Solo numeros mayores a 0");
            continue;
        }
        //si llego hasta aqui significa que paso las pruebas y puede detener el bucle
        bool = false;
    }
}
//Solo si la verificacion de datos fue exitosa entrará aquí
if(!bool){
    //realización de operaciones
    suma = num1 + num2;
    resta = num1 - num2;
    multi = num1 * num2;
    divi = num1 / num2;
    modulo = num1 % num2;
    //Mostrar Mensaje al usuario
    alert(`Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multi}\nDivision: ${divi}\nModulo: ${modulo}`);
}



//Ejercicio 3.- Calcular Temperatura 

// //Se crea función para calcular la temperatura
// function convertidor_temperatura(n){
//     let k, f;
//     k = n + 273.15;
//     f = n * (9/5) + 32;
//     //retorna un arr con la temperatura en K y °F
//     return [k, f];
// }
// //Solicitud de datos 
// let celsius = parseFloat(prompt('Ingrese La Temperatura en C° para convertirlas a K y °F'))
// //llamado a la funcion para calcular la temperatura
// let arr_temperatura = convertidor_temperatura(celsius);
// //Muestra datos al usuario de la temperatura en K y °F
// alert(`Los grados Kelvin son ${arr_temperatura[0]}\nLos grados Farenheit son: ${arr_temperatura[1]}`);



//Ejercicio 4.- Calcular Años, Semanas y Días 

// //Solicita datos
// let num = parseInt(prompt("Ingrese un valor entero"));
// if(isNaN(num)){
//     alert("Ingrese Solo numeros Enteros");
//     num = parseInt(prompt("Ingrese un valor entero"));
// }
// //Se crea un objeto para declarar los valores de cada unidad de tiempo
// let tiempo = {
//     años: 0,
//     semanas: 0,
//     dias: 0
// };
// //Primero se comprueba de que sean semanas o años 
// if(num > 364 || num > 6){
//     //Comprobación si solo son semanas
//     if(num < 365){
//         tiempo.semanas = Math.floor(num / 7);
//         num = num - 7 * tiempo.semanas;
//         tiempo.dias = num;
//     }else{
//     //Si son años agrega la cantidad de años al objeto
//     tiempo.años = Math.floor(num / 365);
//     //Saca la cantidad de dias restantes
//     num = num - tiempo.años * 365;
//         //Comprueba si aun quedan semanas
//         if(num > 6){
//             tiempo.semanas = Math.floor(num / 7);
//             num = num - 7 * tiempo.semanas;
//             tiempo.dias = num;
//         }
//         //si no quedan semanas entonces agregar el restante a los días
//         else{
//             tiempo.dias = num;
//         }
//     }
// }else{tiempo.dias = num};
// alert(
//     `Numero de Años: ${tiempo.años}\nNumero de Semanas: ${tiempo.semanas}\nNumero de Días: ${tiempo.dias}`
// );


//Ejercicio 5.- suma y promedio

// var suma = promedio = 0;
// //Recibe valores en forma de arreglo
// let numeros = prompt('Ingrese 5 numeros separados por una "," ').split(',');
// console.log(numeros);

// //Recorre el arreglo para sumarlo
// numeros.forEach(element => {
//     element = parseFloat(element);
//     console.log(suma);
//     suma = suma + element;
//     console.log(element);
// });
// promedio = suma / numeros.length;
// alert(`La suma es: ${suma}\nEl promedio es: ${promedio}`);