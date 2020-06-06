import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private data: DataService, public router: Router) {}

  canActivate(): boolean {
    if (!this.data.isLoggedIn) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
