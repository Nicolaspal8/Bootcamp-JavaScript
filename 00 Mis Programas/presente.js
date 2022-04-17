let input = document.getElementById("inputt");
const bt = document.getElementById("send-message-button");
let inputColgar = document.getElementById("hangup-button");

let vAcumulacion = 0;
let miliSegundos = 0;
let horaObjetivo = new Date();

const segundos = function calcular(h,m){
    let horaActual = new Date();
    horaObjetivo.setHours(h); horaObjetivo.setMinutes(m); horaObjetivo.setSeconds(10);
    miliSegundos = horaObjetivo.getTime() - horaActual.getTime();
    return miliSegundos;
}
const present = function setPresente(){
    console.log("****************Presente****************")
    input.textContent = "Presente";
    bt.click(); 
}
setTimeout(present, segundos(20,31));//1
setTimeout(present, segundos(21,31));//2
setTimeout(function(){inputColgar.click();console.log("****************Fin****************");}, segundos(22,58));//3
