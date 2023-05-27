//Ejemplo de scope global y local
//La función sí reconoce la variable declarada e inicializada en su exterior
var nombre = "Santiago";
function lastName (apellido) {
    return nombre + " "+ apellido;
}
lastName(Mosquera);
//Ejemplo 2
var nombre = "Santiago";
function lastName () {
    //Esta variable solo existe dentro de esta función
    var miApellido = "Mosquera";
    console.log (nombre + " " + miApellido);
}