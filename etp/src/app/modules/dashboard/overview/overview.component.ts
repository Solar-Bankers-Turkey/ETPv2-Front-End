import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';
import { ChartsettingsService } from '@services/chartsettings.service';
import { ForecastService } from '@services/forecast.service';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  series = [
    {
      data: [100, 400, 500, 300, 200, 500, 400],
      name: 'Energy',
    },
  ];

  colorScheme = {
    domain: ['#FFAB4F', '#1F8EFA', '#05C985'],
  };
  stroke = {
    curve: 'smooth',
    width: 1.9,
  };
  url = window.location.href.split('/')[3];
  forecast;
  today;
  constructor(
    public set: SettingsService,
    private seo: SeoService,
    public chart: ChartsettingsService,
    public data: DataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Overview - Energy Trading Platform',
    });

    this.chart.forecastDetails().then((data) => {
      this.today = data.current;
    });
    console.log(this.router.navigated);
    console.log(window.location.href.split('/'));
    console.log(this.router.url);
  }
}
