import { IImages } from './../../domain/iimages';
import { IOffers } from './../../domain/ioffres';
import { OffresService } from 'src/app/services/offres.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit {
  offre: IOffers;
  images: IImages[];
  constructor(private offresservice: OffresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.offresservice.getOffresById(this.activatedRoute.snapshot.params['id']).subscribe(
    res => this.offre = res,
    err => console.log(`ATTENTION : Il ya l'exception : {err} `)
 );
    this.images = this.offre.images;
  }
}
