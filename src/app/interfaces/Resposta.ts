import { Edifici} from './Edifici';

export interface Resposta {
  status: string;
  idioma: string;
  edificis: Edifici[];
}
