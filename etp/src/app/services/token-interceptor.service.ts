import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  token;
  constructor(private asAuth: AuthService) {
    this.token = this.asAuth.getToken();
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === this.asAuth.customerUrl) {
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return next.handle(tokenizedReq);
    } else if (req.url === this.asAuth.registerUrl) {
      const tokenizedReq = req.clone({
        body: this.asAuth.body,
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      });

      return next.handle(tokenizedReq);
    } else if (req.url === this.asAuth.completeRegisterUrl) {
      const tokenizedReq = req.clone({
        body: this.asAuth.body,
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
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
