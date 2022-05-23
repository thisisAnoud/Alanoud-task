import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-events-panel',
  templateUrl: './events-panel.component.html',
  styleUrls: ['./events-panel.component.scss']
})
export class EventsPanelComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    items:4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoWidth:true,
    dots: false,
    navSpeed: 600,
    navText: ['<img src="assets/icons/left-arrow.svg">', '<img src="assets/icons/right-arrow.svg" >'],
    responsive: {

      400: {
        items: 2
      },
      760: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
