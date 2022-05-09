function prueba1(){
    console.log("prueba 1")
    let n = prueba3()
    return n * n;
}
function prueba3(){
    let numero = prueba2(4)
    console.log("prueba 3", numero)
    return numero;

}
function prueba2(n){
    console.log("prueba 2")
    return n * n;
}
console.log(prueba1());