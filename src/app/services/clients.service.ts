import { IClient } from './../domain/iclient';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  URL = 'http://localhost:8080/client/';

  constructor(private _http: HttpClient) {}

  addClient(cli: IClient): Observable<object> {

    return this._http.post(this.URL, cli);
  }
}
