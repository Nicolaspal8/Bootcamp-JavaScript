//Con setInterval ejecutamos la operacion cada 1 segundo lo que da el efecto de que nos muestre una especie de cronometro

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}