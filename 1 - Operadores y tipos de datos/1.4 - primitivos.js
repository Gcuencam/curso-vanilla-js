// Ejercicio 1

var checkInfinity = function() {
	return Number.hasOwnProperty("Infinity");
};

var checkEpsilon = function() {
	return Number.hasOwnProperty("EPSILON");
};

// Ejercicio 2

var Book = function (title, date, editorial) {
    Book.prototype.title = title;
    Book.prototype.date = date; 
    Book.prototype.editorial = editorial;
};

// Ejercicio 3

var Book = function (title, date, editorial) {
    this.title = title;
    this.date = date; 
    this.editorial = editorial;
    this.checkDate();
};

Book.prototype.checkDate = function() {
	if(!(this.date instanceof Date)) {
		throw "Not date";
	}
}

// Ejercicio 4

// Pista: ver si editorial es instanceof editorial

var Book = function (title, date, editorial) {
    this.title = title;
    this.date = date; 
    this.editorial = editorial;
    this.checkEdit();
};

var Editorial = function (name, place, cif) {
	this.name = name;
	this.place = place;
	this.cif = cif;
};

Book.prototype.checkEdit = function() {
	if(this.editorial instanceof Editorial) {
		console.log('yeah, baby');
	} else {
		throw "NONONONONONONO!!!";
	}
};

var ed1 = new Editorial('anaya','madrid','547896541223F');
var libro1 = new Book('culo','ayer','ojete'); // Uncaught NONONONONONONO!!!
var libro2 = new Book('culo','ayer',ed1); // yeah, baby