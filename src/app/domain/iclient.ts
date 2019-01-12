import { IReservation } from './ireservation';
export interface IClient {
  nom: string;
  prenom: string;
  ville: string;
  region: string;
  rue: string;
  email: string;
  numeroTelephone: string;
  reservations?: IReservation[];
}
