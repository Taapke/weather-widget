import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { ForecastDialogComponent } from './components/forecast-dialog/forecast-dialog.component';

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
      .getCurrentWeatherForLocation({ long: 42.3478, lat: -71.0466 })
      .subscribe((data: any[]) => {
        const dialogRef = this.dialog.open(ForecastDialogComponent, {
          data: { weather: data },
        });

        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed');
        });
      });
  }
}
