const post = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await data.json();
    return response;
};
post().then((resp) => console.log(resp)).catch();


const userById = async (id) => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const result = await user.json();
    return result;
}
post()
    .then((res) => {
        let users = res.map((user) => user.userId);
        let ids = new Set(users);
        let newIds = [...ids];
        //Usamos promise all porque aremos un llamado por cada id y cada respuesta sera una promise por ende creamos un array de promise con los resultados y el metodo promise.all recibe un arreglo el cual puede manejar cada promesa que contiene
        Promise.all(newIds.map((id) => userById(id))).then(res => console.log(res));
    })
    .catch();//Podemos hacer uso del catch para capturar algun posible error si una de las promesas falla en el promise all todas fallaran y se detendra la ejecucion de las siguientes promesas