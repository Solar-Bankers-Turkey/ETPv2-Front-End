import { Injectable, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
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

  isMedium$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.TabletPortrait])
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
    this.sidetoggle = this.sidetoggle === 'active' ? '' : 'active';

    this.overlay = this.sidetoggle === 'active' ? 'overlay active' : 'overlay';
  }

  dismiss() {
    this.sidetoggle = '';
    this.overlay = 'overlay';
  }
}
