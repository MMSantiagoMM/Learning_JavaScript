var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];
//El método filter permite filtrar los datos. En este caso se crea una función con el parámetro "articulo" para retornar los articulos que cuestan igual o menos que 500    
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

// El método map devulve, en este caso, solo los nombres de los objetos creados con posterioridad

var nombreArticulo = articulos.map(function (articulo) {
    return articulo.nombre
});

//El método find se encarga de buscar un elemento en particular

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});

//A diferencia de los anteriores, este nuevo método no genera un nuevo array, simplemente hace un filtrado sobre el array principal sin modificarlo

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

//Este método regresa una validación de verdadero o falso para artículos que cumplan esa validación 
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});