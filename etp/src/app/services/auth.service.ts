import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Register, RegisterComplete } from '@models/interfaces';
import { credentials } from '@models/settings-options';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  customerUrl = '/customer-service/customer/getcustomershortinfo';
  registerUrl = '/customer-service/customer/register';
  completeRegisterUrl = '/customer-service/customer/registercomplete';
  loginUrl = '/identity-service/identity/login';
  body;
  authToken = false;

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

  async defaultToken() {
    /* Get default token to sign in */
    const email = credentials.email;
    const password = credentials.password;
    return this.login(email, password)
      .toPromise()
      .then(
        (data) => {
          if (data['successCode'] <= 0) {
            console.log(data['message']);
          } else {
            localStorage.setItem('etp-token', JSON.stringify(data));
            console.log('Success!');
          }
        },
        (error) => console.error(error)
      );
    /* Get default token to sign in */
  }

  // ====SignUp function
  async signup(user: Register) {
    this.body = JSON.stringify(user);
    await this.defaultToken();
    const token = this.getToken();
    return this.http
      .post(this.registerUrl, this.body, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(catchError(this.errorHandler));
  }

  // ====Get customer Info
  getCustomerInfo() {
    return this.http
      .get(this.customerUrl, {
        headers: {
          Authorization: `Bearer ${this.getToken()}`,
        },
      })
      .pipe(catchError(this.errorHandler))
      .subscribe(
        (result) => {
          if (result['successCode'] > 0) {
            localStorage.setItem('etp-user', JSON.stringify(result['data']));
            this.router.navigate(['/dashboard']);
          } else {
            localStorage.removeItem('etp-token');
            console.log({ result });
          }
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  //====CompleteRegisteration
  async completeRegisteration(user: RegisterComplete) {
    this.body = JSON.stringify(user);
    await this.defaultToken();
    const token = this.getToken();
    return this.http
      .post(this.completeRegisterUrl, user, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(catchError(this.errorHandler));
  }

  // ====Login Token
  getToken() {
    return JSON.parse(localStorage.getItem('etp-token'))?.access_token;
  }

  // ====User Info
  getUserInfo() {
    return JSON.parse(localStorage.getItem('etp-user'));
  }

  isAuthenticated(): boolean {
    return !jwtHelper.isTokenExpired(this.getToken());
  }

  //===Logout
  logout() {
    localStorage.removeItem('etp-token');
    localStorage.removeItem('etp-user');
    return this.router.navigate(['auth']);
  }
}
