import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { ChartsettingsService } from '@services/chartsettings.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  month = true;
  day = false;
  year = false;
  week = false;

  //charts
  line = false;
  bar = true;

  constructor(public set: SettingsService, public data: ChartsettingsService) {}

  ngOnInit(): void {}
}
