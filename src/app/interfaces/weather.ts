import { LatLng } from "leaflet";
import { DayTime } from "./dayTime";

export interface Weather {
    temperature: number;
    temperatureApparent: number;
    date: Date;
    humidity: number;
    windSpeed: number;
    rainIntensity: number;
    cloudCover: number;
    location: LatLng;
    dayTime: DayTime
}