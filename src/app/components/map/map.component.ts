import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  LatLng,
  Layer,
  LeafletMouseEvent,
  circleMarker,
  latLng,
  tileLayer,
} from 'leaflet';
import { Weather } from '../../interfaces/weather';
import { WeatherService } from '../../services/weather.service';
import { ForecastDialogComponent } from '../forecast-dialog/forecast-dialog.component';

const LOCATION_NETHERLANDS = new LatLng(52.132633, 5.291266);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  layers: Layer[] = [];

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }),
    ],
    zoom: 5,
    center: LOCATION_NETHERLANDS
  };

  constructor(
    private weatherService: WeatherService,
    public dialog: MatDialog
  ) {}

  selectLocation(event: LeafletMouseEvent) {
    if (event.latlng) {
      this.setMarker(event.latlng);
      this.openForecastDialog(event.latlng);
    } else {
      console.error('Location information not found')
    }
  }

  setMarker(location: any) {
    this.layers = [circleMarker([location.lat, location.lng], { radius: 10 })];
  }

  openForecastDialog(location: LatLng): void {
    this.weatherService
      // while testing use test call
      // .getCurrentWeatherForLocation(location)
      .getTestWeather(LOCATION_NETHERLANDS)
      .subscribe((data: Weather) => {
        const dialogRef = this.dialog.open(ForecastDialogComponent, {
          data,
        });

        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed');
        });
      });
  }
}
