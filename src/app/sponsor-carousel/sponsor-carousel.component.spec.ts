import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorCarouselComponent } from './sponsor-carousel.component';
import { Sponsor } from '../sponsor';

describe('SponsorCarouselComponent', () => {
  let component: SponsorCarouselComponent;
  let fixture: ComponentFixture<SponsorCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorCarouselComponent);
    component = fixture.componentInstance;
    component.sponsors = [ new Sponsor("name", "logo") ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
