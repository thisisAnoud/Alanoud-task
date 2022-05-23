import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroPanelComponent } from './components/intro-panel/intro-panel.component';
import { NewsPanelComponent } from './components/news-panel/news-panel.component';
import { CertficationsPanelComponent } from './components/certfications-panel/certfications-panel.component';
import { ClubsShopsPanelComponent } from './components/clubs-shops-panel/clubs-shops-panel.component';
import { EventsPanelComponent } from './components/events-panel/events-panel.component';
import { TrainingPanelComponent } from './components/training-panel/training-panel.component';
import { MembershipsPanelComponent } from './components/memberships-panel/memberships-panel.component';
import { FooterPanelComponent } from './components/footer-panel/footer-panel.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroPanelComponent,
    NewsPanelComponent,
    CertficationsPanelComponent,
    ClubsShopsPanelComponent,
    EventsPanelComponent,
    TrainingPanelComponent,
    MembershipsPanelComponent,
    FooterPanelComponent,
    FooterBarComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
