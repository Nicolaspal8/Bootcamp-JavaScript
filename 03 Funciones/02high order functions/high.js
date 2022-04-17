/*1.- High Order Functions se refiere a que una funcion regresa otra funcion
 y para entenderlo escribire 2 ejemplos uno con una funcion expresada normal y uno con una funcion arrow */
 //Ejemplo 1
 const generateAMultiplier = function(a) {
    return function(b) {
      return b * a;
    }
  };
  const multiplier = generateAMultiplier(5);
  const foo = multiplier(10); // 50
//Ejemplo 2 Este tipo de declaraciones que empleando la sintaxis “antigua” quedan muy largas, con las arrow functions se simplifican enormemente:
const generateAMultiplier2 = a => b => a * b;
const multiplier2 = generateAMultiplier2(5);
const foo2 = multiplier2(10); // 50

