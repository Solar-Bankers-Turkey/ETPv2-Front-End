import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}
  navClass = 'me-header u-header--bg-transparent u-header--show-hide-md';

  public isMenuCollapsed = true;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // we'll do some stuff here to the navbar when the window is scrolled
    const scrollNum = e.target['scrollingElement'].scrollTop;
    this.navClass =
      'me-header sticky-top u-header--bg-light u-header--show-hide-md animated slideInDown animate__slow';

    if (scrollNum < 10) {
      this.navClass =
        'me-header u-header--bg-transparent u-header--show-hide-md';
    }
  }
}
