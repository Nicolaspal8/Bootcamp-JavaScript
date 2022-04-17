// 1.- funcion para solicitar el numero entre 1 y 20 y validar que sea un numero

const solicitar_numero = (()=>{
    let num;
    //simplemente creo un bucle con true para que ingrese automaticamente y lo detendre con break cuando ya no entre a la primera condicional que significara que el numero ingresado en prompt es solo un numero y esta dentro del rango
    while(true){
        num = prompt('Ingrese un numero entero del 1 al 20');
        if(isNaN(num) || (parseInt(num) > 20 || parseInt(num) < 1) || num == ""){
            alert('Ingrese un número valido');
        }
        else{
            break;
        }
    }
    return parseInt(num);
});
const numero_usuario = solicitar_numero();
console.log(numero_usuario);

//2.- Validacion de numero con test() con una expresión regular, es más sencillo. /\D/.test() nos testea si hay algún carácter que no sea un número y devuelve false si encuentra un espacio, una letra o cualquier otra cosa.
let miVariable = prompt("Entre un número: ");
    
while (miVariable == null || /\D/.test(miVariable) || miVariable == "") {
    miVariable = prompt("Entre un número VÁLIDO: ");
};
