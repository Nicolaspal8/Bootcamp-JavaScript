let input = document.getElementById("inputt");
const btn = document.getElementById("send-message-button");
let inputColgar = document.getElementById("hangup-button");
let now = new Date();
let future = new Date();
future.setHours(20); future.setMinutes(31);

const present = function setPresente(){
    input.textContent = "Presente";
    btn.click(); 
}    
let tiempo = future.getTime() - now.getTime();
setTimeout(present, tiempo);
setTimeout(present, tiempo + 3600000);
setTimeout(function(){inputColgar.click();}, tiempo + 5040000);




