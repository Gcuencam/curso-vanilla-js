import { Room } from './room.js';

export class MachinesRoom extends Room {
	constructor(area, windows, materials) {
		super(area, windows, materials);
		this.pilatesMaterials = new Set([...this.materials, 'máquina abdominales', 'maquina sentadillas']);
	}
	returnMaterials() {
		return this.pilatesMaterials
	}
}