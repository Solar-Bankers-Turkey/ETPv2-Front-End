import { Component, OnInit, HostListener } from '@angular/core';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  languageDropdown = false;
  navClass =
    'u-header--bg-transparent-lg u-header--white-nav-links-lg u-header--abs-top-lg';
  headerLogo = '/assets/img/home/logo.png';
  logo = 'img-fluid';
  headerButton = 'btn btn-sm btn-dark transition-3d-hover';
  languageButton = 'btn btn-icon btn-lang btn-soft-light rounded-circle ';
  languagePos = 'dropdown top';
  public isMenuCollapsed = true;
  constructor(public set: SettingsService, private seo: SeoService) {
    this.set.isTablet$.subscribe((data) => {
      if (data) {
        this.headerLogo = '/assets/img/mainlogo1.png';
        this.logo = 'img-fluid width-sm';
        this.headerButton = 'btn btn-sm btn-soft-dark transition-3d-hover';
        this.languageButton =
          'btn btn-scroll-lang btn-soft-secondary btn-icon rounded-circle ';
        this.languagePos = 'dropdown scroll-top';
        this.navClass =
          'u-header u-header--sticky-top-xl u-header--bg-light u-header--show-hide-md animate__animated animate__SlideInDown animate__slow';
      }
    });
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Welcome to Energy Trading Platform',
      description: '',
      image: '',
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // we'll do some stuff here to the navbar when the window is scrolled
    const scrollNum = e.target['scrollingElement'].scrollTop;
    this.headerLogo = '/assets/img/mainlogo1.png';
    this.logo = 'img-fluid width-sm';
    this.headerButton = 'btn btn-sm btn-soft-dark transition-3d-hover';
    this.languageButton =
      'btn btn-scroll-lang btn-soft-secondary btn-icon rounded-circle ';
    this.languagePos = 'dropdown scroll-top';
    this.navClass =
      'u-header u-header--sticky-top-xl u-header--bg-light u-header--show-hide-md animate__animated animate__SlideInDown animate__slow';
    this.set.isTablet$.subscribe((data) => {
      if (scrollNum < 500) {
        if (data) {
          this.headerLogo = '/assets/img/mainlogo1.png';
          this.logo = 'img-fluid width-sm';
          this.headerButton = 'btn btn-sm btn-soft-dark transition-3d-hover';
          this.languageButton =
            'btn btn-scroll-lang btn-soft-secondary btn-icon rounded-circle ';
          this.languagePos = 'dropdown scroll-top';
          this.navClass =
            'u-header u-header--sticky-top-xl u-header--bg-light u-header--show-hide-md animate__animated animate__SlideInDown animate__slow';
        } else {
          this.navClass =
            'u-header--bg-transparent-lg u-header--white-nav-links-lg u-header--abs-top-lg';
          this.headerLogo = '/assets/img/home/logo.png';
          this.logo = 'img-fluid';
          this.languageButton =
            'btn btn-lang btn-soft-light btn-icon rounded-circle ';
          this.headerButton = 'btn btn-sm btn-dark transition-3d-hover';
          this.languagePos = 'dropdown top';
        }
      }
    });
  }
}
