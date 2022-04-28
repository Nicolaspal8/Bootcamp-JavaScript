//Con setInterval ejecutamos la operacion cada 1 segundo lo que da el efecto de que nos muestre una especie de cronometro

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

//Funcion agregada de Detener el cronometro
{/* <p id="demo"></p>

<button onclick="myStopFunction()">Stop time</button>

 */}
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStopFunction() {
  clearInterval(myInterval);
}
