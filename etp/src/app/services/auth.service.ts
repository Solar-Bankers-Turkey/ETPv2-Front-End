import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Register } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = {
    'content-type': 'application/json',
  };

  authenticationToken = {
    authorization: '',
  };
  customerUrl = '/api/customer/getcustomershortinfo';
  registerUrl = '/api/customer/register';
  body;
  constructor(private http: HttpClient) {}

  //Login function
  login(email: string, password: string) {
    return this.http
      .post(
        `http://142.93.165.55:9001/api/identity/login?email=${email}&password=${password}
    `,
        null
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  // SignUp function
  signup(user: Register) {
    this.body = JSON.stringify(user);
    return this.http
      .post(`${this.customerUrl}/register`, this.body, {
        headers: this.headers,
      })
      .pipe(catchError(this.errorHandler));
  }

  async getCustomerInfo() {
    this.authenticationToken.authorization = `Bearer ${await this.getToken()}`;
    return this.http
      .get(`${this.customerUrl}/getcustomershortinfo`, {
        headers: this.authenticationToken,
      })
      .pipe(catchError(this.errorHandler));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('etp-token')).access_token;
  }

  isLoggedIn() {
    return (
      !!localStorage.getItem('etp-token') && !!localStorage.getItem('etplog')
    );
  }

  logout() {
    localStorage.removeItem('etp-token');
    localStorage.removetItem('etp-user');
    localStorage.removeItem('etp-log');
  }
}
