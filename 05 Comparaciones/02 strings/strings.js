let btn = document.querySelector('#boton');
function validacion(){
    $(document).ready(()=>{
        //Declaracion de un boolean para determinar si los datos ingresados cumplen o no con los requerimientos
        let bool = true;
        //En el arr se ingresara el valor de todos los inputs
        let arr = [];
        //Regular Expresion para determinar que los datos cumplan con lo requerido que solo sean letras
        let r = new RegExp("^[a-zA-Z]+$");
        let inputs = document.querySelectorAll('.form-control');
        //arreglo de elementos html donde se alojaran los errores para ser mostrados dependiendo si esque los hay
        let errores = document.querySelectorAll('.error');

        //Ciclo for para recorrer el arreglo de inputs y agregarle el valor al segundo arreglo llamado arr ya que querySelectorAll devuelve una NodeList y a su vez valido si el elemento agregado al nuevo arreglo cumple con los requerimientos y si no inserto el mensaje de error
        for (let i = 0; i < inputs.length; i++) {
           arr.push(inputs[i].value);
           if(arr[i] == ""){
               $(errores[i]).text('No puede estar en blanco');
               bool = false;
           }
           else if(!(r.test(arr[i]))){
            $(errores[i]).text('Solo Letras');
            bool = false;
           }
           else{
            $(errores[i]).text('');
           }
        }
        console.log(arr);
        if(bool){
            $('.error').text('');
            $('h3').text('Mensaje enviado con exito');
        }
        else{
            $('h3').text('');
        }
    });
};
btn.onclick = validacion;
