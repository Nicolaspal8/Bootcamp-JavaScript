//Hace que un elemento desaparezca en un principio con la funcion fadeOut y luego es recuperado por la funcion fadeIn luego de eso creo un setInterval que lo que hace es ejecutar una funcion repetidas veces en un intervalo de tiempo y asi le da un efecto de que aparece y desaparece cada cierto tiempo
function fade(){
    $('button').fadeOut(1000,function(){
        $(this).fadeIn(1000)
    })
}
setInterval(fade,1000)
//Otro ejemplo pero con un setTimeout y un bucle para controlar las veces que eso suceda

let n = 0;
while(n++<10){
    setTimeout(fade,1000)
}