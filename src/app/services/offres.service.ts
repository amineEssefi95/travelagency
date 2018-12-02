import { Injectable } from '@angular/core';
import { IOffers } from '../domain/ioffres';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  URL = 'http://localhost:8080/offre/';

  constructor(private _http: HttpClient) { }


  getAllOffres(): Observable<IOffers[]> {
   return  this._http.get<IOffers[]>(this.URL);
  }
  // getAllComptes(): ICompte[] {
  //   return [
  //     {
  //         'numero': 'Fake C200',
  //         'proprietaire': 'Dave Seyer & Phil Webb, Boot Creators',
  //         'solde': 10
  //     },
  //     {
  //         'numero': 'Fake C3000',
  //         'proprietaire': 'Rod Johnson',
  //         'solde': 3000
  //     },
  //     {
  //         'numero': 'Fake  C4000',
  //         'proprietaire': 'Martin Fowler',
  //         'solde': 4000
  //     }
  //   ];
  // }
}
