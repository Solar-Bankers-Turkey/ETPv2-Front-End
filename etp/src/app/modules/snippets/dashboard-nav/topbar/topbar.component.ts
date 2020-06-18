import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'etp-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(public set: SettingsService) {}

  ngOnInit(): void {}
}
