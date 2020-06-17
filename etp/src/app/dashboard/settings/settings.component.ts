import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { SettingsOptions } from '../../models/settings-options';
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
