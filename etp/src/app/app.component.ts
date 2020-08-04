import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [``],
})
export class AppComponent implements OnInit {
  title = 'etp';

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}

  ngOnInit() {
    AOS.init({
      delay: 200,
      duration: 2000,
      once: true,
    });
  }
}
