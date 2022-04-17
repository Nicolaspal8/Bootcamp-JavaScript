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
setTimeout(present, future.getTime() - now.getTime());
setTimeout(present, 3600000);
setTimeout(function(){inputColgar.click();}, 5040000);




