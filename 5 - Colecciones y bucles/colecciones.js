/* EJERCICIO 1 */

let teamS = new Set(['Messi', 'Suarez', 'Dembelé', 3]);

let [primero, segundo, tercero] = teamS;

console.log(primero, segundo, tercero);


/* EJERCICIO 2 */

const Persona = function (nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
};

const per1 = new Persona('Adolf', 'Hitler');
const per2 = new Persona('Francisco', 'Franco');
const per3 = new Persona('Benito', 'Mussolini');
const per4 = new Persona('José Antonio', 'Primo de Rivera');
const per5 = new Persona('Millán', 'Astray');

const Butaca = function (numero) {
	this.numero = numero;
};

const but1 = new Butaca(1);
const but2 = new Butaca(2);
const but3 = new Butaca(3);
const but4 = new Butaca(4);
const but5 = new Butaca(5);
const but6 = new Butaca(6);
const but7 = new Butaca(7);
const but8 = new Butaca(8);
const but9 = new Butaca(9);
const but10 = new Butaca(10);

const Sala = function (numerosala) {
	this.numerosala = numerosala;
	this.butacas = new Set([but1, but2, but3, but4, but5, but6, but7, but8, but9, but10]);
	this.reservas = new Map();
};

const SalaX = new Sala(1);

Sala.prototype.anadirReserva = function(butaca, persona) {
	this.reservas.set(butaca, persona);
}

Sala.prototype.eliminarReserva = function(reserva) {
	this.reservas.delete(reserva);
}

Sala.prototype.comprobarButaca = function(butaca) {
	if (this.reservas.has(butaca)) {
		throw "Busca otra, hijo de puta";
  	} else {
  		console.log("Has tenido suerte, imbécil.");
  	}
}

SalaX.anadirReserva(but6, per4);

SalaX.eliminarReserva(but6);

SalaX.comprobarButaca(but6);


/////////////////////CORREGIDO/////////////////////

const Persona = function (nombre, apellido) {
  	this.nombre = nombre;
  	this.apellido = apellido;
};

const per1 = new Persona('Adolf', 'Hitler');
const per2 = new Persona('Francisco', 'Franco');
const per3 = new Persona('Benito', 'Mussolini');
const per4 = new Persona('José Antonio', 'Primo de Rivera');
const per5 = new Persona('Millán', 'Astray');

const Butaca = function (numero) {
  	this.numero = numero;
};

const but1 = new Butaca(1);
const but2 = new Butaca(2);
const but3 = new Butaca(3);
const but4 = new Butaca(4);
const but5 = new Butaca(5);
const but6 = new Butaca(6);
const but7 = new Butaca(7);
const but8 = new Butaca(8);
const but9 = new Butaca(9);
const but10 = new Butaca(10);

const Sala = function (numerosala) {
  	this.numerosala = numerosala;
  	this.butacas = new Set([but1, but2, but3, but4, but5, but6, but7, but8, but9, but10]);
  	this.reservas = new Map();
};

Sala.prototype.anadirReserva = function(butaca, persona) {
	if (butaca instanceof Butaca && persona instanceof Persona)
		this.reservas.set(butaca, persona);
}

Sala.prototype.eliminarReserva = function(butaca) {
	if (butaca instanceof Butaca)
		this.reservas.delete(butaca);
}

Sala.prototype.comprobarButaca = function(butaca) {
	if (butaca instanceof Butaca)
		return this.reservas.has(butaca);
}

const sala = new Sala(1);
sala.anadirReserva(but8, per1);
sala.anadirReserva(but4, per2);
sala.anadirReserva(but5, per3);