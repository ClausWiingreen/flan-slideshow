import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanComponent } from './plan.component';
import { DateFilterPipe } from '../date-filter.pipe';
import { MatListModule } from '@angular/material/list';

describe('PlanComponent', () => {
  let component: PlanComponent;
  let fixture: ComponentFixture<PlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanComponent, DateFilterPipe ], 
      imports: [ MatListModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
