import { Person } from './classes/person.js';
import { Member } from './classes/member.js';
import { Teacher } from './classes/teacher.js';
import { Gym } from './classes/gym.js';
import { Center } from './classes/center.js';
import { PilatesRoom } from './classes/pilatesRoom.js';
import { MachinesRoom } from './classes/machinesRoom.js';
import { Clase } from './classes/clase.js';
import { Schedule } from './classes/schedule.js';

const person1 = new Person('Gabriel', 'Cuenca', 23, 'male', '54753324H');

const teacher1 = new Teacher('Eva', 'Belmonte', 36, 'female', '66547445W', 6);
const teacher2 = new Teacher('Tatus', 'Barnolis', 39, 'male', '44147555G', 8);

const gym1 = new Gym('Calypso', 'N054775584');

const center1 = new Center('Moratalaz', 'Madrid', 28030, person1);

const pilates1 = new PilatesRoom(25, true);

const machines1 = new MachinesRoom(36, true);

const spinning = new Clase(teacher1, machines1);
const zumba = new Clase(teacher2, pilates1);

Schedule.addTimes(spinning);
