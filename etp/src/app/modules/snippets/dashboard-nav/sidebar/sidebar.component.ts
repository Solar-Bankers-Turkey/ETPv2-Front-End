import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { DataService } from '@services/data.service';

@Component({
  selector: 'etp-side',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public set: SettingsService, public data: DataService) {}

  ngOnInit(): void {}
}
