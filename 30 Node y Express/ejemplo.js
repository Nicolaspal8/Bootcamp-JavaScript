//Codigo para iniciar un servidor con node puro
const http = requiere("http")
http
    .createServer((req, res) => {
        if (req.url == "/Inicio" && req.method == "GET"){
            res.end("Hola mundo! Servidor con node puro");
        }
    })
    .listen(3000, () =>{
    console.log("El servidor está incializando en el puerto 3000");
    });

//Ahora con Express
const express = requiere('express')
const app = express()

app.listen(3000, () => {
    console.log('El servidor esta incializando en el puerto 3000')
})

app.get("/Inicio", (req, res) => {
    res.send("Hola mundo Servidor con Express js")
})

/* Ahora para levantar el servidor con node o express tendremos que especificar donde lo creamos y escribir node serverNode.js el cual se abrira en el puerto indicado el cual fue el 3000 en el local host */


/* Enrutamiento
En Express toma la siguiente estructura 
app.METHOD(PATH, callback)
app = Instancia de express
method = solicitud http GET, POST, PUT, DELETE debe ser escrita en minuscula
path = RUTA
callback = Funcion a realizar en la consulta de la ruta tambien conocido como handler */

/* Objeto Request */

app.get("/Home/:id", function(req, res) {
    res.send(req.paramas.id)
})
//Si ejecutamos la ruta /home/hola obtendremos hola en el navegador como respuesta

/* Middlewares su sintaxis es similar a la creacion de una ruta*/
app.use(Path, (req,res, next) => {
    //Validaciones
    next()
})
//Ocupamos un tercer parámetro llamado “next”, que será una función que al ejecutarse permitirá la continuación de la consulta, bien sea a otro middleware o a la ruta que se está consultando. 


/* Ejercicio de Ejemplo 
Paso 1: Agregar un middleware para la ruta /Tiempo.
● Paso 2: Utilizar el parámetro “request” y su método “header” para almacenar en una constante el 
valor de la propiedad “Authorization”.
● Paso 3: A través de un operador ternario, evalúa la constante creada en el paso anterior y en caso 
de ser “true”, ejecutar el parámetro “next()”, de lo contrario responder con un mensaje “¿Quién es?”.
● Paso 4: Crear una ruta GET /Tiempo.
● Paso 5: Crear y devolver un objeto que incluya la fecha actual. Para esto, ocupa el Date.now()

*/

app.use("/Tiempo", (req, res, next) => {
    const Auth = req.header("Authorization")
    Auth ? next() : res.send("¿Quien es?")
});

app.get("/Tiempo", (req, res) => {
    const tiempo = {time: Date.now()}
    res.send(tiempo);
});

//request param con restricciones
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });
