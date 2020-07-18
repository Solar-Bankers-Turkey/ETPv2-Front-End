import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { ChartsettingsService } from '@services/chartsettings.service';
import { SeoService } from '@services/seo.service';

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

  constructor(
    public set: SettingsService,
    public data: ChartsettingsService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'History - Energy Trading Platform',
    });
  }
}
