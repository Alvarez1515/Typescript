//parametro obligatorio quien:string
//parametro defecto objeto:string = "batisenal" enviando un parametro por defecto
//parametro opcional momento?:string
function activar( quien:string, objeto:string="batisenal", momento?:string){
    let mensaje:string;

    if (momento){
        mensaje = `${ quien } activo la ${objeto} en la ${momento}`;
    }else{
        mensaje = `${ quien } activo la ${objeto}`;
    }

   

    console.log(mensaje);
}

activar("Gordon", "batisenal", "tarde");



