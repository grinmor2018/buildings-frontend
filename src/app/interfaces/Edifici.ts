import { Contacte } from './Contacte';
import { Servei } from './Servei';

export interface Edifici {

  iden: string;
  nom: string;
  adresa: string;
  imatge: string;
  lloc: string;
  contacte: Contacte[];
  serveis: Servei[];

}
