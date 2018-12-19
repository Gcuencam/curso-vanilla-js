/* EJERCICIO 1 */

//////////// PARTE ANTIGUA ////////////

const Jugador = function(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}

const jugador1 = new Jugador('Nombre1', 'Apellido1', 20, 'Altura1');
const jugador2 = new Jugador('Nombre2', 'Apellido2', 30, 'Altura2');
const jugador3 = new Jugador('Nombre3', 'Apellido3', 40, 'Altura3');
const jugador4 = new Jugador('Nombre4', 'Apellido4', 19, 'Altura4');
const jugador5 = new Jugador('Nombre5', 'Apellido5', 25, 'Altura5');
const jugador6 = new Jugador('Nombre6', 'Apellido6', 35, 'Altura6');
const jugador7 = new Jugador('Nombre7', 'Apellido7', 78, 'Altura7');
const jugador8 = new Jugador('Nombre8', 'Apellido8', 28, 'Altura8');
const jugador9 = new Jugador('Nombre9', 'Apellido9', 32, 'Altura9');

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


//////////// PARTE NUEVA ////////////

Plantilla.prototype.mayoresDeTreinta = function() {
	const players = [];
	for (let player of tit) {
		players.push(player);
	}
	for (let player of banq) {
		players.push(player);
	}
	const viejos = players.filter(i => i.edad > 30);
  viejos.forEach(i => {
    console.log(`${i.nombre}, ${i.apellido}`);
  })
}