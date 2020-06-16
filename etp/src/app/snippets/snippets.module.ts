import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { TopbarComponent } from './dashboard-nav/topbar/topbar.component';
import { SidebarComponent } from './dashboard-nav/sidebar/sidebar.component';
import { StickybarComponent } from './dashboard-nav/stickybar/stickybar.component';
import { TopmenuComponent } from './dashboard-nav/topmenu/topmenu.component';
import { ProfilebarComponent } from './dashboard-nav/profilebar/profilebar.component';
import { LogMsgComponent } from './dashboard-nav/log-msg/log-msg.component';
import { SettingsDevicesComponent } from './dashboard-snips/settings-devices/settings-devices.component';
import { SettingsOptionsComponent } from './dashboard-snips/settings-options/settings-options.component';

const components = [
  TopbarComponent,
  SidebarComponent,
  StickybarComponent,
  TopmenuComponent,
  ProfilebarComponent,
  LogMsgComponent,
  SettingsDevicesComponent,
];
@NgModule({
  declarations: [...components, SettingsOptionsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatListModule,
  ],
  exports: [...components, RouterModule],
})
export class SnippetsModule {}
