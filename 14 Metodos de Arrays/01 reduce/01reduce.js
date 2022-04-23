/* El metodo reduce nos permite iterar sobre un arreglo y ir acumulando algun resultado en una variable final */
var experiencias = [
    {
    titulo: "Practica",
    anos: 1,
    },
    {
    titulo: "Programador Junior",
    anos: 2,
    },
    {
    titulo: "Programador Senior",
    anos: 4,
    },
    {
    titulo: "Jefe de proyecto",
    anos: 5,
    }
   ];
//Los parametros que recibe el metodo reduce son una variable donde vamos a almacenar el resultado,el elemento, el indice, el array y el valor inicial
let anosTotales = experiencias.reduce((acumulador,elemento,indice,array)=>{
    console.log(indice);
    console.log(array);
    return acumulador+=elemento.anos;
},0);//Si no especificamos el 0 obtendremos un object object y si especificamos un numero diferente sera sumado al resultado final aunque nuestra operacion interna sea una resta aun asi el valor sera sumado al resultado final
console.log(anosTotales);