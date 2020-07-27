import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@services/settings.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'etp-profilebar',
  templateUrl: './profilebar.component.html',
  styleUrls: ['./profilebar.component.scss'],
})
export class ProfilebarComponent implements OnInit {
  data;

  constructor(
    public set: SettingsService,
    public router: Router,
    public asAuth: AuthService
  ) {
    this.data = this.asAuth.getUserInfo();
  }

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['/auth']);
  }
}
