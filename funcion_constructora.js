//Esta función tienen como paramétros las propiedad que espero que lso objetos tengan
function auto(marca,modelo,annio){
    //Aquí la primer marca es la propiedades del objeto y la segunda es el parametro
    this.marca = marca,
    this.modelo = modelo;
    this.annio = annio;
}
//Aquí se utiliza un nuevo operador
//Genera una nueva instancia de la función constructora
//Una instancia es generar un objeto que deriva de otro
var autoNuevo = new auto("Tesla","Model 3",2020);

var autoNuevo2 = new auto("Toyota","Corolla", 2023);