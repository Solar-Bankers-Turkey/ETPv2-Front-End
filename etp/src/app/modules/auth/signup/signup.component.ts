import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { SettingsService } from '@services/settings.service';
import { Register } from '@models/interfaces';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg = '';
  signedUp = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    public set: SettingsService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Sign Up - Energy Trading Platform',
    });
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  get email() {
    return this.signupForm.get('email');
  }
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }

  async signup() {
    if (this.signupForm.invalid) {
      this.errorMsg = 'Please fill the provided fields correctly!';
    } else {
      const user: Register = {
        Email: this.email.value,
        Name: this.firstName.value,
        Surname: this.lastName.value,
      };

      return (await this.auth.signup(user)).subscribe(
        (data) => {
          if (data['successCode'] < 1) {
            this.errorMsg = data['message'];
          } else {
            this.signedUp = true;
          }
          localStorage.removeItem('etp-token');
        },
        (error) => {
          this.errorMsg = 'There seems to be an error, please try again!';
          console.log({ error });
        }
      );
    }
  }
}
