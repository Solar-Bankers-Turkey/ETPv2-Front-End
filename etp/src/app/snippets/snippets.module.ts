import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './partials/topbar/topbar.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { TopmenuComponent } from './partials/topmenu/topmenu.component';
import { MatButtonModule } from '@angular/material/button';
import { StickybarComponent } from './partials/stickybar/stickybar.component';
import { ProfilebarComponent } from './partials/profilebar/profilebar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

const components = [
  TopbarComponent,
  SidebarComponent,
  StickybarComponent,
  TopmenuComponent,
  ProfilebarComponent,
];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  exports: [...components, RouterModule],
})
export class SnippetsModule {}
