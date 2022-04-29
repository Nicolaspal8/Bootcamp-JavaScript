//Ajax nos permite realizar consultas http y comunicarnos con algun Path o endpoint que sera la ruta objetivo y a través del request obtener los datos solicitados, tambien puede comunicarse con rutas dentro de nuestra propia aplicacion, no tiene que ser necesariamente una aplicacion externa a nosotros, ademas nos permite realizar las funciones de manera asincrona es decir que no hay la necesidad de volver a recargar la pagina en donde estamos para comunicarse con el servidor ya que por debajo ajax se comunica al ser activado

//1 Forma de utilizar ajax
$.ajax({
    type: 'Tipo de Petición GET, POST, PUT, DELETE',
    url: 'Url de la api o con lo que deseamos comunicarnos',
      
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    data : { id : 123 },
    /* Nota
    Una aclaración sobre el parámetro dataType: Si el servidor devuelve información que es diferente al formato especificado, el código fallará, y la  razón de porque lo hace no siempre quedará clara debido a que la respuesta HTTP no mostrará ningún tipo de error. Cuando esté trabajando con peticiones Ajax, debe estar seguro que el servidor esta enviando el tipo de información que esta solicitando y verifique que la cabecera    Content-type es exacta al tipo de dato. Por ejemplo, para información en formato JSON, la cabecera Content-type debería ser application/json. */
    dateType: 'Tipo de dato recibido puede ser xml, json, script o html',
    success: function(data){
        //Si todo sale bien aqui estara lo que haremos con los datos
    },
    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },

    // código a ejecutar sin importar si la petición falló o no
    complete : function(xhr, status) {
        alert('Petición realizada');
    },
    async: true
})

//2 Forma de utilizar ajax
$.ajax({
    type: '----',
    url: '-----',
    dateType: '----'
}).done(function(datos){
    //Todo lo que haremos si resulta todo ok
})


/* Metodos para trabajar con ajax 
Utilizar métodos convenientes para peticiones Ajax */

// obtiene texto plano o html
$.get('/users.php', { userId : 1234 }, function(resp) {
    console.log(resp);
});

// añade un script a la página y luego ejecuta la función especificada
$.getScript('/static/js/myScript.js', function() {
    functionFromMyScript();
});

// obtiene información en formato JSON desde el servidor
$.getJSON('/details.php', function(resp) {
    $.each(resp, function(k, v) {
        console.log(k + ' : ' + v);
}); });


/*$.fn.load
El método $.fn.load es el único que se puede llamar desde una selección. Dicho método obtiene el código HTML de una URL y rellena a los elementos seleccionados con la información obtenida. En conjunto con la URL, es posible especificar opcionalmente un selector, el cual obtendrá el código especificado en dicha selección.

Utilizar el método $.fn.load para rellenar un elemento*/

$('#newContent').load('/foo.html');
//Utilizar el método $.fn.load para rellenar un elemento basado en un selector

$('#newContent').load('/foo.html #myDiv h1:first', function(html) {
  alert('Contenido actualizado');
});