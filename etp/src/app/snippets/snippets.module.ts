import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './partials/topbar/topbar.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { MatButtonModule } from '@angular/material/button';
import { StickybarComponent } from './stickybar/stickybar.component';
import { ProfilebarComponent } from './profilebar/profilebar.component';

const components = [TopbarComponent, SidebarComponent, StickybarComponent];
@NgModule({
  declarations: [...components, TopmenuComponent, ProfilebarComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [...components],
})
export class SnippetsModule {}
