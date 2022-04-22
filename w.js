var notas = [6, 7, 7, 5, 4];
var sumaNotas = notas.reduce(function(acumulador, nota){
                                return (acumulador + nota);
                            },100);
var promedio = (sumaNotas / notas.length);
console.log(promedio);