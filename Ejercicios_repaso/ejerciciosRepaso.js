//EJERCICIO REPASO 1
function rest(a, b) {
	if (a >= b) {
    	let result = a - b;
  	} else {
    	let result = b - a; 
  	}
  	return result;
}   
//La función del ejemplo está mal, devuelve 'result is not defined' ( por el ámbito del let) y también debería convertir en negativo el número si entra en el "else".
function rest(a, b) {
	let result = '';
  	return a >= b ? a - b : -(b - a);
}
rest(1,2) // -1
rest(10,2) // 8

//EJERCICIO REPASO 2
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

//entiendo que esto no vale:
let phrase = `${student.name} ha sacado un ${student.subjects[0].scores[1]} en el examen de ${student.subjects[0].name}`	
console.log(phrase) //Daniel ha sacado un 8 en el examen de Maths

//forma menos vaga
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

let notadelnotas = function(){
	let { name,subjects:[{ name:nameAsignatura, scores:[, nota]}] } = student,
		phrase = `${name} ha sacado un ${nota} en el examen de ${nameAsignatura}`;
	return phrase;
} 
notadelnotas(); // "Daniel ha sacado un 8 en el examen de Maths"

//tengo dudas de si el ejercicio está bien, porque no se como meter un condicional para que me diga la segunda nota si el nombre de la asignatra es matemáticas.




