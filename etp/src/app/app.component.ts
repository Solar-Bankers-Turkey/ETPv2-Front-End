import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [``],
})
export class AppComponent {
  title = 'etp';

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}
