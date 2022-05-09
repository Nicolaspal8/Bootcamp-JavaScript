/* El patrón módulo consiste en un módulo donde se encapsula toda la lógica de nuestra
aplicación o proyecto. Dentro de este módulo estarán declaradas todas las variables o
funciones privadas y sólo serán visibles dentro del mismo. Su principal atractivo es que
resulta extremadamente útil para conseguir código reusable y sobre todo, “modularizar”
nuestro código, para transformarlo en piezas reutilizables de código. */

const moduloPrueba = (() => {
  let contador = 0;
  return {
    incrementar: () => (contador += 1),
    decrementar: () => (contador -= 1),
    reset: () => {
      let c = contador;
      contador = 0;
      return c;
    },
  };
})();
console.log(moduloPrueba.incrementar());
console.log(moduloPrueba.incrementar());
console.log(moduloPrueba.incrementar());
console.log(moduloPrueba.reset());

//Ejemplo 2
const miEspacio = (() => {
  let miVariablePrivada, miMetodoPrivado;
  miVariablePrivada = 0;
  miMetodoPrivado = (valor1) => {
    console.log(valor1);
  };
  return {
    // Una variable pública
    miVariablePublica: "hola",
    // Una función pública que utiliza los elementos privados
    miFuncionPublica: (valor2) => {
      miVariablePrivada++;
      miMetodoPrivado(valor2);
      console.log(miVariablePrivada);
    },
  };
})();
miEspacio.miFuncionPublica("saludos");