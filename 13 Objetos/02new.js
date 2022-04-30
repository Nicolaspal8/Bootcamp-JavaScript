const c = new Cuadrado(2);
let nuevoC = Object.create(Cuadrado.prototype);
nuevoC.calcularArea = function(){
    return nuevoC.x * nuevoC.x
}
nuevoC.calcularPerimetro = function(){
    return nuevoC.x *4
}
let neuvoC = Object.create(Cuadrado.prototype)
Cuadrado.apply(nuevoC, arguments);