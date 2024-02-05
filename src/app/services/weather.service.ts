import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { Weather } from '../interfaces/weather';
import { LatLng } from 'leaflet';
import { DayTime } from '../interfaces/dayTime';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl = environment.weatherUrl;
  private forecastUrl = environment.forecastUrl;
  private key = environment.weatherApiKey2;
  private commonParams = new HttpParams()
    .set('units', 'metric')
    .set('apikey', this.key);

  constructor(private http: HttpClient) {}

  getCurrentWeatherForLocation(location: LatLng): Observable<any> {
    const params = this.commonParams
      .set('location', `${location.lat},${location.lng}`)
      .set('fields', 'temperature,temperatureApparent,humidity,windSpeed,rainIntensity,cloudCover'
      );

    return this.getDayTimeForLocation(location).pipe(
      switchMap((dayTime: DayTime) =>
        this.http.get<any[]>(this.weatherUrl, { params }).pipe(
          map((data) => this.mapToWeather(data, dayTime)),
          catchError((error: HttpErrorResponse) => this.handleError(error))
        )
      )
    );
  }

  getDayTimeForLocation(location: LatLng): Observable<any> {
    const params = this.commonParams
      .set('location', `${location.lat},${location.lng}`)
      .set('fields', 'sunrise,sunset');

    return this.http.get<any[]>(this.forecastUrl, { params }).pipe(
      map((data) => this.mapToDayTime(data)),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      console.error('Weather information not found');
    } else {
      console.error('An error occured:', error.error.message || error.message);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  private mapToWeather(data: any, dayTime: DayTime): Weather {
    const values = data.data.values;
    const location = new LatLng(data.location.lat, data.location.lon);

    const mappedWeather: Weather = {
      date: new Date(data.data.time),
      temperature: values.temperature,
      temperatureApparent: values.temperatureApparent,
      humidity: values.humidity,
      windSpeed: values.windSpeed,
      rainIntensity: values.rainIntensity,
      cloudCover: values.cloudCover,
      location,
      dayTime,
    };
    console.log(mappedWeather);
    return mappedWeather;
  }

  private mapToDayTime(data: any): DayTime {
    const sunriseTime = data.timelines.daily[0].values.sunriseTime;
    const sunsetTime = data.timelines.daily[0].values.sunsetTime;

    return {
      sunrise: new Date(sunriseTime),
      sunset: new Date(sunsetTime),
    };
  }

  // While testing use this test call
  getTestWeather(location: LatLng): Observable<any> {
    const delayTime = 1000;
    const testWeather: Weather = {
      date: new Date(
        'Sat Feb 03 2024 1:25:00 GMT+0100 (Midden-Europese standaardtijd)'
      ),
      temperature: 20,
      temperatureApparent: 15,
      humidity: 66.41,
      windSpeed: 50.33,
      rainIntensity: 0,
      cloudCover: 50,
      location: location,
      dayTime: { 
        sunrise: new Date('Sat Feb 03 2024 10:25:00 GMT+0100 (Midden-Europese standaardtijd)'), 
        sunset: new Date('Sat Feb 03 2024 18:25:00 GMT+0100 (Midden-Europese standaardtijd)') },
    };
    return of(testWeather).pipe(delay(delayTime));
  }
}
