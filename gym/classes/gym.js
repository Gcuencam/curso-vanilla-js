export class Gym {
	constructor(name, cif) {
		this.name    = name;
		this.cif     = cif;
		this.centers = new Set([]);
	}
	addCenter(center) {
		this.centers.add(center);
	}
}