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
      .post('http://142.93.165.55:5002/api/customer/register', body, {
        headers: this.headers,
      })
      .pipe(catchError(this.errorHandler));
  }
}
