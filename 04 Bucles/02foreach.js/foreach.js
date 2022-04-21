// // No nos permite utilizar Continue y break a diferencia de el clasico fori

// //1.- Ejemplo recorriendo un arreglo
// const numeros = [1,2,3,4,5];
//                 //recibe como parametro una funcion la cual puede recibir 2 parametros o solo la referencia al elemento 
// numeros.forEach((elemento,indice) => {
//     console.log(`el elemento ${elemento} esta en la posición ${indice}`);
// });

// //Simplificando el ejemplo anterior podemos aprovechar las cualidades de las arrow functions y dejarlo de la siguiente manera
// numeros.forEach((numero,indice) => console.log(`el elemento ${numero} esta en la posición ${indice}`));


var findMedianSortedArrays = function(str) {
    let count = count2 = 0;
    let result = '';

    for(let i = 0; i<str.length-1; i++){

        if(str[i] == '(') count++
        if(str[i+1] == ')') result += '()'
        if(str[i] = str[i+1]) result += str[i+1];

    }   
};
