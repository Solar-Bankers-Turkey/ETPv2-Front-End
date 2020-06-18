import { Component, OnInit } from '@angular/core';
import { SettingsOptions } from '@models/settings-options';
import { SettingsService } from '@services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  options = SettingsOptions;
  links = 'links links-hidden';
  dropped = false;
  constructor(public set: SettingsService) {}

  ngOnInit(): void {}
  dropdown() {
    this.dropped = !this.dropped;
    this.links = !this.dropped ? 'links links-hidden' : 'links links-shown';
  }
}
