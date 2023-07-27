import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesOddsComponent } from './futures-odds.component';

describe('FuturesOddsComponent', () => {
  let component: FuturesOddsComponent;
  let fixture: ComponentFixture<FuturesOddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturesOddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturesOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
