import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  type: 'signin' | 'reset' = 'signin';
  signinForm: FormGroup;

  errorMsg = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
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
      this.errorMsg = 'Please Fill the fields correctly!';
    } else {
      const email = this.email.value;
      const password = this.password.value;

      return this.auth.login(email, password).subscribe(
        (data) => {
          console.log('Success!');
          if (data['msg']) {
            this.errorMsg = data['msg'];
          } else {
            this.signinForm.reset();
            alert('You are logged In!');
          }
        },
        (error) => {
          console.log(error.statusText);
        }
      );
    }
  }
}
