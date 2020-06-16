import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsSettingComponent } from './notifications-setting/notifications-setting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/settings/notifications',
    pathMatch: 'full',
  },
  {
    path: 'notifications',
    component: NotificationsSettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
