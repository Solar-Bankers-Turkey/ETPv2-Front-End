import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthhomeComponent } from './authhome/authhome.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
  {
    path: '', component: AuthhomeComponent,
    children: [
      {
        path: 'signin', component: SigninComponent
      },
      {
        path: 'signup', component: SignupComponent
      },
      {
        path: 'reset', component: ResetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
