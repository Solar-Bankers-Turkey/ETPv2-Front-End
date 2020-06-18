import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@services/settings.service';
import { DataService } from '@services/data.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'etp-profilebar',
  templateUrl: './profilebar.component.html',
  styleUrls: ['./profilebar.component.scss'],
})
export class ProfilebarComponent implements OnInit {
  constructor(
    public set: SettingsService,
    public data: DataService,
    public router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['/auth']);
  }
}
