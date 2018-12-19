export class Center {
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