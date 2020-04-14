//desectructuracion de un objeto

// // let miFuncion3F = (nombre:string) => {
// let avenger = {
//     nombre: "Steve",
//     clave: "Capitan America",
//     poder: "Droga"
// }

// let { nombre, clave, poder } = avenger;
// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;

// console.log(nombre, clave, poder);

//desestructuracion de arreglos
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = avengers;
//solo mostrara a tony
//let [, , ironman] = avengers;

console.log( thor, capi, ironman);