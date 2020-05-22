import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SnippetsModule } from '../snippets/snippets.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

//components
import { NavComponent } from './nav/nav.component';
import { OverviewComponent } from './overview/overview.component';
import { EMarketComponent } from './e-market/e-market.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RulesComponent } from './rules/rules.component';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';
import { NodesComponent } from './nodes/nodes.component';

//material
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    OverviewComponent,
    EMarketComponent,
    AnalyticsComponent,
    RulesComponent,
    SettingsComponent,
    HistoryComponent,
    NodesComponent,
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    SnippetsModule,
    NgxChartsModule,
    MatListModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
})
export class DashboardModule {}
