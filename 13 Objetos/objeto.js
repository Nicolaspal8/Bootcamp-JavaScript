//Algunos metodos comunes para trabajar con objetos son los de agregar valores y elminar

let animal = {
    nombre: 'pepe',
    apellido: 'pepon',
    edad: 12,
    patas:4
}
console.log(animal);
//Agrega una propiedad a un objeto
animal.color = 'cafe';
console.log(animal);
//Elimina una propiedad del objeto
delete animal.edad;
console.log(animal);

