import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}
  languageDropdown = false;
  navClass =
    'position-absolute me-header u-header--bg-transparent u-header--show-hide-md';
  headerLogo = '/assets/img/home/logo.png';
  logo = 'img-fluid';
  headerButton = 'btn btn-sm btn-primary transition-3d-hover';
  languageButton = 'btn btn-icon btn-lang btn-trans rounded-circle ';
  languagePos = 'dropdown top';
  public isMenuCollapsed = true;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // we'll do some stuff here to the navbar when the window is scrolled
    const scrollNum = e.target['scrollingElement'].scrollTop;
    this.headerLogo = '/assets/img/mainlogo1.png';
    this.logo = 'img-fluid width-sm';
    this.headerButton = 'btn btn-sm btn-soft-dark transition-3d-hover';
    this.languageButton = 'btn btn-scroll-lang btn-icon rounded-circle ';
    this.languagePos = 'dropdown scroll-top';
    this.navClass =
      'me-header fixed-top u-header--bg-light u-header--show-hide-md animated slideInDown animate__slow';

    if (scrollNum < 800) {
      this.navClass =
        'position-absolute me-header u-header--bg-transparent u-header--show-hide-md';
      this.headerLogo = '/assets/img/home/logo.png';
      this.logo = 'img-fluid';
      this.languageButton = 'btn btn-lang btn-trans btn-icon rounded-circle ';
      this.headerButton = 'btn btn-sm btn-primary transition-3d-hover';
      this.languagePos = 'dropdown top';
    }
  }
}
