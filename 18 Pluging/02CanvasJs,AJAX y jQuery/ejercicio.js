/* HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><
/script>
<script
src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script
>
<title>Usando CanvasJS</title>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="script.js"></script>
</body>
</html>
 */

/* JS */
$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://mindicador.cl/api/dolar",
        dataType:"json",
        success: function(datos) {
        let datosApi = datos.serie;
        console.log(datosApi);
        },
        error: function(error) {
        console.log(error)
        }
    });
});

$(document).ready(function(){
    var dataPoints = [];
    var options = {
    animationEnabled: true,
    theme: "light2",
    title: {
    text: "Daily Sales Data"
    },
    axisX: {
    valueFormatString: "DD MMM YYYY",
    },
    axisY: {
    title: "USD",
    titleFontSize: 24,
    },
    data: [{
    type: "spline",
    dataPoints: dataPoints
    }]
    };
    $.ajax({
    type:"GET",
    url:"https://mindicador.cl/api/dolar",
    dataType:"json",
    success: function(datos) {
        let datosApi = datos.serie;
        console.log(datosApi);
        for (var i = 0; i < datosApi.length; i++){
        dataPoints.push({
        x: new Date(datosApi[i].fecha),
        y: datosApi[i].valor
        });
        }
        $("#chartContainer").CanvasJSChart(options);
        },
        error: function(error) {
        console.log(error)
        }
        });
        });    