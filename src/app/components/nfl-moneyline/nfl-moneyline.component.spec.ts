import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflMoneylineComponent } from './nfl-moneyline.component';

describe('NflMoneylineComponent', () => {
  let component: NflMoneylineComponent;
  let fixture: ComponentFixture<NflMoneylineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NflMoneylineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NflMoneylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
