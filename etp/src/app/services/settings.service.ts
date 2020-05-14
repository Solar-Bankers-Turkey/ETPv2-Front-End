import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  // breakpoints
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );
  isTablet$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 1100px)', Breakpoints.Small])
    .pipe(
      map((result) => {
        return result.matches;
      }),
      shareReplay()
    );

  // classes
  sidetoggle = '';
  overlay = 'overlay';
  constructor(private breakpointObserver: BreakpointObserver) {}

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
