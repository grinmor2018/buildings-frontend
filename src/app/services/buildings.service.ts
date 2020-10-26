import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Building } from '../interfaces/Building';
import { Ambit } from '../interfaces/Ambit';
import { Floor } from '../interfaces/Floor';
import { Waitingroom } from '../interfaces/Waitingroom';
import { Servicespeciality } from '../interfaces/Servicespeciality';
import { Consultingroom } from '../interfaces/Consultingroom';
import { Room } from '../interfaces/Room';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  public selectedAmbit: Ambit = {
    code: '',
    name: ''
  };

  readonly URL: string= 'http://localhost:3000';

  constructor( private http: HttpClient ) {
  }

    // Edificis
    getBuildings(): Observable<Building[]>{
      return this.http.get<Building[]>(`${this.URL}/buildings`);
    }
    getBuilding(id:string): Observable<Building>{
      return this.http.get<Building>(`${this.URL}/buildings/$id`);
    }
    createBuilding(building: Building): Observable<Building>{
      return this.http.post<Building>(`${this.URL}/buildings/create`, building);
    }
    deleteBuilding(id:string): Observable<Building>{
      return this.http.delete<Building>(`${this.URL}/buildings/delete?buildingId=${id}`);
    }
    updateBuilding(id:string, building: Building): Observable<Building>{
      return this.http.put<Building>(`${this.URL}/buildings/update?buildingId=${id}`,building);
    }

    // Àmbits
    getAmbits(): Observable<Ambit[]>{
      return this.http.get<Ambit[]>(`${this.URL}/ambits`);
    }
    getAmbit(id:string): Observable<Ambit>{
      return this.http.get<Ambit>(`${this.URL}/ambits/${id}`);
    }
    createAmbit(ambit: Ambit): Observable<Ambit>{
      return this.http.post<Ambit>(`${this.URL}/ambits/create`, ambit);
    }
    deleteAmbit(id:string): Observable<Ambit>{
      return this.http.delete<Ambit>(`${this.URL}/ambits/delete?ambitId=${id}`);
    }
    updateAmbit(id:string, ambit: Ambit): Observable<Ambit>{
      return this.http.put<Ambit>(`${this.URL}/ambits/update?ambitId=${id}`, ambit);
    }

    // Plantes
    getFloors(): Observable<Floor[]>{
      return this.http.get<Floor[]>(`${this.URL}/floors`);
    }
    getFloor(id:string): Observable<Floor>{
      return this.http.get<Floor>(`${this.URL}/floors/${id}`);
    }
    createFloor(floor: Floor): Observable<Floor>{
      return this.http.post<Floor>(`${this.URL}/floors/create`, floor);
    }
    deleteFloor(id:string): Observable<Floor>{
      return this.http.delete<Floor>(`${this.URL}/floors/delete?floorId=${id}`);
    }
    updateFloor(id:string, floor: Floor): Observable<Floor>{
      return this.http.put<Floor>(`${this.URL}/floors/update?floorId=${id}`, floor);
    }

    // Sales d'espera
    getWaitingrooms(): Observable<Waitingroom[]>{
      return this.http.get<Waitingroom[]>(`${this.URL}/waitingrooms`);
    }
    getWaitingroom(id:string): Observable<Waitingroom>{
      return this.http.get<Waitingroom>(`${this.URL}/waitingrooms/$id`);
    }
    createWaitingroom(waitingroom: Waitingroom): Observable<Waitingroom>{
      return this.http.post<Waitingroom>(`${this.URL}/waitingrooms/create`, waitingroom);
    }
    deleteWaitingroom(id:string): Observable<Waitingroom>{
      return this.http.delete<Waitingroom>(`${this.URL}/waitingrooms/delete?waitingroomId=${id}`);
    }
    updateWaitingroom(id:string, waitingroom: Waitingroom): Observable<Waitingroom>{
      return this.http.put<Waitingroom>(`${this.URL}/waitingrooms/update?waitingroomId=${id}`, waitingroom);
    }

    // Servei/especialitat
    getServicespecialities(): Observable<Servicespeciality[]>{
      return this.http.get<Servicespeciality[]>(`${this.URL}/servicespecialities`);
    }
    getServicespeciality(id:string): Observable<Servicespeciality>{
      return this.http.get<Servicespeciality>(`${this.URL}/servicespecialities/$id`);
    }
    createServicespeciality(servicespeciality: Servicespeciality): Observable<Servicespeciality>{
      return this.http.post<Servicespeciality>(`${this.URL}/servicespecialities/create`, servicespeciality);
    }
    deleteServicespeciality(id:string): Observable<Servicespeciality>{
      return this.http.delete<Servicespeciality>(`${this.URL}/servicespecialities/delete?servicespecialityId=${id}`);
    }
    updateServicespeciality(id:string, servicespeciality: Servicespeciality): Observable<Servicespeciality>{
      return this.http.put<Servicespeciality>(`${this.URL}/servicespecialities/update?servicespecialityId=${id}`, servicespeciality);
    }

    // Consultoris
     getConsultingrooms(): Observable<Consultingroom[]>{
      return this.http.get<Consultingroom[]>(`${this.URL}/consultingrooms`);
    }
    getConsultingroom(id:string): Observable<Consultingroom>{
      return this.http.get<Consultingroom>(`${this.URL}/consultingrooms/$id`);
    }
    createConsultingroom(consultingroom: Consultingroom): Observable<Consultingroom>{
      return this.http.post<Consultingroom>(`${this.URL}/consultingrooms/create`, consultingroom);
    }
    deleteConsultingroom(id:string): Observable<Consultingroom>{
      return this.http.delete<Consultingroom>(`${this.URL}/consultingrooms/delete?consultingroomId=${id}`);
    }
    updateConsultingroom(id:string, consultingroom: Consultingroom): Observable<Consultingroom>{
      return this.http.put<Consultingroom>(`${this.URL}/consultingrooms/update?consultingroomId=${id}`, consultingroom);
    }


    // Habitacions
    getRooms(): Observable<Room[]>{
      return this.http.get<Room[]>(`${this.URL}/rooms`);
    }
    getRoom(id:string): Observable<Room>{
      return this.http.get<Room>(`${this.URL}/rooms/$id`);
    }
    createRoom(room: Room): Observable<Room>{
      return this.http.post<Room>(`${this.URL}/rooms/create`, room);
    }
    deleteRoom(id:string): Observable<Room>{
      return this.http.delete<Room>(`${this.URL}/rooms/delete?roomId=${id}`);
    }
    updateRoom(id:string, room: Room): Observable<Room>{
      return this.http.put<Room>(`${this.URL}/rooms/update?roomId=${id}`, room);
    }


}
