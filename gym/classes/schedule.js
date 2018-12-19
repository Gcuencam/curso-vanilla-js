export class Schedule {
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
			Schedule.timetable.set(startFinish, clase);
			[first, last] = [first + Schedule.interval, last + Schedule.interval];
		}
	}
}