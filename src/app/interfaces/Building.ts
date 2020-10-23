import { Ambit } from './Ambit';
import { Floor } from './Floor';
import { Waitingroom } from './Waitingroom';
import { Servicespeciality } from './Servicespeciality';
import { Consultingroom } from './Consultingroom';
import { Room } from './Room';

export interface Building {

  _id?: string;
  code: string;
  name: string;
  ambit: Ambit[];
  floor: Floor[];
  waitingroom: Waitingroom[];
  servicespecialty: Servicespeciality[];
  consultingroom: Consultingroom[];
  room: Room[];
  createdAt?: Date;

}
