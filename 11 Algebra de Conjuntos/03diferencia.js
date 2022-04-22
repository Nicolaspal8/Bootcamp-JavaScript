//Como su nombre lo dice es la diferencia entre los elementos de los conjuntos es decir todos elementos de A que no se encuentren en B y guardaremos los valores en una nueva variable, para este ejemplo implementaremos los metodos usados anteriormente y ahora nuestra condicion de retorno en vez de ser mayor a -1 sera == a -1 porque si indexOf nos da -1 significa que no esta dentro del otro array
let listaSuperA = ["Yogurt","Avena", "Leche","Helado"];
let listaSuperB = ["Galletas","Jugo","Yogurt","Leche"];
let listaSuperFinal = listaSuperA.filter(function(producto) {
    // Revisa si el producto se encuentra en la lista b
    return listaSuperB.indexOf(producto) == -1; // Si el producto no existe retorna -1
    });
    console.log(listaSuperFinal); //(2) ["Avena", "Helado"]