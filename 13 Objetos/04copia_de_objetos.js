/*Al realizar una copia de un string o un entero y almacenar su valor en otra variable esta nueva variable adquiere dicho valor sin hacer referencia al original o estar enlazado a el, con esto me refiero a que si cambiamos la copia no afectara al original, para copiar objetos no es asi por lo que si simplemente ocupados el operador de asignacion = se hará una referencia al objeto original y si modificamos el objeto original modificaremos todas las copias de dicho objeto por lo que para eso tenemos 2 diferentes soluciones a ocupar dependiendo de cuantas capas de objetos tenga el objeto original que deseamos copiar, si el objeto solo posee propiedades en las que ninguna sea de tipo object entonces podremos ocupar el metodo Object const objeto_copia = Object.assign({},objeto_original);  o const objeto_copia = Object.assign({},objeto_original,{edad: 10, raza: "Pastor Aleman"}); el cual puede recibir mas propiedades al crearlo, pero cuando queremos copiar un objeto que posee mas objetos dentro de el entonces este metodo no nos sirve porque los objetos dentro quedaran enlazados y sucedera lo mismo que al principio, se creara una referencia del objeto y cualquier modificacion a uno de los dos modificara al otro por ende lo que tenemos que hacer el transformar el objeto que queremos copiar a un string para que sea copiado conmo string y no como objeto pero pueden surgir problemas con las funciones por ende la solucion definitiva para copiar por valores y no por referencia es hacer una iteracion sobre el objeto a copiar*/

//Ejemplo 1 Copia normal con el metodo assign
const objeto_original = { nombre: "Juan", apellido: "Duran" };
const objeto_copia = Object.assign({}, objeto_original);
objeto_original.apellido = "Romero";
console.log(objeto_copia);
console.log(objeto_original);
//Ejemplo 2 Copia normal con el metodo assign mas nuevas propiedades agregadas a la copia
const objeto_original2 = { animal: "Perro", nombre: "Tatty" };
const objeto_copia2 = Object.assign({}, objeto_original2, {
  edad: 10,
  raza: "Pastor Aleman",
});
console.log(objeto_copia2);
console.log(objeto_original2);
//Ejemplo 3 Copia con recursividad para copuar por valor y no por referencia
function copiadoProfundo(objeto_original) {
  const objeto_clonado = {};
  for (var llave in objeto_original) {
    if (typeof objeto_original[llave] != "object") {
      objeto_clonado[llave] = objeto_original[llave];
    } else {
      objeto_clonado[llave] = copiadoProfundo(objeto_original[llave]);
    }
  }
  return objeto_clonado;
}
const objeto_original3 = {
  nombre: "Juan",
  apellido: "Duran",
  programas: {
    frontEnd: "JavaScript",
    backEnd: "PHP",
  },
};
const objeto_copia3 = copiadoProfundo(objeto_original3);
objeto_original3.programas.backEnd = "NodeJS";
console.log(objeto_original3.programas);
console.log(objeto_copia3.programas);
/*OutPut
{
backEnd: "NodeJS",
frontEnd: "JavaScript"
}
{
backEnd: "PHP",
frontEnd: "JavaScript"
}
*/

/*Ejercicio Para el objeto mostrado a continuación: {pais: "Chile", capital: "Santiago de
Chile", datos: {poblacion: "15 millones", fecha: 2010}}, realiza una copia,
luego modifica el objeto original por: {poblacion: “18 millones”, fecha: 2018} y finalmente
comprueba que la modificación solo se realizó en un solo objeto y no en ambos. */
const objeto_originalwey = {
  pais: "Chile",
  capital: "Santiago deChile",
  datos: { poblacion: "15 millones", fecha: 2010 },
};
const copia_total = copiadoProfundo(objeto_originalwey);
objeto_originalwey.datos.poblacion = '18 millones';
objeto_originalwey.datos.fecha = '2018'

console.log(objeto_originalwey)
console.log(copia_total)
