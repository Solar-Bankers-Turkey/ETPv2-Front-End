import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { DataService } from 'src/app/services/data.service';
import { ChartsettingsService } from 'src/app/services/chartsettings.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  time = new Date();
  month = true;
  day = false;
  year = false;
  week = false;
  constructor(
    public chart: ChartsettingsService,
    public data: DataService,
    public set: SettingsService
  ) {}

  ngOnInit(): void {}
}
