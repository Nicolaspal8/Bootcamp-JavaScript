//Es el for clasico que es muy rapido pero su sintaxys no es tan legible como otros y nos permite utilizar las propiedades de continue y break
const numeros = [1,2,3,4,5];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === 3){
        continue;
    }
    if(numeros[i] === 4){
        break;
    }
    console.log(numeros[i]);
}