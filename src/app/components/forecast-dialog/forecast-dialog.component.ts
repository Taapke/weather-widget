import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Weather } from '../../interfaces/weather';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-forecast-dialog',
  templateUrl: './forecast-dialog.component.html',
  styleUrl: './forecast-dialog.component.scss',
})
export class ForecastDialogComponent {
  weather: Weather;
  icon: string;

  constructor(
    public dialogRef: MatDialogRef<ForecastDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Weather,
    iconService: IconService
  ) {
    this.weather = data;
        this.icon = iconService.getIconByWeather(this.weather);
  }
}
