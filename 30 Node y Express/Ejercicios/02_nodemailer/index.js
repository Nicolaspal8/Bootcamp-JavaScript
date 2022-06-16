//Para iniciar instalaremos el paquete con node con el comando npm i nodemailer

//Inicio de la aplicacion
// Paso 1
const nodemailer = require("nodemailer");
// Paso 2
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cuentas.alijuju@gmail.com",
    pass: "5543212839",
  },
});

/* Estas propiedades se describen de la siguiente manera:
● service: Proveedor de correos electrónicos. Este debe ser un servicio dedicado al
envío de correos, en esta lectura ocuparemos a Gmail para esto.
● auth: En formato de objeto, representa las credenciales del usuario que está
ejecutando el envío del correo, y recibe las siguientes propiedades:
○ user: La dirección del correo que servirá como host para el envío del correo
electrónico ○ pass: La contraseña del correo que servirá como host para el envío del correo electrónico Para poder utilizar tu propio correo electrónico gmail, debes activar la opción acceso a aplicaciones poco seguras */

// Paso 3
let mailOptions = {
  from: "cuentas.alijuju@gmail.com",
  to: "cuentas.alijuju@gmail.com",
  subject: "Nodemailer Test",
  text: "Probando… 1,2,3...",
};

/*
● from: Correo de origen, este dato debe ser tipo String.
● to: Destinatario o destinatarios, en caso de ser solo 1 correo, se puede especificar
como String, pero si quisiéramos enviar el correo a varias personas para hacer un
envío de correos electrónicos masivos, podemos pasar como vale un arreglo de
Strings especificando todos los correos de destino.
● subject: Asunto del correo, este dato debe ser tipo String
● text: Mensaje en formato de texto plano.
Cabe destacar que la propiedad “text” puedes cambiarla por “html” y de esta manera enviar
código HTML.
 */

/* Cabe destacar que el usuario de autenticación para el envío de correo electrónico sirve solo como host del envío, es decir, no será reconocido como el emisor en sí del correo. Este dato se toma para hacer referencia al representante del acto a nivel funcional. No obstante, se puede especificar en las propiedades que veremos a continuación, que el correo fue enviado
por otra dirección de correo electrónico. ¿No queda del todo claro? Te lo explico con un ejemplo: Cuando pides comida a domicilio, ¿Quién representa el envío de la comida? ¿tú o el restaurante que está enviando al repartidor? Por supuesto, sería el restaurante, pero fuiste tú quien emitió la orden y pagó la comida.
En síntesis, este usuario corresponde a la cuenta que tu proveedor de correos te asigne y ya que estamos usando Gmail, corresponderá a las credenciales del correo directamente. Lo siguiente, es ocupar un método de nuestra variable “transporter” llamado “sendMail”, el cual tiene la siguiente sintaxis: transporter.sendMail(<opciones_correo>,<callback>)
El segundo parámetro del método sendMail es un callback, el cual recibe como parámetro el error y el mensaje de éxito en ese mismo orden, por lo que podemos capturar cualquiera de estos escenarios y mandarlo por consola.
 */

// Paso 4
transporter.sendMail(mailOptions, (err, data) => {
  // Paso 5
  if (err) console.log(err);
  if (data) console.log(data);
});

//Ejercicio con express

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log("Inicio en puerto 3000"));

const enviar = require("./mailer.js");
// Paso 2
app.get("/", async (req, res) => {
  try {
    // Paso 3
    const { para, asunto, contenido } = req.query;
    // Paso 4
    await enviar(para, asunto, contenido);
    res.send("Correo electrónico enviado con éxito");
  } catch (error) {
    // Paso 5
    console.log(error);
    res.status(500).send("Algo salió mal...");
  }
});
