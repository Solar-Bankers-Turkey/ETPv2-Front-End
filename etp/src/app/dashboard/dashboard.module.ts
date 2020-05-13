import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, DashboardRoutingModule, MatButtonModule],
})
export class DashboardModule {}
