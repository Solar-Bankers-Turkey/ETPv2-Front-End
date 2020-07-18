import { Component, OnInit } from '@angular/core';
import { SettingsOptions } from '@models/settings-options';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  options = SettingsOptions;
  links = 'links links-hidden';
  dropped = false;
  constructor(public set: SettingsService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Settings - Energy Trading Platform',
    });
  }
  dropdown() {
    this.dropped = !this.dropped;
    this.links = !this.dropped ? 'links links-hidden' : 'links links-shown';
  }
}
