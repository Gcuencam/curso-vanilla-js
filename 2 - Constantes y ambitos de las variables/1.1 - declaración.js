/* EJERCICIO 1 */

var x = "global";
function createScope(x) {
    x = "local";
    console.log(x); // local
}
createScope(x);
console.log(x); // global

var x = "global";
function createScope() {
    x = "local";
    console.log(x); // local
}
createScope();
console.log(x); // local

// Todos los parámetros que se pasan a las funciones por JS son por VALOR

var x = "global";
function createScope() {
    var x = "local";
    console.log(x); // local
}
createScope();
console.log(x); // global
