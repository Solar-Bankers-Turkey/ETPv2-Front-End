import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'etp-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {
  data;
  constructor(public asAuth: AuthService) {
    this.data = this.asAuth.getUserInfo();
  }
  ngOnInit(): void {}
}
