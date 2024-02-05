import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.scss',
})
export class WeatherIconComponent implements OnChanges {
  @Input() icon = '';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnChanges(): void {
    if (this.icon) {
      this.matIconRegistry.addSvgIcon(
        this.icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../../assets/icons/${this.icon}.svg`
        )
      );
    }
  }
}
