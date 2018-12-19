/* EJERCICIO1 */

let car = new Map([['Brand', 'Audi'], ['Model', 'A3'], ['cv', 190]]);

for (let property of car) {
	let [key, value] = property;
  	console.log(`${key}: ${value}`);
}

/////////CORREGIDO/////////

for (let [key, value] of car) {
  	console.log(`${key}: ${value}`);
}


/* EJERCICIO 2 */

const Mes = function(nombre, treinta) {
  	this.nombre = nombre;
  	this.treinta = treinta;
    this.semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
}

Mes.prototype.printMes = function() {
  for (let i = 1; i <= 31; i+=1) {
    let posArray = (i % 7) - 1;
    (posArray === -1) && (posArray = this.semana.length - 1);
    console.log(`${this.semana[posArray]} => ${i}`);
    if (this.treinta && i == 30) {
      break;
    }
  }
}

const smarch = new Mes('Smarch', true);

smarch.printMes();


/* EJERCICIO 4 */

const Jugador = function(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}

const jugador1 = new Jugador('Nombre1', 'Apellido1', 'Edad1', 'Altura1');
const jugador2 = new Jugador('Nombre2', 'Apellido2', 'Edad2', 'Altura2');
const jugador3 = new Jugador('Nombre3', 'Apellido3', 'Edad3', 'Altura3');
const jugador4 = new Jugador('Nombre4', 'Apellido4', 'Edad4', 'Altura4');
const jugador5 = new Jugador('Nombre5', 'Apellido5', 'Edad5', 'Altura5');
const jugador6 = new Jugador('Nombre6', 'Apellido6', 'Edad6', 'Altura6');
const jugador7 = new Jugador('Nombre7', 'Apellido7', 'Edad7', 'Altura7');
const jugador8 = new Jugador('Nombre8', 'Apellido8', 'Edad8', 'Altura8');
const jugador9 = new Jugador('Nombre9', 'Apellido9', 'Edad9', 'Altura9');

const tit = new Set([jugador1, jugador2, jugador3, jugador4, jugador5]);
const banq = new Set([jugador6, jugador7, jugador8, jugador9]);

const Plantilla = function(titulares, banquillo){
  this.titulares = titulares;
  this.banquillo = banquillo;
}

const plant = new Plantilla(tit, banq);

const Equipo = function(nombre, plantilla) {
  this.nombre = nombre;
  if(plantilla instanceof Plantilla) {
    this.plantilla = plantilla;
  } else {
    throw 'No es del tipo Plantilla';
  }
}

const eq = new Equipo('Numancia de Soria Baloncesto', plant);

Plantilla.prototype.comprobarTitulares = function(){
  return this.titulares.size === 5;
}

Plantilla.prototype.comprobarBanquillo = function(){
  return this.banquillo.size > 2 && this.banquillo.size < 9;
}

Plantilla.prototype.imprimirTitulares = function(){
  if (this.comprobarTitulares()) {
    for (let {nombre, apellido} of this.titulares) {
      console.log(`${nombre}, ${apellido}`);
    }
  }
}

Plantilla.prototype.imprimirBanquillo = function(){
  if (this.comprobarBanquillo()) {
    for (let {nombre, apellido} of this.banquillo) {
      console.log(`${nombre}, ${apellido}`);
    }
  }
}

Equipo.prototype.comprobarPlantilla = function(){
  for (let jugador of this.plantilla.titulares) {
    if (this.plantilla.banquillo.has(jugador)) {
      return false;
    }
  }
  return true;
}

Equipo.prototype.imprimirPlantilla = function(){
  if (this.comprobarPlantilla()) {
    this.plantilla.imprimirTitulares();
    this.plantilla.imprimirBanquillo();
  } else {
    throw 'Alguien coincide, gilipollas!';
  }
}
