// let btnEnviar = document.querySelector('#hola');

// ToolTip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Alert Al Presionar Boton Enviar
$('#hola').click(function(){
        console.log("click")
        alert("El correo fue enviado correctamente...");
})
let n = 2;

//Cambiar Color Del Titulo 
$(document).ready(function(){
    $('h3').on({click: function(){
        console.log(`El modulo de ${n} es: ${n % 2}`)
        if(n % 2 == 0){
            $(this).css("color","red");
        }
        else{
            $(this).css("color","black");
        }
        n++;
    }})
    $('.card-title').click(function(){
        $('.card-text').toggle();
    })
});
