//Ejercicio para entender mejor las closures y aplicarlas a las propiedades de una clase para volverlas privadas y asi aplicar el encapsulamiento y proteccion de las variables
//Clase sin proteccion de propiedades 
/* class Usuario {
    constructor(nombre) {
    this.nombre = nombre;
    }
    saludar(){
    console.log("Bienvenido usuario: "+this.nombre);
    }
}
class Administrador extends Usuario {
    constructor(nombre){
    super(nombre);
    }
    saludar(){
    console.log("Panel de Administración - Usuario: "+
    this.nombre);
    }
}
let adminUser = new Administrador ("Juan");
adminUser.saludar();
 */
//Aplicando closures para proteger las propiedades de las clases
class Usuario {
    constructor(nombre) {
     let _nombre = nombre;
     this.getNombre = () => _nombre;
     this.setNombre = (nuevo_nombre) => _nombre = nuevo_nombre;
     
    }
    get nombre(){ return this.getNombre();}

    set nombre(nuevo_nombre){
        return this.setNombre(nuevo_nombre);
    }
    saludar(){
    console.log("Bienvenido usuario: "+ this.nombre);
    }
}
let user = new Usuario("pepe");
console.log(user.nombre)
user.nombre = "popo";
console.log(user.nombre)
user.saludar()
console.log(user.getNombre())
// class Administrador extends Usuario {
//     constructor(nombre){
//     super(nombre);
//     }
//     saludar(){
//     console.log("Panel de Administración - Usuario: "+
//     this.nombre);
//     }
// }
// let adminUser = new Administrador ("Juan");
// adminUser.saludar();
