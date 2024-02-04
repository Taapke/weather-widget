import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LatLng, LeafletMouseEvent, circleMarker } from 'leaflet';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      declarations: [MapComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setMarker and OpenForecastDialog when location is present', () => {
    const mouseEventMock = { latlng: new LatLng(50, 50) } as LeafletMouseEvent;

    spyOn(component, 'setMarker');
    spyOn(component, 'openForecastDialog');

    component.selectLocation(mouseEventMock);

    expect(component.setMarker).toHaveBeenCalledWith(mouseEventMock.latlng);
    expect(component.openForecastDialog).toHaveBeenCalledWith(mouseEventMock.latlng);
  });

  it('should log error if location is not present', () => {
    const mouseEventMock = {} as LeafletMouseEvent;

    spyOn(console, 'error');

    component.selectLocation(mouseEventMock);

    expect(console.error).toHaveBeenCalledWith(
      'Location information not found'
    );
  });

  it('should add circle at selected location to map when setMarker is called', () => {
    const location = new LatLng(50, 50);

    component.setMarker(location);

    expect(component.layers).toEqual([
      circleMarker([location.lat, location.lng], { radius: 10 }),
    ]);
  });
});
