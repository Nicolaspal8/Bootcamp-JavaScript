//un ejemplo seria este 2 formas de hacer algo sin y con una label nos ahorra un console log\
let decenas = 0;
let unidades = 0;
while(true){
    console.log(`Bucle decenas: ${decenas}${unidades}`);
    while(true){
        unidades++;
        if(unidades == 10){
            unidades = 0;
            break;
        }
    console.log(`Bucle unidades: ${decenas}${unidades}`)
    }
     decenas++
    if(decenas == 2) break; //Hasta aqui imprime hasta 19 por ende necesitamos otro console.log para imprimir el 20 y eso lo simplificaremos con la label
}
let decenas2 = 0;
let unidades2 = 0;
decenas:while(true){
    console.log(`Bucle decenas: ${decenas2}${unidades2}`);
    while(true){
        if(decenas2 == 2) break decenas; //Ahora anido la condicion dentro del bucle y asi 
        unidades++;
        if(unidades2 == 10){
            unidades2 = 0;
            break;
        }
    console.log(`Bucle unidades: ${decenas2}${unidades2}`)
    }
    decenas2++
     //Hasta aqui nos imprime 29 y no 30 por ende debemos agregar un console.log antes del break para eso usaremos la label y la pondremos dentro del bucle anidado
}
//***Una ultima forma de hacerlo tambien sin la label y sin el console.log de mas es posicionando la condicion despues del primer print y antes del bucle anidado\\
let decenas3 = 0;
let unidades3 = 0;
while(true){
    console.log(`Bucle decenas: ${decenas3}${unidades3}`);
    if(decenas3 == 2) break;
    while(true){
        unidades3++;
        if(unidades3 == 10){
            unidades3 = 0;
            break;
        }
    console.log(`Bucle unidades: ${decenas3}${unidades3}`)
    }
    decenas3++
     //Hasta aqui nos imprime 29 y no 30 por ende debemos agregar un console.log antes del break para eso usaremos la label y la pondremos dentro del bucle anidado
}