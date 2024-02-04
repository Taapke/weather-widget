import { Component, OnInit } from '@angular/core';
import {  Layer, LeafletMouseEvent, circleMarker, latLng, tileLayer } from 'leaflet';

const LOCATION_NETHERLANDS = {lat: 52.132633, lng: 5.291266};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})

export class MapComponent {
  layers: Layer[] = [];

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
    ],
    zoom: 5,
    center: latLng(LOCATION_NETHERLANDS.lat, LOCATION_NETHERLANDS.lng)
  };

  setMarker(event: LeafletMouseEvent) {
    this.layers = [circleMarker([event.latlng.lat, event.latlng.lng], { radius: 10 })];
  }
}