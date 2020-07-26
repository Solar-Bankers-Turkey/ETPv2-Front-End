import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=38.3324&lon=26.6449&
exclude=minutely,hourly&appid=b84c27b911ede94ab8f8e26fbadcc903
`;

  constructor(private http: HttpClient) {}

  getForecast() {
    return this.http.get(this.forecastUrl);
  }
}
