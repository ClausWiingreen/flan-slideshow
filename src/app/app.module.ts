import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

import { PlanComponent } from './plan/plan.component';
import { EventCountdownComponent } from './event-countdown/event-countdown.component';
import { DateFilterPipe } from './date-filter.pipe';
import { SponsorCarouselComponent } from './sponsor-carousel/sponsor-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    EventCountdownComponent,
    DateFilterPipe,
    SponsorCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
