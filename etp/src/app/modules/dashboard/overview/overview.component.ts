import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';

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
  gradient = false;
  showLegend = true;
  showLabels = true;
  isDoughnut = true;

  colorScheme = {
    domain: ['#FFAB4F', '#1F8EFA', '#05C985'],
  };

  constructor(public set: SettingsService) {}
  ngOnInit(): void {}
}
