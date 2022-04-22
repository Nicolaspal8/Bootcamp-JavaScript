//La interseccion de 2 conjuntos es Todos aquellos elementos que tengan en común ambos conjuntos, utilizaremos 2 metodos uno llamado filter y el otro index of el primero creara un arreglo de todos los elementos que cumplen una condicion es decir que son true a la hora de ser retornados por ende la condicion ira en el return dentro de la funcion interna de los parametros del metodo y el segundo devuelve la posicion de un elemento si esque lo encuentra dentro de un arreglo y si no lo encuentra devuelve -1 
let listaSuperA = ["Yogurt","Avena", "Leche","Helado"];
let listaSuperB = ["Galletas","Jugo","Yogurt","Leche"];
let listaSuperFinal = listaSuperA.filter((producto)=> {
    // Revisa si el producto se encuentra en la lista b
    return listaSuperB.indexOf(producto) >= 0 // Si el producto existe retorna la posición del elemento
    });
    console.log(listaSuperFinal); // (2) ["Yogurt", "Leche"]

    