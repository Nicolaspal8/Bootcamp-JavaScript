//ES5 
// function Vehiculos(marca) {
//     this._marca = function(){
//    return marca;
//     };
//    }
//    Vehiculos.prototype.getMarca = function(){
//     return this._marca();
//    }
//    Vehiculos.prototype.setMarca = function(marca){
//     this._marca = function(){
//     return marca;
//     }
//    }
//    var v1 = new Vehiculos("Ford");
//    v1.getMarca();
//    v1.setMarca("Kia");
//    v1.getMarca();

//Ahora lo transformaremos a sintaxis de ES6
class Vehiculo{
    constructor(marca){
        this._marca = marca;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}
let v1 = new Vehiculo("Ford");
console.log(v1)

console.log(v1.marca);
v1.marca = "Kisa";
console.log(v1.marca);

// v1.marca();
// console.log(v1)