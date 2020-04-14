// let miFuncion = function(a:any){
//     return a;
// }

// let miFuncionF = (a: any) => a;


// let miFuncion2 = function(a:number, b:number){
//     return a + b;
// }

// let miFuncion2F = (a:number, b:number) => a+b;

// let miFuncion3 = function(nombre:string){
//     nombre = nombre.toLocaleUpperCase();
//     return nombre;
// }

// let miFuncion3F = (nombre:string) => {
//     nombre = nombre.toLocaleUpperCase();
//     return nombre;
// }

// console.log();

let nombre = "Pedro";

let hulk = {
    nombre: "Hulk",
    smash(){

        setTimeout( () => console.log(this.nombre + " smash!!"), 1500);
        
    }
}

hulk.smash();

