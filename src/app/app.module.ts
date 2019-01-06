import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffresListComponent } from './components/offres-list/offres-list.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HotelInfoComponent } from './components/hotel-info/hotel-info.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { AjouterOffreComponent } from './admin/ajouter-offre/ajouter-offre.component';
import { MapComponent } from './components/map/map.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OffresListComponent,
    CarouselComponent,
    FilterBarComponent,
    HotelInfoComponent,
    HomeComponent,
    AjouterOffreComponent,
    MapComponent,
    FormulaireComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularFontAwesomeModule,
    RatingModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot( { apiKey: 'AIzaSyA7j6m83oRTCQ0KK6WoveUMlr0yhP5eAvo' } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
