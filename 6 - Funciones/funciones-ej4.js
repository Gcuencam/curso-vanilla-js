/* EJERCICIO 4 */

const MathLib = function(){
	this.cache = new Map([]);
};

MathLib.prototype.secGradeFunc = function(a, b, c) {
	let param = `${a}, ${b}, ${c}`;
	if (this.cache.has(param)) {
		return this.cache.get(param);
	} else {
		let array = [],
			first = (-b + Math.sqrt(b*b - 4*a*c))/(2*a),
			sec   = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
		!isNaN(first) && array.push(first);
		!isNaN(sec) && array.push(sec);
		this.cache.set(param, array);
		return array;
	}
}

const math = new MathLib();
