
function ejecutar(programa) {
  const memoria = []
  let punteroMemoria = 0
  for (let instruccion = 0; instruccion < programa.length; instruccion++) {
    if (punteroMemoria >= memoria.length)
      memoria.push(0)
    switch (programa[instruccion]) {
      case '👉':
        punteroMemoria++
        break
      case '👈': punteroMemoria--
    
        break
      case '👆': if (memoria[punteroMemoria] === 255)
        memoria[punteroMemoria] = 0
      else
        memoria[punteroMemoria]++
        break
      case '👇': if (memoria[punteroMemoria] === 0)
        memoria[punteroMemoria] = 255
      else
        memoria[punteroMemoria]--
        break
      case '👊':
        console.log(String.fromCharCode(memoria[punteroMemoria]))
        break
      case '🤜': {
        if (memoria[punteroMemoria] === 0) {
          let cant = 1 
          while (cant > 0) { 
            instruccion++
            if (programa[instruccion] === '🤛')
              cant--
            if (programa[instruccion] === '🤜')
              cant++ // Indica que hay un puño más anidado que deberemos ignorar un cerrado 
          }
        }
        break;
      }
      case '🤛': {
        if (memoria[punteroMemoria] !== 0) {
          let cant = 1
          while (cant > 0) {
            instruccion--
            if (programa[instruccion] === '🤜')
              cant--
            if (programa[instruccion] === '🤛')
              cant++
          }
        }
        break
      }
    } // switch
  }
}

const programa1 = Array.from("👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊")
console.log('Resultado de ejecutar el primer programa')
ejecutar(programa1)

const programa2 = Array.from(`👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊`)
console.log('Resultado de ejecutar el segundo programa')
ejecutar(programa2)  