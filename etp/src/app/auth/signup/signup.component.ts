import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  type: 'signup' | 'register' = 'signup';
  ngOnInit(): void {
  }

  changeType(val) {
    this.type = val;
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isReg() {
    return this.type === 'register';
  }
}
