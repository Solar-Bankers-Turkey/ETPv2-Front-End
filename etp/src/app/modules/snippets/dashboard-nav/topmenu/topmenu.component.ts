import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'etp-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {
  data;
  constructor(public asAuth: AuthService, public set: SettingsService) {
    this.data = this.asAuth.getUserInfo();
  }
  ngOnInit(): void {}
}
