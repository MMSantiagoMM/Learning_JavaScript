//Coerciones implícitas 
//JavaScript concatena esto y retorna un String
var a = 4 + "7";
//JavaScript convierte estos valores a numeros
var b = 4 * "7";

//Coerción explícita
var a = 20;
var b = a + "";
//Con el método String se forza la conversión del tipo de variable      
var c = String (a);
console.log (c);    
