var padre = {
    nombre: "Juan",
    saludar: function(){
    console.log("Hola, soy "+this.nombre);
    }
}
console.log(padre);
var hijo = Object.create(padre);
console.log(hijo);
var nieto = Object.create(hijo);
console.log(nieto);
    