import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { SettingsService } from '@services/settings.service';
import { SeoService } from '@services/seo.service';

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
    public set: SettingsService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Sign In - Energy Trading Platform',
    });

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

  async signin() {
    if (this.signinForm.invalid) {
      let url = window.location.href.split('/')[3];
      if (url === 'en') {
        this.errorMsg = 'Please fill the provided fields correctly!';
      }
      if (url === 'tr') {
        this.errorMsg = 'Lütfen sağlanan alanları doğru bir şekilde doldurun!';
      }
    } else {
      const email = this.email.value;
      const password = this.password.value;

      await this.asAuth
        .login(email, password)
        .toPromise()
        .then(
          (data) => {
            console.log('Success!');
            if (data['successCode'] <= 0) {
              this.errorMsg = data['message'];
            } else {
              localStorage.setItem('etp-token', JSON.stringify(data));
            }
          },
          (error) => {
            this.errorMsg =
              'There seems to be an error, please make sure you have entered your correct details';
            console.log(error);
          }
        );
      return this.asAuth.getCustomerInfo();
    }
  }
}
