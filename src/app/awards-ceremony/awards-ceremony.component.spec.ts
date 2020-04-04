import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCeremonyComponent } from './awards-ceremony.component';

describe('AwardsCeremonyComponent', () => {
  let component: AwardsCeremonyComponent;
  let fixture: ComponentFixture<AwardsCeremonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsCeremonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsCeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
