interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen: Xmen){
    console.log("Enviando a: " + xmen.nombre);
}

let wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};

enviarMision(wolverine);