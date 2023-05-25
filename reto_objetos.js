var cantidadAutos = prompt("Ingrese una cantidad de carros");

function autos (MARCA,MODELO,ANNIO) {
    this.marca = MARCA,
    this.modelo = MODELO,
    this.annio = ANNIO
}

while (cantidadRegistrados < cantidadAutos){
    let marca = prompt("Ingresa la carca del auto")
    let modelo = prompt("Ingresa el modelo del auto")
    let annio = prompt("Ingresa el annio del carro")
    cantidadRegistrados++;

}
