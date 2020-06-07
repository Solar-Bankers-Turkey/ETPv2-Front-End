import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
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

  auth = {
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYXJpcyIsImp0aSI6ImUwNjlkODg0LTlmM2MtNGE0OC1hZDkxLTQyZDI1OTQ4Yzk1NyIsImlhdCI6IjA2LzA2LzIwMjAgMDA6MTU6MjciLCJldHBfdXNlciI6IkJnNEYxNHBSVEQ0WTk5RVQ5Ri9SaGJOWHR4LzVTaHpjVTJkeHg3QUNsT289IiwibmJmIjoxNTkxNDAyNTI3LCJleHAiOjE1OTE0MDQzMjcsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6IlNvbGFyIEJhbmtlciJ9.4PghFMR7Wtyz6z1TBThRESB-6sLikDY3CvH7IYvyofg',
  };
  customerUrl = 'http://142.93.165.55:5002/api/customer';

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
    const body = JSON.stringify(user);

    return this.http
      .post(`${this.customerUrl}/register`, body, {
        headers: this.headers,
      })
      .pipe(catchError(this.errorHandler));
  }

  getCustomerInfo() {
    return this.http.get(`${this.customerUrl}/getcustomershortinfo`, {
      headers: this.auth,
    });
  }

  logout() {
    localStorage.removetItem('etpuser');
    localStorage.removeItem('etplog');
  }
}
