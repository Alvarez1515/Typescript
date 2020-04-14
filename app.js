//parametro obligatorio quien:string
//parametro defecto objeto:string = "batisenal" enviando un parametro por defecto
//parametro opcional momento?:string
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batisenal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batisenal", "tarde");
