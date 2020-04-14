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
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
