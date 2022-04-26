
function convertidor(human){

    let cat = dog = resultado = i = 0;

    while(i++<human){
        console.log(i);
        switch (i){
            case 1:
                dog = cat += 15
                break;
            case 2:
                dog = cat += 9    
                break;
            default:
                cat += 4;
                dog += 5;    
        }
    }
    return [human,cat,dog];
}
let edades = convertidor(5);
console.log(edades);