var estudiantes = ["Sandra","Pablo","Darío","Javier"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

while (estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}