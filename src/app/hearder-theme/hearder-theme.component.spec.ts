import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderThemeComponent } from './hearder-theme.component';

describe('HearderThemeComponent', () => {
  let component: HearderThemeComponent;
  let fixture: ComponentFixture<HearderThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearderThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
