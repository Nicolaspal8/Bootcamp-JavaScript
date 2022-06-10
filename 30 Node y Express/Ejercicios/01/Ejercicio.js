/* 
● Paso 1: Crear un servidor con Express que escuche el puerto 3000. 
● Paso 2: Ocupar un middleware y el método “static” de Express para declarar la carpeta “assets” 
como directorio público del servidor.
● Paso 3: Crear una ruta GET raíz que devuelva el documento index.html. */

const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("El servidor esta inicializado en el puerto 3000")
})

//Definimos como directorio publico los recursos que usaremos en la aplicacion
app.use(express.static("assets"))

app.get("/", (req , res) => {
    //Debolvemos el archivo index como una vista
    res.sendFile(__dirname + '/index.html')
})