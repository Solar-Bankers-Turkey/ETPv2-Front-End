import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthhomeComponent } from './authhome/authhome.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [AuthhomeComponent, SigninComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
