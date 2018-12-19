/* EJERCICIO 1 */

const Record = function(title, company='Somy Music', single, ...songs) {
	this.title = title;
	this.company = company;
	this.single = single;
	this.songs = songs;
}

const record01 = new Record('Beneath the remains', 'Roadrunner', 'Inner Self', 'Mass Hypnosis', 'Lobotomy');
const record02 = new Record('Sky Valley', undefined, 'Gardenia', 'Demon Cleaner', 'Asteroid', '100º');
const record03 = new Record('The Downward Spiral', 'Nothing', 'Closer', 'March of the pigs', 'Hurt');

const RecordCompany = function() {
	this.records = new Set([]);
}

RecordCompany.prototype.addRecord = function(record) {
	this.records.add(record);
}

const somyMusic = new RecordCompany();