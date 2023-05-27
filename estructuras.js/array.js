//Estructura de datos tipo objeto. Valor que guarda más valores en su interior

var frutas = ["naranja","peras","manzanas","piñas"];
//Para ver cuántos elementos tiene el array, es decir su longitud (length)

console.log(frutas.length);

//Métodos de los arrays

//-- Agregar elementos

var masFrutas = frutas.push("uvas");
//--- la otra formas más corta es:
frutas.push("uvas");

//-- Quitar elementos. El método elimina el último elemento
var ultimo = frutas.pop(uvas);
//--- Forma corta
frutas.pop();

//--Agregar un elemento al inicio del array
var primero = frutas.unshift ("cerezas");
//---Forma corta
frutas.unshift ("cerezas");

//--Elimina el elemento que está en el inicio
var borrarfruta = frutas.shift();
//---Forma corta
frutas.shift();

//--Me da la ubicación del elemento
var position = frutas.indexOf("cereza");
//--- Forma corta
frutas.indexOf("cereza");