import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public set: SettingsService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Welcome to Energy Trading Platform',
      description: '',
      image: '',
    });
  }
}
