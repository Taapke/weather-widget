import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { ForecastDialogComponent } from './components/forecast-dialog/forecast-dialog.component';
import { Weather } from './interfaces/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-widget';

  constructor(
    private weatherService: WeatherService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openForecastDialog(): void {
    this.weatherService
      // While testing use testWeather method instead of 
      // .getCurrentWeatherForLocation({ long: 42.3478, lat: -71.0466 })
      .getTestWeather()
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
