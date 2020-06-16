import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { NotificationsSettingComponent } from './notifications-setting/notifications-setting.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [PaymentOptionsComponent, NotificationsSettingComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
