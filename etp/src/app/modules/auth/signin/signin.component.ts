import { Component, OnInit, OnDestroy, Type } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';
import { SettingsService } from '@services/settings.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  type: 'signin' | 'reset' = 'signin';
  signinForm: FormGroup;

  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private asAuth: AuthService,
    private router: Router,
    private info: DataService,
    public set: SettingsService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  changeType(val: any) {
    this.type = val;
  }

  get isSignin() {
    return this.type === 'signin';
  }

  get isReset() {
    return this.type === 'reset';
  }
  get email() {
    return this.signinForm.get('email');
  }
  get password() {
    return this.signinForm.get('password');
  }

  signin() {
    if (this.signinForm.invalid) {
      this.errorMsg = 'Please fill the provided fields correctly!';
    } else {
      const email = this.email.value;
      const password = this.password.value;

      return this.asAuth.login(email, password).subscribe(
        async (data) => {
          console.log('Success!', data);
          if (data['successCode'] <= 0) {
            this.errorMsg = data['message'];
          } else {
            localStorage.setItem('etp-token', JSON.stringify(data));
            (await this.asAuth.getCustomerInfo()).subscribe((result) => {
              console.log(this.asAuth.authenticationToken);
              if (result['successCode'] > 0) {
                this.signinForm.reset();
                localStorage.setItem(
                  'etp-user',
                  JSON.stringify(result['data'])
                );
                localStorage.setItem('etp-log', 'true');
                this.router.navigate(['/dashboard']);
              } else {
                this.errorMsg = JSON.stringify(result);
              }
            }),
              (err: any) => {
                console.log(err);
              };
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
