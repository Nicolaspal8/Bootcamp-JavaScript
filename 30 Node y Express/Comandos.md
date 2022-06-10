1. Instalacion de Express --> npm install express --save
2. Iniciar proyecto --> node nombreProyecto.js
3. Objeto request -->
~~~
● req.params: Manejo de los parámetros recibidos por URL.
● req.header(): Recibe como argumento el nombre de una propiedad y devuelve el valor de esta.
● req.secure: Confirma si el sitio de la consulta tiene el sello de seguridad https.
● req.method: Devuelve el método HTTP con el que se está haciendo la consulta.
● res.download(): Permite la descarga de un archivo dentro del servidor. Es importante destacar que 
esta es una cualidad muy potente del framework Express.
● res.redirect(): Así como su nombre lo indica, se utiliza para redireccionar la consulta recibiendo 
como argumento la dirección en formato string.
● res.sendStatus(): Recibe como argumento el código de estado que deseemos devolver como 
respuesta de la solicitud.
~~~