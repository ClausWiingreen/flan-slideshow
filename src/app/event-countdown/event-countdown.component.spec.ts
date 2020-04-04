import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCountdownComponent } from './event-countdown.component';
import { MatGridListModule } from '@angular/material/grid-list';

describe('EventCountdownComponent', () => {
  let component: EventCountdownComponent;
  let fixture: ComponentFixture<EventCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCountdownComponent ],
      imports: [ MatGridListModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
