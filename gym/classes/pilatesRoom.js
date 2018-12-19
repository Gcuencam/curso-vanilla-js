import { Room } from './room.js';

export class PilatesRoom extends Room {
	constructor(area, windows, materials) {
		super(area, windows, materials);
		this.pilatesMaterials = new Set([...this.materials, 'balón medicinal', 'espalderas']);
	}
	returnMaterials() {
		return this.pilatesMaterials
	}
}