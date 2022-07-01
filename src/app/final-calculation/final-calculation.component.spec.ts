import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCalculationComponent } from './final-calculation.component';

describe('FinalCalculationComponent', () => {
  let component: FinalCalculationComponent;
  let fixture: ComponentFixture<FinalCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
