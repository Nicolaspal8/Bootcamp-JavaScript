// 1.- funcion para solicitar el numero entre 1 y 20 y validar que sea un numero
const solicitar_numero = ()=>{
    let num; 
    while(true){
        num = prompt('Ingrese un numero entero desde 1 hasta 20');
        if(isNaN(num) || (parseInt(num) > 19 || parseInt(num) < 2) || num == ""){
            alert('Ingrese un número valido Dentro del Rango 1 y 20');
        }
        else{
            break;
        }
    }
    return parseInt(num);
};
//Asignacion del numero ingresado por el usuario a una constante 
const numero_usuario = solicitar_numero();
console.log(`Numero ingresado: ${numero_usuario}`);
let multiplicaciones = [];
let factoriales = [];
//En el primer for determino las multiplicaciones por el numero dado y en el segundo voy sacando el factorial de dicho numero 
for(let i = 1; i<=numero_usuario; i++){
    let factorial = 1;
    multiplicaciones.push(`${i} * ${numero_usuario} = ${i * numero_usuario}\n`);
    for(let j = 1; j<=i; j++){
        factorial *= j;
    }
    factoriales.push(`Factorial de ${i} es: ${factorial} \n`);
};
//Para Mostrar el resultado Ordenado en Consola
let operaciones_totales = multiplicaciones.concat(factoriales);
operaciones_totales.forEach(element => {
    console.log(element);
});
