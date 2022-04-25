/* Ejemplo del alcanze de la variable this de JavaScript dependiendo del tipo de funcion que se ejecute y el contexto o ambito lexico donde se encuentre */
function logBlog() {
    let e = {
        nombre: 'Primer objeto',
        d:function(){
            console.log(this); 
            let segundo = {
                nombre: 'Segundo Objeto',
                segun(){
                    let ter = {
                        nombre:'tercer objeto',
                        tercer:()=>{
                            console.log(this);
                        }
                    }
                    console.log(this)
                    return ter
                }

            }
            return segundo

        }

    }
    return e
}

// Llamemos a la función
logBlog().d().segun().tercer();