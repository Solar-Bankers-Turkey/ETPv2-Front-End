import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'etp-side',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public set: SettingsService, public data: DataService) {}

  ngOnInit(): void {}
}
