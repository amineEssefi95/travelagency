import { IReservation } from './../domain/ireservation';
import { IClient } from './../domain/iclient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

   URL = 'https://aminetravelagency.herokuapp.com/client/';
  constructor(private _http: HttpClient) {}

  addClient(cli: IClient): Observable<object> {

    return this._http.post(this.URL, cli);
  }
  getAllClient(): Observable<IClient[]> {
    return this._http.get<IClient[]>(this.URL);
  }
}
