import { IReservation } from './../domain/ireservation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  URL = 'https://aminetravelagency.herokuapp.com/reservation/';
  constructor(private _http: HttpClient) {}

  addReservation(res: IReservation): Observable<object> {

    return this._http.post(this.URL, res);
  }
}
