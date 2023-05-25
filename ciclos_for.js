// FOR
var estudiantes = ["Santiago","María","Rosa","Sergio"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++ ) {
    saludarEstudiantes(estudiantes[i]);
}

//FOR
var estudiantes = ["Santiago","María","Rosa","Sergio"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
// Con este for se manda a llamar a un estudiante del array estudiantes«
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}