import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
