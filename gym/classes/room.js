export class Room {
	constructor(area, windows) {
		if (new.target === Room) { // esto se hace porque es una clase abstracta
			throw new TypeError("Cannot construct Abstract instances directly.");
		}
		this.area      = area;
		this.windows   = windows;
		this.materials = new Set(['esterillas']);
	}
}