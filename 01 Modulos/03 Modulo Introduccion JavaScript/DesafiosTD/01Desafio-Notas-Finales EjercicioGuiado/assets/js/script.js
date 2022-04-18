var nombre = prompt("Ingrese el nombre del estudiante", "Alan")
var carrera = prompt("Ingrese la carrera que cursa", "Full Satck")

document.getElementById("nombre").innerHTML = nombre
document.getElementById("carrera").innerHTML = carrera

// En esta linea solicito la informacion y transformo el string numero entreo
var html1 = parseFloat(prompt("Ingrese nota1 HTML", "2"))
// Con el getElementById obtengo mi etiqueta para manipularla
var etiquetaHtml1 = document.getElementById("html1")
//Con el innerHTML obtengo su propiedades y las modifico
etiquetaHtml1.innerHTML = html1

var html2 = parseFloat(prompt("Ingrese nota2 HTML", "3.5"))
var etiquetaHtml2 = document.getElementById("html2")
etiquetaHtml2.innerHTML = html2

var html3 = parseFloat(prompt("Ingrese nota3 HTML", "6.2"))
var etiquetaHtml3 = document.getElementById("html3")
etiquetaHtml3.innerHTML = html3

// Calculo del promedio

var promedio = ((html1 + html2 +html3) / 3).toFixed(2)
var etiquetaHtmlPro = document.getElementById("htmlpro")
etiquetaHtmlPro.innerHTML = promedio

// AQUI COMIENZA EL CSS

var css1 = parseFloat(prompt("Ingrese nota1 CSS", "7"))
var etiquetaCss1 = document.getElementById("css1")
etiquetaCss1.innerHTML = css1

var css2 = parseFloat(prompt("Ingrese nota2 CSS", "2.1"))
var etiquetaCss2 = document.getElementById("css2")
etiquetaCss2.innerHTML = css2

var css3 = parseFloat(prompt("Ingrese nota3 Css", "7"))
var etiquetaCss3 = document.getElementById("css3")
etiquetaCss3.innerHTML = css3

// Calculo del promedio

var promedioCss = ((css1 + css2 +css3) / 3).toFixed(2)
var etiquetaCssPro = document.getElementById("csspro")
etiquetaCssPro.innerHTML = promedioCss

// AQUI COMIENZA JAVASCRIP

var js1 = parseFloat(prompt("Ingrese nota1 JS", "5"))
var etiquetaJs1 = document.getElementById("js1")
etiquetaJs1.innerHTML = js1

var js2 = parseFloat(prompt("Ingrese nota2 Js", "2.1"))
var etiquetaJs2 = document.getElementById("js2")
etiquetaJs2.innerHTML = js2
