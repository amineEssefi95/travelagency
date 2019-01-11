import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search?: string;
  paysSearch?: string;
  villeSearch?: string;
  nbEtoile?: string;
  pays: string[];
  ville: string[];
  constructor() { }

  ngOnInit() {
  }
  listePays (data) {
    this.pays = ['Partout', ...data.sort()];
  }
  listeVille(data) {
    this.ville = ['Tout les villes', ...data.sort()];
  }

}
