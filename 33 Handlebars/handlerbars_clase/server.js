const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes",
  })
);

const port = 3000;

app.get("/", (req, res) => {
//   res.render("inicio", {});
});

app.get("/inicio", (req, res) => {
  let nombre = "everto";
  let result = [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }];
  let productos = [
    {
      nombre: "perro",
      imagen:
        "https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
      descripcion: "Soy un perrio",
    },
    {
      nombre: "gato",
      imagen:
        "https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
      descripcion: "soy un gato",
    },
    {
      nombre: "loro",
      imagen:
        "https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
      descripcion: "soy un loro",
    },
  ];
  res.render("inicio", {
    nombre,
    isProducto: true,
    productos,
    isLogged: true,
    numero: "1",
    lenguajesFrontend: result,
  });
});

app.get("/contacto", (req, res) => {
  res.render("contacto", { layout: "contacto" });
});

app.get("/galeria", (req, res) => {
  res.render("galeria", { layout: "galeria" });
});

app.get("/ventas", (req, res) => {
  res.render("ventas", {
    usuario: "everto",

    ventas: [14000, 22000, 50000],
  });
});

app.get("/spiner/:color", (req, res) => {
  // {color:"blanco"}
  console.log(req.params);
  const { color } = req.params;

  res.render("sprinerInicio", {
    colores: [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ],
    color: color,
  });
});

app.listen(3000, () => console.log(`Example app listening on port ${port}!`));
