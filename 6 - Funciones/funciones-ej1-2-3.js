/* EJERCICIO 1 */

const MathLib = function(){};

MathLib.prototype.sum = (x, y) => {
	return x + y;
}

MathLib.prototype.subs = (x, y) => {
	return x - y;
}

MathLib.prototype.mult = (x, y) => {
	return x * y;
}

MathLib.prototype.div = (x, y) => {
	return x / y;
}

const math = new MathLib();


/* EJERCICIO 2 */

MathLib.prototype.fibonacci = function *() {
	let[ant, act] = [0, 1];
	for(;;) {
		[ant, act] = [act, ant + act];
		yield act;
	}
}
const fibo = math.fibonacci();
fibo.next();


/* EJERCICIO 3 */

MathLib.prototype.secGradeFunc = function(a, b, c) {
	let array = [],
		first = (-b + Math.sqrt(b*b - 4*a*c))/(2*a),
		sec   = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
	if ()
	if (!isNaN(first)) array.push(first);
	if (!isNaN(sec)) array.push(sec);
	return array;
}


/* EJERCICIO 4 */

// Crear un Map que se llame cache y ahí metemos como 
// key un string que sean los parámetros ("-2, 4, 0") y 
// como value el array con los valores de la ecuación.
// Luego, en la función secGradeFunc(), metemos una condición
// que compruebe si en el Map existe el cálculo y nos lo 
// devuelva y, si no, que lo haga y lo dvuelva.

const cache = new Map([]);