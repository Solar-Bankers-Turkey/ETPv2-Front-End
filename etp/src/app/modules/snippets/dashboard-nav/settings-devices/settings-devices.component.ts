import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'device-settings',
  templateUrl: './settings-devices.component.html',
  styleUrls: ['./settings-devices.component.scss'],
})
export class SettingsDevicesComponent implements OnInit {
  @Input() options;

  constructor(public set: SettingsService) {}

  ngOnInit(): void {}
}
