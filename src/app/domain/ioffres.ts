import { IImages } from './iimages';

export interface IOffers {
  idOffre: number;
  image: IImages[];
  adress: string;
  nomHotel: string;
  nombreEtoile: number;
  prixNuite: number;
  region: string;
  ville: string;
  reservations?: any[];
}
