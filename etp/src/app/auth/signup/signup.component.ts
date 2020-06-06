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
  errorMsg = '';
  signedUp = false;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      register: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      }),
    });
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
            this.signedUp = true;
          }
        },
        (error) => {
          console.log(error.statusText);
        }
      );
    }
  }
}
