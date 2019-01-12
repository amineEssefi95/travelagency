import { IClient } from './iclient';
import { IOffers } from './ioffres';
export interface IReservation {
  dateDebut?: Date;
  nombreJours: number;
  nombrePersonne: number;
  prix: number;
  offre?: IOffers;
  client?: IClient;
}
