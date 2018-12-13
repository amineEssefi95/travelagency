import { IOffers } from 'src/app/domain/ioffres';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffresService {
  URL = 'http://localhost:8080/offre/';
  constructor(private _http: HttpClient) {}

  getAllOffres(): Observable<IOffers[]> {
    return this._http.get<IOffers[]>(this.URL);
  }

  getOffresById(id: number): Observable<IOffers> {
    return this._http.get<IOffers>(this.URL + id);
  }

}
