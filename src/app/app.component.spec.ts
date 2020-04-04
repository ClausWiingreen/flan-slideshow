import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SponsorComponent } from './sponsor/sponsor.component';
import { EventCountdownComponent } from './event-countdown/event-countdown.component';
import { SponsorCarouselComponent } from './sponsor-carousel/sponsor-carousel.component';
import { DateFilterPipe } from './date-filter.pipe';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        PlanComponent,
        SponsorComponent,
        EventCountdownComponent,
        SponsorCarouselComponent,
        DateFilterPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
