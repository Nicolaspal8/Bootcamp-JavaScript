let nombresSelect = document.querySelector('#estudiantes');
let notasTabla = document.querySelector('#notas');
let agregar = document.querySelector('#agregar-estudiante');
let estudiantesObjt = [{
    id: 0,
    nombre: "Juanillo Perinillo",
    carrera: "Desarrollo Web",
    html: ['-','-','-','-'],
    css: ['-','-','-','-'],
    js: ['-','-','-','-']
    },
    {
    id: 1,
    nombre: "Pepito Pepon",
    carrera: "Desarrollo IA",
    html: ['-','-','-','-'],
    css: ['-','-','-','-'],
    js: ['-','-','-','-']
    }
];

const autoejecutable = (()=>{ 
    for(const objeto of estudiantesObjt) {
    nombresSelect.innerHTML += `
    <option value="${objeto.id}">${objeto.nombre}</option>
    `
    }
})();

//Verificar si son solo numeros
const isNumeric = function(arr){
        arr.forEach(element => {
            (console.log("entro al bucle"))
            if(isNaN(Number.parseFloat(element))){
                console.log(Number.parseFloat(element));
                return true;
            }
        });
        return false;
}
//Actualizar Datos
const actualizarDatos = function(obj){
    document.querySelector('#nombre-usuario').innerHTML = obj.nombre;
    document.querySelector('#carrera-usuario').innerHTML = obj.carrera;
    notasTabla.innerHTML = `
    
    <tr>
        <th>HTML</th>
        <th>${obj.html[0]}</th>
        <th>${obj.html[1]}</th>
        <th>${obj.html[2]}</th>
        <th>${obj.html[3]}</th>
    </tr>
    <tr>
        <th>CSS</th>
        <th>${obj.css[0]}</th>
        <th>${obj.css[1]}</th>
        <th>${obj.css[2]}</th>
        <th>${obj.css[3]}</th>
    </tr>
    <tr>
        <th>JavaScript</th>
        <th>${obj.js[0]}</th>
        <th>${obj.js[1]}</th>
        <th>${obj.js[2]}</th>
        <th>${obj.js[3]}</th>
    </tr>`
}

const capturar =  function(mensaje){
    console.log(mensaje.length);
    if(mensaje.length != undefined){
        alert(mensaje);
    }
    let idNombreSeleccionado = nombresSelect.value;
    let notasHtml = prompt("Me dio Flojera hacer tantos prompt asi que busque otra forma mas corta de hacerlo, Ingrese Notas [HTML] separadas por una ','");
    let notasCss = prompt("Ingrese notas de [CSS] separadas por una ','");
    let notasJs = prompt("Ingrese notas de [JavaScript] separadas por una ','");
    let arrHtml = notasHtml.split(',');
    let arrCss = notasCss.split(',');
    let arrJs = notasJs.split(',');
    
    let arrFinal = arrHtml.concat(arrCss,arrJs);
    console.log(arrFinal);
    if(isNumeric(arrFinal) || arrFinal.length > 9){
        console.log("Entro al la condicional")
        let msg = "***Seleccione solo numeros y separelos por una ',' maximo 3 numeros por Ramo***"
        capturar(msg);
    }else{
        let promedioHtml = 0;
        let promedioCss = 0;
        let promedioJs = 0;
        arrHtml.forEach(element => {
            promedioHtml += parseFloat(element);
        });
        promedioHtml /= arrHtml.length;
        arrHtml.push(promedioHtml);
        arrCss.forEach(element => {
            promedioCss += parseFloat(element);
        });
        promedioCss /= arrCss.length;
        arrCss.push(promedioCss);
        arrJs.forEach(element => {
            promedioJs += parseFloat(element);
        });
        promedioJs /= arrJs.length;
        arrJs.push(promedioJs);
        
        estudiantesObjt[idNombreSeleccionado].html = arrHtml;
        estudiantesObjt[idNombreSeleccionado].css = arrCss;
        estudiantesObjt[idNombreSeleccionado].js = arrJs;
        actualizarDatos(estudiantesObjt[idNombreSeleccionado]);
        console.log(`Promedio HTML: ${promedioHtml} \n Promedio CSS: ${promedioCss}\n Promedio JavaScript: ${promedioJs
        }`);
        console.log(estudiantesObjt);
    }
}

//Selector 
nombresSelect.onchange = function(){
    actualizarDatos(estudiantesObjt[nombresSelect.value]);
}

//Agregar Notas
agregar.addEventListener('click',capturar);
