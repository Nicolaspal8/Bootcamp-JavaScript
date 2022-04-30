function Prueba(n){
    let nf = n
    Object.defineProperty(this,'prueba',{value:nf})
}

var prueba2 = new Prueba('valor de Prueba')
console.log(prueba2)