import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';
import { IOffers } from 'src/app/domain/ioffres';



@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.scss']
})
export class OffresListComponent implements OnInit, OnChanges {
  bigdata: IOffers[];
  data: IOffers[];
  isReadonly = true;
  @Input() nameHotel?: string;
  @Input() paysHotel?: string;
  @Input() villeHotel?: string;
  @Input() nbEtoile?: string;
  @Output() pays = new EventEmitter() ;
  @Output() ville = new EventEmitter() ;
  constructor(private _service: OffresService) { }

  ngOnInit() {
     this._service.getAllOffres().subscribe(
        res => this.bigdata = res,
        err => console.log(`ATTENTION : Il ya l'exception : {err} `),
        () => {this.data = this.bigdata.slice(0), this.listePays(this.bigdata); }
     );
  }

  ngOnChanges() {
    this.data = this.bigdata;
    if (this.nameHotel) {
      this.data = this.bigdata.filter(element =>
         element.nomHotel.toLocaleLowerCase().indexOf(this.nameHotel.toLocaleLowerCase()) !== -1);
    }
    if (this.paysHotel) {
      this.data = this.data.filter(element =>
      element.pays.toLocaleLowerCase()  === this.paysHotel.toLocaleLowerCase());
      this.listeVille(this.data, this.paysHotel);
    }
    if (this.villeHotel) {
      this.data = this.data.filter(element =>
      element.ville.toLocaleLowerCase()  === this.villeHotel.toLocaleLowerCase() );
    }
    if (this.nbEtoile) {
      this.data = this.data.filter(element =>
      element.nombreEtoile  === +this.nbEtoile );
    }


  }
  listeVille(data: IOffers[], p: string) {
    const dataVille: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if ((!dataVille.includes(data[i].ville)) && (data[i].pays === p)) {
      dataVille.push(data[i].ville);
    }
  }
    this.ville.emit(dataVille);

}

  listePays(data: IOffers[]) {
    const dataPays: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if (!dataPays.includes(data[i].pays)) {
       dataPays.push(data[i].pays);
    }
  }
    this.pays.emit(dataPays);
}

}
