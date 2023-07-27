import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflTotalsComponent } from './nfl-totals.component';

describe('NflTotalsComponent', () => {
  let component: NflTotalsComponent;
  let fixture: ComponentFixture<NflTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflTotalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
