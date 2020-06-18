import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsettingsService } from '@services/chartsettings.service';
import { DataService } from '@services/data.service';
import { SettingsService } from '@services/settings.service';

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
