import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(private asAuth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.asAuth.isAuthenticated()) {
      this.router.navigate(['dashboard/overview']);
      return false;
    }

    return true;
  }
}
