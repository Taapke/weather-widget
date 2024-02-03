import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ForecastDialogComponent } from './components/forecast-dialog/forecast-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent, 
    ForecastDialogComponent, 
    SvgIconComponent,
    MapComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    MatDialogModule,
    MatIconModule,
    LeafletModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
