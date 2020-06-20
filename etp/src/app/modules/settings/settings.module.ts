import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { NotificationsSettingComponent } from './notifications-setting/notifications-setting.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoginSecurityComponent } from './login-security/login-security.component';
import { DevicesComponent } from './devices/devices.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    PaymentOptionsComponent,
    NotificationsSettingComponent,
    ProfileDetailsComponent,
    LoginSecurityComponent,
    DevicesComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule,
    NgbModule,
    MatMenuModule,
  ],
})
export class SettingsModule {}
