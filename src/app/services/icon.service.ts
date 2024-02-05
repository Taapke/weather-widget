import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { WeatherIcon } from '../enums/weather-icon';
import { WeatherService } from './weather.service';
import { DayTime } from '../interfaces/dayTime';

const FULL_CLOUD_COVERAGE_LIMIT = 80;
const NO_CLOUD_COVERAGE_LIMIT = 20;
const RAIN_INTENSITY_LIMIT = 2.5;

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private weatherService: WeatherService) {}
  
  getIconByWeather(weather: Weather): string {
    if (weather.rainIntensity >= RAIN_INTENSITY_LIMIT) {
      return WeatherIcon.cloudDrizzle;
    }
    if (weather.cloudCover >= FULL_CLOUD_COVERAGE_LIMIT) {
      return WeatherIcon.cloud
    } 
    if (weather.cloudCover <= NO_CLOUD_COVERAGE_LIMIT) {
      return this.isDuringDayTime(weather.date, weather.dayTime) ? WeatherIcon.sun : WeatherIcon.moon
    }
    return this.isDuringDayTime(weather.date, weather.dayTime) ? WeatherIcon.cloudSun : WeatherIcon.cloudMoon
  }

  private isDuringDayTime(currentDate: Date, dayTime: DayTime) {
    return currentDate >= dayTime.sunrise && currentDate <= dayTime.sunset;
  }
}
