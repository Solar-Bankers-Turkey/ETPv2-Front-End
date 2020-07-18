import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  forecastUrl = '/forecast/b0272240ccac85798e1c741ed9d5e13a/38.3324,26.6449';

  constructor(private http: HttpClient) {}

  getForecast() {
    return this.http.get(this.forecastUrl);
  }
}
