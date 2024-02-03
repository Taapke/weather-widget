import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherUrl = environment.weatherUrl;
  private key = environment.weatherApiKey;
  private key2 = environment.weatherApiKey2;

  constructor(private http: HttpClient) {}

  getCurrentWeatherForLocation(location: Location): Observable<any[]>{
    return this.http.get<any[]>(`${this.weatherUrl}location=${location.lat.toString()},${location.long.toString()}&apikey=${this.key2}`)
  }
}
