import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomLinkComponent } from './components/custom-link/custom-link.component';
import { EventCardComponent } from './components/event-card/event-card.component';



@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomLinkComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomButtonComponent,
    CustomLinkComponent,
    EventCardComponent
  ]
})
export class SharedModule { }
