//IIFE Inmediataly Invoked Function Expression Son funciones autoejecutables

//ES5
(function(){
    console.log("Ejecutada a penas se corre nuestro programa")
})();
//Con parametros por defecto
(function(valor){
    let name = "pepe"
    //Forma 1 
     console.log(valor + " " + name)
    //Forma 2
     console.log(valor, name)
})("Hola");

//Dentro de una variable un detalle es que si accedemos a la varibale y es una funcion normal nos retronara la funcion en si pero si la creamos como una funcion autoejecutable nos retornara el valor especificado ya que se ejecutara junto con el programa entonces ya tendremos en el inicio almacenado el valor de esa funcion y su return en nuestra variable
const saludo = (function(valor){
    let name = "pepe"
    //Forma 1 
    //  console.log(valor + " " + name)
    // //Forma 2
    //  console.log(valor, name)
    //con un return
    return valor + " " + name;

})("Hola");
console.log(saludo)
//ES6
(() =>{
    console.log("Ejecutada a penas se corre nuestro programa")
})();
//Con parametros por defecto
((valor) => {
    let name = "pepe"
     console.log(valor, name)
})("Hola");
