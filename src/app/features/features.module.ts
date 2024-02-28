import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContainer } from './dashboard/dashboard.container';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
  ],
  declarations: [DashboardComponent, DashboardContainer]
})
export class FeaturesModule { }
