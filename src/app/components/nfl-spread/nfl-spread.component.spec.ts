import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflSpreadComponent } from './nfl-spread.component';

describe('NflSpreadComponent', () => {
  let component: NflSpreadComponent;
  let fixture: ComponentFixture<NflSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflSpreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
