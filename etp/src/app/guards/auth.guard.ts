import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private asAuth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.asAuth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
