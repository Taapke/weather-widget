import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Weather } from '../../interfaces/weather';
import { IconService } from '../../services/icon/icon.service';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrl: './weather-dialog.component.scss',
})
export class WeatherDialogComponent {
  weather: Weather;
  icon: string;

  constructor(
    public dialogRef: MatDialogRef<WeatherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Weather,
    iconService: IconService
  ) {
    this.weather = data;
    this.icon = iconService.getIconByWeather(this.weather);
  }
}
