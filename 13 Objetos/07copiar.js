//El problema al copiar objetos o arrays es que si simplemente igualamos una variable a la variable original lo que estaremos haciendo es una referencia por ende si  modificamos uno se modificara el otro porque seran el mismo objeto solo que creamos un punto para localizarlo dentro de la memoria y lo que copiamos es esa direccion en memoria por ende no asiganmos un nuevo dato en memoria solo una referencia a la ubicacion de dicho dato, para copiar un objeto podemos utilizar un metodo de la clase object o tambien el spread operator pero el problema del ultimo es que solo copia la primera capa y si hay mas objetos dentro de un objeto tendremos el mismo problema por lo que se puede hacer un metodo para copiar el objeto como string y luego transformarlo a objeto

//Forma 1
const objOriginal ={
    nombre:"pepe",
    apellido:{
        materno:"pepi",
        paterno:"popo"
    }
}
const obj2 = Object.assign({}, objOriginal);

//Forma 2 Solo copia el primer nivel
const obj3 = {...objOriginal}
//Forma 3 con copia mas profunda a todos los niveles
const obj4 = JSON.parse(JSON.stringify(objOriginal));
