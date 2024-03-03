import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainer } from './dashboard/dashboard.container';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainer,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'attention-channels',
        loadChildren: () =>
          import('./attention-channels/attention-channels.module').then(
            (m) => m.AttentionChannelsModule
          ),
      },
      {
        path: 'customer-service',
        loadChildren: () =>
          import('./customer-service/customer-service.module').then(
            (m) => m.CustomerServiceModule
          ),
      },
      {
        path: 'information',
        loadChildren: () =>
          import('./information/information.module').then(
            (m) => m.InformationModule
          ),
      },
      {
        path: 'general-settings',
        loadChildren: () =>
          import('./general-settings/general-settings.module').then(
            (m) => m.GeneralSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
