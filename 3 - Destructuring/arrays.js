/* EJERCICIO 1 */

function weather() {
  return ["Nublado", "Parcialmente nublado", "Soleado", "Soleado", "Chubascos", "Tormenta", "Nublado"];
}

let[,martes,,jueves] = weather();

console.log(martes); // Parcialmente nublado.
console.log(jueves); // Soleado.


/* EJERCICIO 2 */

function weather() {
  return ["Nublado", "Parcialmente nublado", "Soleado", "Soleado", "Chubascos", "Tormenta", "Nublado"];
}

let martes = weather()[1];
let jueves = weather()[3];

console.log(martes); // Parcialmente nublado.
console.log(jueves); // Soleado.


/* EJERCICIO 3 */

function blackDataMOCKAPI() {
  return [
    ["Francisco", "Pérez", "López", 54, "+34", "657334231", "fran@perez.com"],
    ["Marina", "Carrasco", "Martínez", 34, , "691231778", "mar@carras.com"],
    ["Laura", "Smith", "Donovan", 22, "+12", "143234776", "laura@smith.com"]
  ]
};

function spam(name, surname, prefix, phone, mail) {
	const data = blackDataMOCKAPI();
	for (let i=0; i<data.length; i+=1) {
		let[name, surname, , , prefix="+34", phone, mail] = data[i];
  		console.log(`${name}, ${surname}, ${prefix}, ${phone}, ${mail}`);
  	}
};

spam();

// Output: 
// Francisco, Pérez, +34, 657334231, fran@perez.com
// Marina, Carrasco, +34, 691231778, mar@carras.com
// Laura, Smith, +12, 143234776, laura@smith.com

// Con ECMAScript5

function spam(name, surname, prefix, phone, mail) {
	var data = blackDataMOCKAPI();
	for (var i=0; i<data.length; i+=1) {
		var name    = data[i][0],                                  // cuando veamos que se repite el patrón
			surname = data[i][1],                                  // data[i][j] varias veces, es muy probable
			prefix  = data[i][4]==undefined ? '+34' : data[i][4],  // que podamos solucionarlo con Destructuring
			phone   = data[i][5],
			mail    = data[i][6];
  		console.log(name+', '+surname+', '+prefix+', '+phone+', '+mail);
  	}
};