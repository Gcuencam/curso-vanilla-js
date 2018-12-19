import { Person } from './person.js';

export class Member extends Person {
	constructor(name, surname, age, gender, nif, memberId) {
		super(name, surname, age, gender, nif);
		this.memberId = memberId;
	}
}