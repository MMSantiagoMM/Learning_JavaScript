//Declarativas
function miFuncion () {
    return 3;
}
//Esta función permite saludar a estudiantes que vayan ingresando
function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}
//función con return. No es necesaria la variable
function sumar (a,b) {
    var resultado = a + b;
    return resultado;
}

//Expresión 
//Dentro de los paréntesis van los parametros
var miFuncion = function (a,b) {
    return a + b;
}

miFuncion (12,43);

