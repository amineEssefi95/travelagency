import { IImages } from './../../domain/iimages';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  @Input() images: IImages[];
  ngOnInit() {
  }
}
