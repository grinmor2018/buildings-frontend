import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Edifici } from '../interfaces/Edifici';
import { Ambit } from '../interfaces/Ambit';
import { Planta } from '../interfaces/Planta';
import { Sala } from '../interfaces/Sala';
import { Servespe } from '../interfaces/Servespe';
import { Contacte } from '../interfaces/Contacte';
import { Servei } from '../interfaces/Servei';
import { Resposta } from '../interfaces/Resposta';

@Injectable({
  providedIn: 'root'
})
export class RespostasService {

  public selectedServespe: Servespe = {
    nomservei: '',
    hab_cons: ''
  };

  readonly URL: string= 'http://localhost:3000';

  constructor( private http: HttpClient ) {
  }

    // Respostas
    getRespostas(): Observable<Resposta[]>{
      return this.http.get<Resposta[]>(`${this.URL}/Respostas`);
    }
    getResposta(id:string): Observable<Resposta>{
      return this.http.get<Resposta>(`${this.URL}/Respostas/$id`);
    }
    createResposta(Resposta: Resposta): Observable<Resposta>{
      return this.http.post<Resposta>(`${this.URL}/Respostas/create`, Resposta);
    }
    deleteResposta(id:string): Observable<Resposta>{
      return this.http.delete<Resposta>(`${this.URL}/Respostas/delete?RespostaId=${id}`);
    }
    updateResposta(id:string, Resposta: Resposta): Observable<Resposta>{
      return this.http.put<Resposta>(`${this.URL}/Respostas/update?RespostaId=${id}`,Resposta);
    }

    // Edificis
    getEdificis(): Observable<Edifici[]>{
      return this.http.get<Edifici[]>(`${this.URL}/Edificis`);
    }
    getEdifici(id:string): Observable<Edifici>{
      return this.http.get<Edifici>(`${this.URL}/Edificis/$id`);
    }
    createEdifici(Edifici: Edifici): Observable<Edifici>{
      return this.http.post<Edifici>(`${this.URL}/Edificis/create`, Edifici);
    }
    deleteEdifici(id:string): Observable<Edifici>{
      return this.http.delete<Edifici>(`${this.URL}/Edificis/delete?EdificiId=${id}`);
    }
    updateEdifici(id:string, Edifici: Edifici): Observable<Edifici>{
      return this.http.put<Edifici>(`${this.URL}/Edificis/update?EdificiId=${id}`,Edifici);
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
    getPlantas(): Observable<Planta[]>{
      return this.http.get<Planta[]>(`${this.URL}/Plantas`);
    }
    getPlanta(id:string): Observable<Planta>{
      return this.http.get<Planta>(`${this.URL}/Plantas/${id}`);
    }
    createPlanta(Planta: Planta): Observable<Planta>{
      return this.http.post<Planta>(`${this.URL}/Plantas/create`, Planta);
    }
    deletePlanta(id:string): Observable<Planta>{
      return this.http.delete<Planta>(`${this.URL}/Plantas/delete?PlantaId=${id}`);
    }
    updatePlanta(id:string, Planta: Planta): Observable<Planta>{
      return this.http.put<Planta>(`${this.URL}/Plantas/update?PlantaId=${id}`, Planta);
    }

    // Sales d'espera
    getSalas(): Observable<Sala[]>{
      return this.http.get<Sala[]>(`${this.URL}/Salas`);
    }
    getSala(id:string): Observable<Sala>{
      return this.http.get<Sala>(`${this.URL}/Salas/$id`);
    }
    createSala(Sala: Sala): Observable<Sala>{
      return this.http.post<Sala>(`${this.URL}/Salas/create`, Sala);
    }
    deleteSala(id:string): Observable<Sala>{
      return this.http.delete<Sala>(`${this.URL}/Salas/delete?SalaId=${id}`);
    }
    updateSala(id:string, Sala: Sala): Observable<Sala>{
      return this.http.put<Sala>(`${this.URL}/Salas/update?SalaId=${id}`, Sala);
    }

    // Servei/especialitats
    getServespes(): Observable<Servespe[]>{
      return this.http.get<Servespe[]>(`${this.URL}/Servespes`);
    }
    getServespe(id:string): Observable<Servespe>{
      return this.http.get<Servespe>(`${this.URL}/Servespes/$id`);
    }
    createServespe(Servespe: Servespe): Observable<Servespe>{
      return this.http.post<Servespe>(`${this.URL}/Servespes/create`, Servespe);
    }
    deleteServespe(id:string): Observable<Servespe>{
      return this.http.delete<Servespe>(`${this.URL}/Servespes/delete?ServespeId=${id}`);
    }
    updateServespe(id:string, Servespe: Servespe): Observable<Servespe>{
      return this.http.put<Servespe>(`${this.URL}/Servespes/update?ServespeId=${id}`, Servespe);
    }

    // Contactes
     getContactes(): Observable<Contacte[]>{
      return this.http.get<Contacte[]>(`${this.URL}/Contactes`);
    }
    getContacte(id:string): Observable<Contacte>{
      return this.http.get<Contacte>(`${this.URL}/Contactes/$id`);
    }
    createContacte(Contacte: Contacte): Observable<Contacte>{
      return this.http.post<Contacte>(`${this.URL}/Contactes/create`, Contacte);
    }
    deleteContacte(id:string): Observable<Contacte>{
      return this.http.delete<Contacte>(`${this.URL}/Contactes/delete?ContacteId=${id}`);
    }
    updateContacte(id:string, Contacte: Contacte): Observable<Contacte>{
      return this.http.put<Contacte>(`${this.URL}/Contactes/update?ContacteId=${id}`, Contacte);
    }


    // Serveis
    getServeis(): Observable<Servei[]>{
      return this.http.get<Servei[]>(`${this.URL}/Serveis`);
    }
    getServei(id:string): Observable<Servei>{
      return this.http.get<Servei>(`${this.URL}/Serveis/$id`);
    }
    createServei(Servei: Servei): Observable<Servei>{
      return this.http.post<Servei>(`${this.URL}/Serveis/create`, Servei);
    }
    deleteServei(id:string): Observable<Servei>{
      return this.http.delete<Servei>(`${this.URL}/Serveis/delete?ServeiId=${id}`);
    }
    updateServei(id:string, Servei: Servei): Observable<Servei>{
      return this.http.put<Servei>(`${this.URL}/Serveis/update?ServeiId=${id}`, Servei);
    }


}
