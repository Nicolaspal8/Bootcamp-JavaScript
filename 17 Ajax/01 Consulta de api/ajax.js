//Ajax nos permite realizar consultas http y comunicarnos con algun Path o endpoint que sera la ruta objetivo y a través del request obtener los datos solicitados, tambien puede comunicarse con rutas dentro de nuestra propia aplicacion, no tiene que ser necesariamente una aplicacion externa a nosotros, ademas nos permite realizar las funciones de manera asincrona es decir que no hay la necesidad de volver a recargar la pagina en donde estamos para comunicarse con el servidor ya que por debajo ajax se comunica al ser activado

//1 Forma de utilizar ajax
$.ajax({
    type: 'Tipo de Petición GET, POST, PUT, DELETE',
    url: 'Url de la api o con lo que deseamos comunicarnos',
    dateType: 'Tipo de dato recibido puede ser xml, json, script o html',
    succes: function(data){
        //Si todo sale bien aqui estara lo que haremos con los datos
    },
    error: function(data){
        //Si algo sale mal aqui manejaremos el error
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