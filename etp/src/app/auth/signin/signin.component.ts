import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  changeType(val) {
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
      this.errorMsg = 'Please fill the fields correctly!';
    } else {
      const email = this.email.value;
      const password = this.password.value;

      return this.auth.login(email, password).subscribe(
        (data) => {
          console.log('Success!', data);
          if (data['successCode'] <= 0) {
            this.errorMsg = data['message'];
          } else {
            this.signinForm.reset();
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          console.log(error.statusText);
        }
      );
    }
  }
}
