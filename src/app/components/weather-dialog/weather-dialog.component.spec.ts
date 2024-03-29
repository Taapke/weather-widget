import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LatLng } from 'leaflet';
import { Weather } from '../../interfaces/weather';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { WeatherDialogComponent } from './weather-dialog.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

const testWeather: Weather = {
  date: new Date('Sat Feb 03 2024 15:25:00 GMT+0100 (Midden-Europese standaardtijd)'),
  temperature: 20,
  temperatureApparent: 15,
  humidity: 66.41,
  windSpeed: 50.33,
  rainIntensity: 0,
  cloudCover: 0,
  location: new LatLng(52.132633, 5.291266),
  dayTime: {
    sunrise: new Date('Sat Feb 03 2024 05:25:00 GMT+0100 (Midden-Europese standaardtijd)'),
    sunset: new Date('Sat Feb 03 2024 18:25:00 GMT+0100 (Midden-Europese standaardtijd)'),
  }
};

describe('ForecastDialogComponent', () => {
  let component: WeatherDialogComponent;
  let fixture: ComponentFixture<WeatherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, MatIconModule],
      declarations: [WeatherDialogComponent, WeatherIconComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: MAT_DIALOG_DATA, useValue: testWeather },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
