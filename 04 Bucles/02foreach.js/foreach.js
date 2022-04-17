// No nos permite utilizar Continue y break a diferencia de el clasico fori

//1.- Ejemplo recorriendo un arreglo
const numeros = [1,2,3,4,5];
                //recibe como parametro una funcion la cual puede recibir 2 parametros o solo la referencia al elemento 
numeros.forEach((elemento,indice) => {
    console.log(`el elemento ${elemento} esta en la posición ${indice}`);
});

//Simplificando el ejemplo anterior podemos aprovechar las cualidades de las arrow functions y dejarlo de la siguiente manera
numeros.forEach((numero,indice) => console.log(`el elemento ${numero} esta en la posición ${indice}`));

