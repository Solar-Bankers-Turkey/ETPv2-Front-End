import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etp-stickybar',
  templateUrl: './stickybar.component.html',
  styleUrls: ['./stickybar.component.scss'],
})
export class StickybarComponent implements OnInit {
  coins = false;
  panel = false;
  battery = false;

  constructor() {}

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
