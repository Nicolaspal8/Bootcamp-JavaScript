
function ejecutar(programa) {
  const memoria = []
  let punteroMemoria = 0
  for (let instruccion = 0; instruccion < programa.length; instruccion++) {
    if (punteroMemoria >= memoria.length)
      memoria.push(0)
    switch (programa[instruccion]) {
      case '๐':
        punteroMemoria++
        break
      case '๐': punteroMemoria--
    
        break
      case '๐': if (memoria[punteroMemoria] === 255)
        memoria[punteroMemoria] = 0
      else
        memoria[punteroMemoria]++
        break
      case '๐': if (memoria[punteroMemoria] === 0)
        memoria[punteroMemoria] = 255
      else
        memoria[punteroMemoria]--
        break
      case '๐':
        console.log(String.fromCharCode(memoria[punteroMemoria]))
        break
      case '๐ค': {
        if (memoria[punteroMemoria] === 0) {
          let cant = 1 
          while (cant > 0) { 
            instruccion++
            if (programa[instruccion] === '๐ค')
              cant--
            if (programa[instruccion] === '๐ค')
              cant++ // Indica que hay un puรฑo mรกs anidado que deberemos ignorar un cerrado 
          }
        }
        break;
      }
      case '๐ค': {
        if (memoria[punteroMemoria] !== 0) {
          let cant = 1
          while (cant > 0) {
            instruccion--
            if (programa[instruccion] === '๐ค')
              cant--
            if (programa[instruccion] === '๐ค')
              cant++
          }
        }
        break
      }
    } // switch
  }
}

const programa1 = Array.from("๐๐ค๐๐๐๐๐๐๐๐๐๐๐ค๐๐๐๐๐ค๐๐๐๐๐๐๐๐๐ค๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐")
console.log('Resultado de ejecutar el primer programa')
ejecutar(programa1)

const programa2 = Array.from(`๐๐๐๐๐๐๐๐๐๐ค๐๐๐๐๐๐๐๐๐๐๐๐๐ค๐๐๐๐๐๐๐๐ค๐๐ค๐๐๐๐๐๐๐๐๐๐ค๐๐ค๐๐๐๐๐๐๐๐๐๐๐๐ค๐๐๐ค๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ค๐๐ค๐๐๐๐ค๐๐๐ค๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐`)
console.log('Resultado de ejecutar el segundo programa')
ejecutar(programa2)  