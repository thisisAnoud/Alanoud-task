import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certfications-panel',
  templateUrl: './certfications-panel.component.html',
  styleUrls: ['./certfications-panel.component.scss'],
  animations:[
    trigger('fadeInFromLeft',[
      transition(':enter',[
        style({ transform: "translateX(100%)", opacity: 0}),
        animate(
          '1.5s',
          style({transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
      transition(':leave',[
        style({transform: 'translateX(0%)', opacity: 1 }),
        animate(
          '1.5s',
        style({ transform: "translateX(100%)", opacity: 0}),
        ),

      ])
    ]),
    trigger('fadeInFromTop',[
      transition(':enter',[
        style({ transform: "translateY(-20%)", opacity: 0}),
        animate(
          '1.5s',
          style({transform: 'translateX(0%)', opacity: 0.7 })
        ),

      ]),
      transition(':leave',[
          style({transform: 'translateX(0%)', opacity: 0.7 }),
        animate(
          '1.5s',
          style({ transform: "translateY(-20%)", opacity: 0}),
        ),

      ])
    ])
  ]
})
export class CertficationsPanelComponent implements OnInit {
  @ViewChild("certifications") certifications: ElementRef<HTMLElement> = {} as ElementRef;
  isInView = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  isSectionVisible() {
    if(this.certifications) {
      const rect = this.certifications.nativeElement.getBoundingClientRect();
      this.isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  }

}
