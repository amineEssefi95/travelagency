import { HomeComponent } from './components/home/home.component';
import { HotelInfoComponent } from './components/hotel-info/hotel-info.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { AjouterOffreComponent } from './admin/ajouter-offre/ajouter-offre.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'hotelinfo/:id', component: HotelInfoComponent },
    { path: 'AdminCompte/AjouterUnOffre', component: AjouterOffreComponent },
    { path: 'reservation/:id', component: FormulaireComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
