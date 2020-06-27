import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private asAuth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === this.asAuth.customerUrl) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.asAuth.getToken()}`,
        },
      });
      return next.handle(tokenizedReq);
    } else if (req.url === this.asAuth.registerUrl) {
      let tokenizedReq = req.clone({
        body: this.asAuth.body,
        setHeaders: {
          'Content-Type': 'application/json',
        },
      });
      return next.handle(tokenizedReq);
    } else {
      return next.handle(
        req.clone({
          body: null,
        })
      );
    }
  }
}
