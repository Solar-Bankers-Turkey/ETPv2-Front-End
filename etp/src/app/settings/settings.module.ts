import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { NotificationsSettingComponent } from './notifications-setting/notifications-setting.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LoginSecurityComponent } from './login-security/login-security.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [PaymentOptionsComponent, NotificationsSettingComponent, ProfileDetailsComponent, LoginSecurityComponent, DevicesComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
