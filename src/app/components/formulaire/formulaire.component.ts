import { IClient } from './../../domain/iclient';
import { ClientService } from './../../services/clients.service';
import { IImages } from './../../domain/iimages';
import { IOffers } from 'src/app/domain/ioffres';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
   x: string;
  cli: IClient;
  offre: IOffers;
  images: IImages[];
  constructor(private service: ClientService, private fb: FormBuilder) { }

  // client = new FormGroup({
  //  nom: new FormControl(''),
  //  prenom: new FormControl(''),
  // adresse: new FormControl(''),
  // email:  new FormControl(''),
  // telephone: new FormControl('')
  // });

  clientForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    adresse: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
  });
  get f() { return this.clientForm.controls.nom; }

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
