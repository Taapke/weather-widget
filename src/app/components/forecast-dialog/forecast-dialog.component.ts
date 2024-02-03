import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forecast-dialog',
  templateUrl: './forecast-dialog.component.html',
  styleUrl: './forecast-dialog.component.scss'
})
export class ForecastDialogComponent {
  weather: any;

  constructor(
    public dialogRef: MatDialogRef<ForecastDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.weather = data;
  }
}
