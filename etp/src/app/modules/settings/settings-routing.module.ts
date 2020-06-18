import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsSettingComponent } from './notifications-setting/notifications-setting.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { LoginSecurityComponent } from './login-security/login-security.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile-details',
    pathMatch: 'full',
  },
  {
    path: 'notifications',
    component: NotificationsSettingComponent,
  },
  {
    path: 'profile-details',
    component: ProfileDetailsComponent,
  },
  {
    path: 'payment-options',
    component: PaymentOptionsComponent,
  },
  {
    path: 'login-security',
    component: LoginSecurityComponent,
  },
  {
    path: 'device-options',
    component: DevicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
