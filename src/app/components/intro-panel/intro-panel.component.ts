import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-intro-panel',
  templateUrl: './intro-panel.component.html',
  styleUrls: ['./intro-panel.component.scss'],
  animations:[
    trigger('imageMove',[
      transition(':enter',[
        style({ transform: "translateY(-20%) translateX(-20%)", opacity: 0}),
        animate(
          '1.5s',
          style({transform: 'translateX(0%) translateY(0%)', opacity: 1 })
        ),

      ])
      /*state('move',style({
        transform: 'translateX(-100%)'
      }))*/
    ])
  ]
})
export class IntroPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  logAnimation(event: any) {
    console.log(event)
  }

}
