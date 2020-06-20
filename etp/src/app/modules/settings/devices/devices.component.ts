import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  constructor(public set: SettingsService) {}

  ngOnInit(): void {}
}
