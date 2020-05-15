import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { SnippetsModule } from '../snippets/snippets.module';
import { OverviewComponent } from './overview/overview.component';
import { EMarketComponent } from './e-market/e-market.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RulesComponent } from './rules/rules.component';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';
import { NodesComponent } from './nodes/nodes.component';

@NgModule({
  declarations: [NavComponent, OverviewComponent, EMarketComponent, AnalyticsComponent, RulesComponent, SettingsComponent, HistoryComponent, NodesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    SnippetsModule,
  ],
})
export class DashboardModule {}
