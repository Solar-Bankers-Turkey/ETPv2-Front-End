import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { OverviewComponent } from './overview/overview.component';
import { EMarketComponent } from './e-market/e-market.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RulesComponent } from './rules/rules.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { NodesComponent } from './nodes/nodes.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,

    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'energy-market',
        component: EMarketComponent,
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
      },
      {
        path: 'rules',
        component: RulesComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(
                (m) => m.SettingsModule
              ),
          },
        ],
      },
      {
        path: 'solar-nodes',
        component: NodesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
