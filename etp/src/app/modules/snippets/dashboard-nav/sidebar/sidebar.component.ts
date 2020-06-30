import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'etp-side',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  data: any;
  constructor(public set: SettingsService, public asAuth: AuthService) {
    this.data = this.asAuth.getUserInfo();
  }

  ngOnInit(): void {}
}
