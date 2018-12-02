import { Component, OnInit } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';
import { IOffers } from 'src/app/domain/ioffres';


@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.scss']
})
export class OffresListComponent implements OnInit {
  data: IOffers[];
  rate = 7;
  isReadonly = true;
  constructor(private _service: OffresService) { }

  ngOnInit() {
     this._service.getAllOffres().subscribe(
        res => this.data = res,
        err => console.log(`ATTENTION : Il ya l'exception : {err} `)
     );
  }

}
