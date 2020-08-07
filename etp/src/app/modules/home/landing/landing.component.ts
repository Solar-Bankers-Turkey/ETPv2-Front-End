import { Component, OnInit, HostListener } from '@angular/core';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  languageDropdown = false;

  public isMenuCollapsed = true;
  constructor(private set: SettingsService) {}
  ngOnInit(): void {}
}
