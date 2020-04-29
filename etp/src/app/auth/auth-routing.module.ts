import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthhomeComponent } from './authhome/authhome.component';


const routes: Routes = [
  {
    path: '', component: AuthhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
