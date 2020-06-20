import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.component.html',
  styleUrls: ['./login-security.component.scss'],
})
export class LoginSecurityComponent implements OnInit {
  newPassword: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.newPassword = this.fb.group({
      current: [''],
      old: [''],
      new: [''],
    });
  }
}
