import { IOffers } from 'src/app/domain/ioffres';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from './../../domain/iclient';
import { ClientService } from './../../services/clients.service';
import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  cli: IClient;
  offre: IOffers;
  constructor(private service: ClientService, private service2: ReservationService, private fb: FormBuilder,
              private activatedRoute: ActivatedRoute, private offresservice: OffresService,
              private router: Router) { }

  clientForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
    ville: ['', Validators.required],
    region: ['', Validators.required],
    rue: ['', Validators.required],
    datedeb: ['', Validators.required],
    nbjours: ['', Validators.required],
    nbpersonne: ['', Validators.required],
    prix: ['', Validators.required],
  });

  addClient(): void {
    const formValue = this.clientForm.value;
    this.cli = {
      nom: formValue.nom,
      prenom: formValue.prenom,
      email: formValue.email,
      numeroTelephone: formValue.telephone,
      ville: formValue.ville,
      region: formValue.region,
      rue: formValue.rue,
      reservations: [{
        dateDebut: new Date(formValue.datedeb),
        nombreJours: +formValue.nbjours,
        nombrePersonne: +formValue.nbpersonne,
        prix: +formValue.prix,
        offre: this.offre
    }],
    };
    this.service.addClient(this.cli).subscribe(res => {console.log(res);
                                                      this.router.navigate(['home']);
                                                      },
                                               error => console.log(error));

  }

  ngOnInit() {
    this.offresservice.getOffresById(this.activatedRoute.snapshot.params['id']).subscribe(
      res => this.offre = res,
      err => console.log(`ATTENTION : Il ya l'exception : {err} `)
   );
  }
}
