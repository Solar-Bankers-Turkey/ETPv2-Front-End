import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-complete-registeration',
  templateUrl: './complete-registeration.component.html',
  styleUrls: ['./complete-registeration.component.scss'],
})
export class CompleteRegisterationComponent implements OnInit {
  regForm: FormGroup;
  errorMsg;
  constructor(private fb: FormBuilder, public set: SettingsService) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      eiNum: ['', [Validators.required]],
      tcNum: ['', [Validators.required]],
      bDate: ['2020-03-25', [Validators.required]],
    });
  }
}
