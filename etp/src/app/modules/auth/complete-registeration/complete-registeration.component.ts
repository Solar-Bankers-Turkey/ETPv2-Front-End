import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '@services/settings.service';
import { ActivatedRoute } from '@angular/router';
import { RegisterComplete } from '@models/interfaces';
import { AuthService } from '@services/auth.service';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-complete-registeration',
  templateUrl: './complete-registeration.component.html',
  styleUrls: ['./complete-registeration.component.scss'],
})
export class CompleteRegisterationComponent implements OnInit {
  regForm: FormGroup;
  errorMsg: any;
  Id: any;
  completed = false;
  url = window.location.href.split('/')[3];
  constructor(
    private fb: FormBuilder,
    public set: SettingsService,
    private route: ActivatedRoute,
    private asAuth: AuthService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Complete Registeration - Energy Trading Platform',
    });
    this.route.queryParams.subscribe((params) => {
      this.Id = params?.id;
    });

    this.regForm = this.fb.group({
      phone: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      eiNum: ['', [Validators.required]],
      tcNum: ['', [Validators.required]],
      bDate: ['2020-03-25', [Validators.required]],
    });
  }

  get Phone() {
    return this.regForm.get('phone');
  }
  get Address() {
    return this.regForm.get('address');
  }
  get City() {
    return this.regForm.get('city');
  }
  get State() {
    return this.regForm.get('state');
  }
  get EiNum() {
    return this.regForm.get('eiNum');
  }
  get TcNum() {
    return this.regForm.get('tcNum');
  }
  get BDate() {
    return this.regForm.get('bDate');
  }

  async submit() {
    const address = `${this.Address.value}`;
    const city = `${this.City.value}`;
    const phone = `${this.Phone.value}`;
    const IdNo = `${this.EiNum.value}`;
    const InvNo = `${this.TcNum.value}`;
    const birth = `${this.BDate.value}`;

    if (this.regForm.invalid) {
      if (this.url === 'en') {
        this.errorMsg = 'Please fill the provided fields correctly!';
      }
      if (this.url === 'tr') {
        this.errorMsg = 'Lütfen sağlanan alanları doğru bir şekilde doldurun!';
      } else {
        this.errorMsg = 'Please fill the provided fields correctly!';
      }
    } else {
      const user: RegisterComplete = {
        Id: this.Id,
        Address: address.toString(),
        City: city.toString(),
        Phone: phone.toString(),
        BirthDate: birth.toString(),
        IdentityNumber: IdNo.toString(),
        InvoiceNumber: InvNo.toString(),
        ShortLocation: '',
      };

      return (await this.asAuth.completeRegisteration(user)).subscribe(
        (result) => {
          if (result['successCode'] === 1) {
            this.completed = true;
          } else {
            if (this.url === '/en') {
              this.errorMsg = "There's been an error, please try again";
            }
            if (this.url === '/tr') {
              this.errorMsg = 'Bir hata oluştu. Lütfen tekrar deneyin';
            } else {
              this.errorMsg = "There's been an error, please try again";
            }
          }
          localStorage.removeItem('etp-token');
        },
        (error) => {
          if (this.url === '/en') {
            this.errorMsg = "There's been an error, please try again";
          }
          if (this.url === '/tr') {
            this.errorMsg = 'Bir hata oluştu. Lütfen tekrar deneyin';
          } else {
            this.errorMsg = "There's been an error, please try again";
          }
          console.log(error);
        }
      );
    }
  }
}
