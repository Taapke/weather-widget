import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { WeatherIcon } from '../enums/weather-icon';

const FULL_CLOUD_COVERAGE_LIMIT = 0.8;
const NO_CLOUD_COVERAGE_LIMIT = 0.2;
const RAIN_INTENSITY_LIMIT = 0.2;

@Injectable({
  providedIn: 'root'
})
export class IconService {
  
  getIconByWeather(weather: Weather): string {
    if (weather.rainIntensity >= RAIN_INTENSITY_LIMIT) {
      return WeatherIcon.cloudDrizzle;
    }
    if (weather.cloudCover >= FULL_CLOUD_COVERAGE_LIMIT) {
      return WeatherIcon.cloud
    } 
    if (weather.cloudCover <= NO_CLOUD_COVERAGE_LIMIT) {
      return WeatherIcon.sun
    }
    return WeatherIcon.cloudSun;
  }
}
