import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthhomeComponent } from './authhome/authhome.component';
import { SigninComponent } from './signin/signin.component';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthhomeComponent, SigninComponent, SignupComponent, ResetComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
