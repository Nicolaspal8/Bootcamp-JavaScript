const express = require('express')
const app = express()

app.listen(3000, () => console.log("Inicio en el puerto 3000"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/ejercicio2/index.html")
})