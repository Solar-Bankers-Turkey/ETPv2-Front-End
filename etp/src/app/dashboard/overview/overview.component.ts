import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  single = [
    {
      name: 'S',
      value: 500,
    },
    {
      name: 'T',
      value: 720,
    },
    {
      name: 'R',
      value: 200,
    },
  ];
  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  colorScheme = {
    domain: ['#FFAB4F', '#1F8EFA', '#05C985'],
  };

  report = [
    {
      status: 'warning',
      date: 1590969600,
      message: 'Your battery is full.',
    },
    {
      status: 'info',
      date: 1588291200,
      message: 'Weekly report is ready.',
    },
    {
      status: 'warning',
      date: 1585699200,
      message: 'Overusage on T phase.',
    },
    {
      status: 'setting',
      date: 1583020800,
      message:
        'The daily system backup has been completed and uploaded to the server.',
    },
    {
      status: 'setting',
      date: 1580515200,
      message: 'Payment option has been changed.',
    },
    {
      status: 'info',
      date: 1577836800,
      message: 'System update: software version 2.1.3 is now available.',
    },
  ];
  constructor(public set: SettingsService) {}
  ngOnInit(): void {}
}
