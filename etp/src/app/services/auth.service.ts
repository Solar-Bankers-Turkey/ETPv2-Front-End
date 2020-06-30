import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Register, RegisterComplete } from '@models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  customerUrl = '/customer-service/customer/getcustomershortinfo';
  registerUrl = '/customer-service/customer/register';
  completeRegisterUrl = '/customer-service/customer/registrationcomplete';
  loginUrl = '/identity-service/identity/login';
  body;
  authToken = false;
  headers = {
    'content-type': 'application/json',
  };

  authHeader = {
    authorization: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  // ====Login function
  login(email: string, password: string) {
    return this.http
      .post(
        `${this.loginUrl}?email=${email}&password=${password}
    `,
        null
      )
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  defaultToken() {
    /* Get default token to sign in */
    const email = 'clientadmin@solarbankers.org';
    const password = 'client_serv_ffaa70';
    this.login(email, password).subscribe((data) => {
      if (data['successCode'] <= 0) {
        console.log(data['message']);
      } else {
        localStorage.setItem('etp-token', JSON.stringify(data));
        console.log('Success!');
        this.authToken = true;
        console.log(this.authToken);
      }
    });
    /* Get default token to sign in */
  }

  // ====SignUp function
  signup(user: Register) {
    this.body = JSON.stringify(user);
    this.defaultToken();
    if (this.authToken) {
      this.authToken = false;
      return this.http
        .post(this.registerUrl, this.body, {
          headers: this.headers,
        })
        .pipe(catchError(this.errorHandler));
    }
  }

  // ====Get customer Info
  async getCustomerInfo() {
    this.authHeader.authorization = `Bearer ${await this.getToken()}`;
    return this.http
      .get(this.customerUrl, {
        headers: this.authHeader,
      })
      .pipe(catchError(this.errorHandler));
  }

  //====CompleteRegisteration
  completeRegisteration(user: RegisterComplete) {
    this.body = JSON.stringify(user);
    this.defaultToken();
    if (!this.authToken) {
      this.authToken = false;
      return this.http
        .post(this.completeRegisterUrl, this.body, { headers: this.headers })
        .pipe(catchError(this.errorHandler));
    }
  }

  // ====Login Token
  getToken() {
    return JSON.parse(localStorage.getItem('etp-token')).access_token;
  }

  // ====User Info
  getUserInfo() {
    return JSON.parse(localStorage.getItem('etp-user'));
  }

  //===Login
  isLoggedIn() {
    return (
      !!localStorage.getItem('etp-token') && !!localStorage.getItem('etplog')
    );
  }

  //===Logout
  logout() {
    localStorage.removeItem('etp-token');
    localStorage.removeItem('etp-user');
    localStorage.removeItem('etp-log');
    return this.router.navigate(['auth']);
  }
}
