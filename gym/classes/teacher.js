import { Person } from './person.js';

export class Teacher extends Person {
	constructor(name, surname, age, gender, nif, hours) {
		super(name, surname, age, gender, nif);
		this.hours = hours;
	}
}