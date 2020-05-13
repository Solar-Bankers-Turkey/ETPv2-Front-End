import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Register } from 'src/app/models/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  type: 'signup' | 'register' = 'signup';
  errorMsg = '';

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      register: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      }),
      completeRegister: this.fb.group({
        password: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        eiNum: ['', [Validators.required]],
        tcNum: ['', [Validators.required]],
        bDate: ['', [Validators.required]],
      }),
    });
  }

  changeType(val) {
    this.type = val;
  }

  get email() {
    return this.signupForm.get('register.email');
  }
  get firstName() {
    return this.signupForm.get('register.firstName');
  }
  get lastName() {
    return this.signupForm.get('register.lastName');
  }
  get isSignup() {
    return this.type === 'signup';
  }

  get isReg() {
    return this.type === 'register';
  }

  signup() {
    if (this.signupForm.get('register').invalid) {
      this.errorMsg = 'Please fill the provided fields correctly!';
    } else {
      const user: Register = {
        Email: this.email.value,
        Name: this.firstName.value,
        Surname: this.lastName.value,
      };

      return this.auth.signup(user).subscribe(
        (data) => {
          if (data['successCode'] < 1) {
            this.errorMsg = data['message'];
          } else {
            this.signupForm.reset();
            alert(data['message']);
            this.changeType('register');
          }
        },
        (error) => {
          console.log(error.statusText);
        }
      );
    }
  }
}
