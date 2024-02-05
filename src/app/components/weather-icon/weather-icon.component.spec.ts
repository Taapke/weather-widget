import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconComponent } from './weather-icon.component';
import { MatIcon } from '@angular/material/icon';

describe('SvgIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIcon],
      declarations: [WeatherIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
