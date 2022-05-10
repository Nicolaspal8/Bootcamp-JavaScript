const promiseOriginal = (t) =>{
    return new Promise((result, reject) => {
        for(let i = 0; i< t; i++){
           let v =  Math.sqrt(i)
        }
         result(t)
    })
}
const promise3 =  promiseOriginal(1);
const promise1 = promiseOriginal(6);
const promise2 =  promiseOriginal(8);

const promesas = [promise1, promise2, promise3]
const pregunta = (promesas) => {
    Promise.race(promesas)
    .then(response => console.log('La estrella es para:', response))
    }
pregunta(promesas)

//Ejemplo de Promesa.race
// const randomNumber = (min, max) => {
//   return parseInt(Math.random() * (max - min) + min);
// };
// const responder = (alumno) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(alumno);
//     }, randomNumber(500, 700));
//   });

// const pregunta = (alumnos) => {
//   Promise.race(alumnos).then((response) =>
//     console.log("La estrella es para:", response)
//   );
// };
// const Carlos = responder("Carlos");
// const Maria = responder("Maria");
// const Cristian = responder("Cristian");
// const alumnos = [Carlos, Maria, Cristian];
// pregunta(alumnos);
