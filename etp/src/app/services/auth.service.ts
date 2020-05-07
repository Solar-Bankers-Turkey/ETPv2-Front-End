import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Register } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //Login function
  login(email: string, password: string) {
    return this.http
      .post(
        `http://142.93.165.55:9001/api/identity/login?username=${email}&password=${password}
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
      .post(`http://142.93.165.55:5002/api/customer/register`, body)
      .pipe(catchError(this.errorHandler));
  }
}
