import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'etp-profilebar',
  templateUrl: './profilebar.component.html',
  styleUrls: ['./profilebar.component.scss'],
})
export class ProfilebarComponent implements OnInit {
  constructor(
    public set: SettingsService,
    public data: DataService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
}
