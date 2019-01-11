import { IImages } from './iimages';

export interface IOffers {
  idOffre?: number;
  adress: string;
  nomHotel: string;
  region: string;
  ville: string;
  description: string;
  nombreEtoile: number;
  prixNuiteAllInclusive: number;
  prixNuiteAllInclusiveSoft: number;
  prixNuiteDemiPension: number;
  prixNuitePensionComplete: number;
  longitude: number;
  latitude: number;
  pays: string;
  reservations?: any[];
  images: IImages[];
}
