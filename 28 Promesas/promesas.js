function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un numero`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicio de Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Promise Finalizada");
  })
  .catch((err) => console.error(err));

//Otro Ejemplo de Como utilizar Promesas
/* Paso 1: Crear una carpeta en tu lugar de trabajo favorito y dentro de ella crea dos
archivos, un index.html y un script.js. Seguidamente, en el index.html debes escribir
la estructura básica de un documento HTML como se muestra a continuación:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<title>Promesas</title>
</head>
<body>
<h4>Usando ES6 - Promesas</h4>
<section id="contenido"></section>
<button id="boton">Ejecutar</button>
<script src="script.js"></script>
</body>
</html> */
/* Paso 2: En el archivo script.js, lo primero es agregar un escucha al botón, para que
cuando el usuario haga un click sobre él, se activen los llamados a la funciones que
contienen las promesas. La primera función que debe llamar será la que retorna el
mensaje de autorización con el nombre de getData, es decir, si el usuario está o no
autorizado, en este caso y para este ejemplo, el retorno deberá ser “true”. A ella, se le
concatena un “then” para esperar la respuesta de la promesa, si la promesa retorna
true, entonces se debe regresar el llamado a la función que permita mostrar los
datos (mensajes dos y tres), esta función llevará por nombre mostrarData(). Ahora,
esta última función también contiene una promesa, por lo tanto se debe concatenar
el “then” para así poder mandar a mostrar por pantalla el último mensaje con el
nombre del usuario. */
boton.addEventListener("click", () => {
  getData()
    .then((autorizacion) => {
      if (autorizacion) {
        return mostrarData();
      }
    })
    .then((usuario) => {
      setTexto(`El usuario en línea es: ${usuario.nombre}`);
    });
});
/*  Paso 3: Agregamos ahora la lógica interna de la función getData(). Ya que es la
primera en ser invocada. En esta función se retorna una nueva promesa y dentro de
la promesa se debe llamar a la función encargada de mostrar el contenido en el
documento mediante el DOM 'Solicitando Autorización'. Luego de transcurrir
los 2.5 segundos del método setTimeout, se resuelve con true la promesa */
const getData = () => {
  return new Promise((resolve, reject) => {
    setTexto("Solicitando Autorización");
    setTimeout(() => {
      resolve(true);
    }, 2500);
  });
};
/* Paso 4: Debemos trabajar ahora con la segunda función, esta función es convocada
si y sólo si la primera promesa retorna “true”. Dentro de ella se retorna una nueva
promesa, en donde se llamará nuevamente a la función setTexto para que muestre
el mensaje 'Esperando la información', luego de transcurrir 2.5 segundos se
debe resolver la promesa con el dato: {nombre:"El usuario en línea es:
Juan"}. Que será parte del último mensaje a mostrar por pantalla llamando a la
función setTexto pero al retornar la promesa. */
const mostrarData = () => {
  return new Promise((resolve, reject) => {
    setTexto("Esperando la información");
    setTimeout(() => {
      resolve({ nombre: "Juan" });
    }, 2500);
  });
};
/* Paso 5: Ya solo queda crear la función que incrustará los mensajes en el documento,
específicamente en el elemento con el “id” igual a “contenido”, mediante la propiedad
textContent le igualamos el valor que traen el parámetro.
 */
const setTexto = (datos) => {
  contenido.textContent = datos;
};
/*Paso 6: Finalmente, ejecutamos el archivo index.html con nuestro navegador web, y
hacemos un click sobre el botón para obtener la secuencia de resultados
 */
