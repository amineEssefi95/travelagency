import { IOffers } from './../domain/ioffres';
import { OffresService } from 'src/app/services/offres.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit {

  offre: any;

  constructor(private offresservice: OffresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   // this.offre = this.offresservice.getOffresById(this.activatedRoute.snapshot.params['id']);
   this.offresservice.getOffresById(this.activatedRoute.snapshot.params['id']).subscribe(
    res => this.offre = res,
    err => console.log(`ATTENTION : Il ya l'exception : {err} `)
 );
   console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.offre.nomHotel);
  }

}
