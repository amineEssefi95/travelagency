import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffresListComponent } from './components/offres-list/offres-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OffresListComponent,
    CarouselComponent,
    FilterBarComponent,
    HotelInfoComponent,
    HomeComponent,
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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
