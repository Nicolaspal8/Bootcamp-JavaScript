//Fetch es eun metodo que nos sirve para comunicarnos con un servidor y hacer consultas o manipular datos, este metodo nos devuelve una promesa por ende hay que tratarlo con el metodo .then y .catch en caso de estar siendo utilizado en una funcion asyncrona podemos tratarlo con el await para que espere a que la promesa se resuelva
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
//Junto con eso el codigo queda mas limpio al trabajarlo con arrows functions


//----------------------------------------------
//Ejemplo con funcion asyncrona
//Cambie el url por el puerto que este utilizando
let animalesObj = ( () => {
    const url = "http://127.0.0.1:5500/animales.json";
    const getData = async () => {
        const rest = await fetch(url);
        const data = await rest.json();
        return data
    };
    return { getData }
})();
// export default (animalesObj)

//Y luego desde otro modulo es importada para aplicar tambien el patron modular, podemos trabajar con funciones async solo si hacemos llamado desde otra funcion async porque ya que trabaja con promesas necesitamos esperar a que esta se cumpla de lo contrario nos devolvera la promesa como pendiente
let animalesData;
//Obtencion de Imagenes
(async () =>{
    let data = await animalesObj.getData();
    animalesData = data;
})();

//Ejemplo 3 trabajando con los datos regresados por fetch de igual forma se esta aplicando el patron modular por lo que hay que separar el codigo en diferentes archivos y agregar al html el type="module" para el controlador o archivo que haga las importaciones de los modulos
 
let personajes = ( () => {
    const url = "http://127.0.0.1:5501/dbz.json";
    const getData = async () => {
        const rest = await fetch(url);
        const data = await rest.json();
        return data
    };
    return { getData }
})();
// export default (personajes)


//-----------------------

// import Personajes from "./consulta.js";

document.querySelector('#buttonImages').addEventListener("click", async () =>{
    const { personajes } = await Personajes.getData();
    const pj = document.querySelector('#nombre').value;
    const imagenesPjTemplate = personajes
    .find( (p) => p.name == pj)
    .imagenes.map( i => {

        return `<img width="200" src="/assets/imgs/${pj}/${i}" />`   
    }).join("");

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate;

    document.querySelectorAll(".personajes img").forEach((i) => {
        i.addEventListener("click", (e) => {
            $("#imagenesModal").modal("toggle");
            const imagenSrc = e.target.src;
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`;
        });
    });
});
