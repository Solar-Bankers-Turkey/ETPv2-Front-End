import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '@services/settings.service';
import { ActivatedRoute } from '@angular/router';
import { RegisterComplete } from '@models/interfaces';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-complete-registeration',
  templateUrl: './complete-registeration.component.html',
  styleUrls: ['./complete-registeration.component.scss'],
})
export class CompleteRegisterationComponent implements OnInit {
  regForm: FormGroup;
  errorMsg: any;
  Id: any;
  constructor(
    private fb: FormBuilder,
    public set: SettingsService,
    private route: ActivatedRoute,
    private asAuth: AuthService
  ) {}

  ngOnInit(): void {
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
    if (this.regForm.invalid) {
      this.errorMsg = 'Please Fill in the Provided Fields correctly';
    } else {
      const user: RegisterComplete = {
        Id: this.Id,
        Address: this.Address.value,
        City: this.City.value,
        Phone: this.Phone.value,
        IdentityNumber: this.TcNum.value,
        InvoiceNumber: this.EiNum.value,
        BirthDate: this.BDate.value,
        ShortLocation: this.Address.value + this.City.value + this.State.value,
      };

      return (await this.asAuth.completeRegisteration(user)).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
