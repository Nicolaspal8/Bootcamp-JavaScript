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


/* File System */

const fs = require('fs')

//CREATE
fs.writeFile('tareas.txt', '1.- Crear ejemplo con write file', 'utf8', ()=>{
    console.log("Archivo Creado")
})

//PUT
fs.readFile('tareas.txt', 'utf8', 
    (err, data)=>{
        fs.writeFile('tareas.txt', data + '\n2.- Tarea 2', 'utf8', ()=>{
            console.log("Archivo Sobre Escrito")
        })
})

/* Parametros de Consulta : para indicar la inicializacion de una consulta en la ruta inicializamos con un ? luego el nombre del atributo seguido de un signo = y si tenemos mas de uno utilizamos & ejemplo 
localhost:3000/usuarios?nombre=pepe&apellido=pepon*/

const users = [
    {
        rut: '12345',
        nombre: 'pepe',
        apellido: 'pepon'
    }
]

app.get("/usuarios", (req, res) => {
    //Aplicamos destructuring para manejar mejor los datos
    const { rut } = req.query
    const usuarioEcontrado = users.find(u => u.rut == rut)
    if(usuarioEcontrado){
        const {nombre, apellido} = usuarioEcontrado
        res.send(`Usuarios Encontrado nombre ${nombre} Apellido ${apellido}`)
    }else{
        res.send(`No se encontro el usuario de rut ${rut}`)
    }
})

//Ahora para realizar una consulta desde la terminal usamos el comando curl 
//en la terminal --> curl http:/localhost:3000/usuarios?rut=12345
