import { IClient } from './../../domain/iclient';
import { ClientService } from './../../services/clients.service';
import { IImages } from './../../domain/iimages';
import { IOffers } from 'src/app/domain/ioffres';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  cli: IClient;
  offre: IOffers;
  images: IImages[];
  constructor(private service: ClientService, private fb: FormBuilder) { }

  clientForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
    ville: ['', Validators.required],
    region: ['', Validators.required],
    rue: ['', Validators.required],
  });

  addClient(): void {
    const formValue = this.clientForm.value;
    this.cli = {
      nom: formValue.nom,
      prenom: formValue.prenom,
      adresse: formValue.adresse,
      email: formValue.email,
      numeroTelephone: +formValue.telephone
    };

    this.service.addClient(this.cli).subscribe(res => console.log(res), error => console.log(error));
  }

  ngOnInit() {

  }
}
