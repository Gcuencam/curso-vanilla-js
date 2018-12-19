/* EJERCICIO 1 */

//MAL
function rest(a, b) {
	if (a >= b) {
    	let result = a - b;
  	} else {
    	let result = b - a;
  	}
  	return result;
}

//BIEN
function rest(a, b) {
	if (a >= b) { 
    	return a -= b; //Cuando una función llega a un return, acaba y no sigue el flujo
  	} 
  	return b -= a;
}

function rest(a, b) {
	return a >= b ?  a - b : b - a;
}


/* EJERCICIO 2 */

const student = {
  name: 'Daniel',
  age: 16,
  subjects: [
    {
      name: "Maths",
      scores: [7.25, 8, 7.75]
    },
    {
      name: "Philosophy",
      scores: [5, 5.8, 6]
    }
  ]
};

function studentMark () {
	let {name, subjects: [{scores: [,mark]}]} = student;
	console.log(`La segunda nota en matemáticas de ${name} es ${mark}.`);
};