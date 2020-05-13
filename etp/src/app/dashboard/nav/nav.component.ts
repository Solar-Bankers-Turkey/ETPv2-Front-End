import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  sidetoggle: string;
  overlay = 'overlay';

  ngOnInit(): void {}
  toggleClass() {
    this.sidetoggle = this.sidetoggle == 'active' ? '' : 'active';
    this.overlay =
      this.overlay == 'overlay active' ? 'overlay' : 'overlay active';
  }

  dismiss() {
    this.sidetoggle = '';
    this.overlay = 'overlay';
  }
}
