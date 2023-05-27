//Objeto
var miMoto = {
    //Propiedades y valores
    marca: "auteco",
    modelo: "Boxer",
    annio: 2015,
    //Los objetos pueden tener funciones en su interior, las cuales se llaman métodos, métodos de objetos
    detalleDelauto: function(){
        //"this" es una variable que hace referencia al objeto (miMoto)
        console.log(`Moto ${this.modelo} ${this.annio}`)
    }
};

//Para llamar las propiedades
miMoto.marca;
//Para llamar el método de objetos
miMoto.detalleDelauto();

