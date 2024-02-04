import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Location } from '../interfaces/location';
import { delay, map } from 'rxjs/operators';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherUrl = environment.weatherUrl;
  private key = environment.weatherApiKey2;

  constructor(private http: HttpClient) {}

  getCurrentWeatherForLocation(location: Location): Observable<any>{
    return this.http.get<any[]>(`${this.weatherUrl}location=${location.lat.toString()},${location.lng.toString()}&apikey=${this.key}`).pipe(
      map((data) => this.mapToWeather(data))
    );
  }

  getTestWeather(): Observable<any> {
    const delayTime = 1000;
    const testWeather: Weather =  {
      date: new Date('Sat Feb 03 2024 15:25:00 GMT+0100 (Midden-Europese standaardtijd)'),
      temperature: 20,
      temperatureApparent: 15,
      humidity: 66.41,
      windSpeed: 50.33,
      rainIntensity: 0,
      cloudCover: 0,
    }
    return of(testWeather).pipe(
      delay(delayTime)
    );
  }

  private mapToWeather(data: any) {
    const mappedWeather: Weather = {
      date: new Date(data.data.time),
      temperature: data.data.values.temperature,
      temperatureApparent: data.data.values.temperatureApparent,
      humidity: data.data.values.humidity,
      windSpeed: data.data.values.windSpeed,
      rainIntensity: data.data.values.rainIntensity,
      cloudCover: data.data.values.cloudCover,
    }
    return mappedWeather;
  }
}
