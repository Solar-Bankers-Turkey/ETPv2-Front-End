import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'etp-stickybar',
  templateUrl: './stickybar.component.html',
  styleUrls: ['./stickybar.component.scss'],
})
export class StickybarComponent implements OnInit {
  coins = false;
  panel = false;
  battery = false;
  data;
  constructor(public asAuth: AuthService) {
    this.data = this.asAuth.getUserInfo();
  }

  ngOnInit(): void {}

  toggleSide(val) {
    if (val === 'coins') {
      this.coins = !this.coins;
    } else if (val === 'panel') {
      this.panel = !this.panel;
    } else if (val === 'battery') {
      this.battery = !this.battery;
    }
  }
}
