import { Injectable } from '@angular/core';
import { Weather } from '../../interfaces/weather';
import { WeatherIcon } from '../../enums/weather-icon';
import { WeatherService } from '../weather/weather.service';
import { DayTime } from '../../interfaces/dayTime';

const FULL_CLOUD_COVERAGE_PERCENTAGE = 80;
const NO_CLOUD_COVERAGE_PERCENTAGE = 20;
const RAIN_INTENSITY_MM_HOUR_LIMIT = 2.5;

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private weatherService: WeatherService) {}
  
  getIconByWeather(weather: Weather): string {
    if (weather.rainIntensity >= RAIN_INTENSITY_MM_HOUR_LIMIT) {
      return WeatherIcon.cloudDrizzle;
    }
    if (weather.cloudCover >= FULL_CLOUD_COVERAGE_PERCENTAGE) {
      return WeatherIcon.cloud
    } 
    if (weather.cloudCover <= NO_CLOUD_COVERAGE_PERCENTAGE) {
      return this.isDuringDayTime(weather.date, weather.dayTime) ? WeatherIcon.sun : WeatherIcon.moon
    }
    return this.isDuringDayTime(weather.date, weather.dayTime) ? WeatherIcon.cloudSun : WeatherIcon.cloudMoon
  }

  private isDuringDayTime(currentDate: Date, dayTime: DayTime) {
    return currentDate >= dayTime.sunrise && currentDate <= dayTime.sunset;
  }
}
