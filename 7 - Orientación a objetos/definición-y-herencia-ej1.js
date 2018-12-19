/* EJERCICIO 1 */

class Person {
	constructor(name, surname, age, gender, nif) {
		this.name    = name;
		this.surname = surname;
		this.age     = age;
		this.gender  = gender;
		this.nif     = nif;
	}
}

const person1 = new Person('Gabriel', 'Cuenca', 23, 'male', '54753324H');

class Member extends Person {
	constructor(name, surname, age, gender, nif, memberId) {
		super(name, surname, age, gender, nif);
		this.memberId = memberId;
	}
}

// const member1 = new Member('Helena', 'Andrés', 32, 'female', '65887415F');
// const member2 = new Member('Sarah', 'Sanz', 28, 'female', '25114785R');
// const member3 = new Member('Alfredo', 'García', 33, 'male', '50885147Q');

class Gym {
	constructor(name, cif) {
		this.name    = name;
		this.cif     = cif;
		this.centers = new Set([]);
	}
	addCenter(center) {
		this.centers.add(center);
	}
}

const gym1 = new Gym('Calypso', 'N054775584')

class Center {
	constructor(address, city, zipcode, manager) {
		this.address  = address;
		this.city     = city;
		this.zipcode  = zipcode;
		this.manager  = manager;
		this.memberId = 0;
		this.members  = new Map([]);
	}
	addMember(name, surname, age, gender, nif) {
		let member = new Member(name, surname, age, gender, nif, this.memberId);
		this.members.set(this.memberId, member);
		this.memberId += 1;
	}
	deleteMember(memberId) {
		this.members.delete(memberId);
	}
}

const center1 = new Center('Moratalaz', 'Madrid', 28030, person1);