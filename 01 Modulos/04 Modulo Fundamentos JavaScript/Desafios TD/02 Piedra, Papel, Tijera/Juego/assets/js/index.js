let jugadas = ['tijera!','piedra', 'papel', 'tijera','piedra!'];
let num = parseInt(prompt('Ingrese numero de veces que desea jugar', 2));
let bucle = 0;
while(bucle < num){
    let jugada = prompt('Ingrese su Jugada Piedra, Papel o Tijera').toLowerCase();
    if(jugada == 'piedra' || jugada == 'papel' || jugada == 'tijera'){
        let random = Math.floor(Math.random()*(4 -1) + 1);
        let posicion = jugadas.indexOf(jugada);
        switch (random){
            case 1:
                alert(`${jugada} + ${jugada} = Empate`);
                break;
            case 2:
                alert(`${jugada} + ${jugadas[posicion - 1]} = Felicidades Ganaste!!!`);
                break;
            case 3:
                alert(`${jugada} + ${jugadas[posicion + 1]} = Lo Siento Has Perdido :C`);
                break;
        }
        bucle++
    }else{
        alert("Jugada ingresada Incorrecta escoje Piedra, Papel o Tijera");
    }
};