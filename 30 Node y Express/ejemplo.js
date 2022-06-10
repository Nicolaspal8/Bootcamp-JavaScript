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