/* EJERCICIO 2 */

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

class Teacher extends Person {
	constructor(name, surname, age, gender, nif, hours) {
		super(name, surname, age, gender, nif);
		this.hours = hours;
	}
}

const teacher1 = new Teacher('Eva', 'Belmonte', 36, 'female', '66547445W', 6);
const teacher2 = new Teacher('Tatus', 'Barnolis', 39, 'male', '44147555G', 8);

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

const gym1 = new Gym('Calypso', 'N054775584');

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

class Room {
	constructor(area, windows) {
		if (new.target === Room) { // esto se hace porque es una clase abstracta
			throw new TypeError("Cannot construct Abstract instances directly.");
		}
		this.area      = area;
		this.windows   = windows;
		this.materials = new Set(['esterillas']);
	}
}

class PilatesRoom extends Room {
	constructor(area, windows, materials) {
		super(area, windows, materials);
		this.pilatesMaterials = new Set([...this.materials, 'balón medicinal', 'espalderas']);
	}
	returnMaterials() {
		return this.pilatesMaterials
	}
}

const pilates1 = new PilatesRoom(25, true);

class MachinesRoom extends Room {
	constructor(area, windows, materials) {
		super(area, windows, materials);
		this.pilatesMaterials = new Set([...this.materials, 'máquina abdominales', 'maquina sentadillas']);
	}
	returnMaterials() {
		return this.pilatesMaterials
	}
}

const machines1 = new MachinesRoom(36, true);

class Clase {
	constructor (teacher, room) {
		this.teacher = teacher;
		this.room    = room;
	}
}

const spinning = new Clase(teacher1, machines1);
const zumba = new Clase(teacher2, pilates1);

class Schedule {
	// static start     = 8;
	// static end       = 15;
	// static interval  = 2;
	// static timetable = new Map([]);

	static get start() {return 8};
	static get end() {return 15};
	static get interval() {return 2};
	static get timetable() {return new Map([])};

	static addTimes(clase) {
		let[first, last] = [Schedule.start, Schedule.start + Schedule.interval];
		for (let i=0, len = (Schedule.end - Schedule.start) / Schedule.interval; i < len; i+=1) {
			let startFinish = `${first}:00 - ${last}:00`;
			console.log('startFinish', startFinish);
			console.log('clase', clase);
			Schedule.timetable.set(startFinish, clase);
			console.log(Schedule.timetable.size);
			[first, last] = [first + Schedule.interval, last + Schedule.interval];
		}
	}
}

Schedule.addTimes(spinning);

// const schedule1 = new Schedule(9, 15, 2);
// const schedule2 = new Schedule(11, 19, 1);

// schedule1.addTimes(spinning);
// schedule2.addTimes(zumba);