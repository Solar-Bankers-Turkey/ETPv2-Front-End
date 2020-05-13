import { Injectable } from '@angular/core';

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
  constructor(private breakpointObserver: BreakpointObserver) {}
}
