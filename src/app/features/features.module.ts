import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedLayoutModule } from '../shared/shared-layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContainer } from './dashboard/dashboard.container';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [CommonModule, FeaturesRoutingModule, SharedLayoutModule],
  declarations: [DashboardComponent, DashboardContainer],
})
export class FeaturesModule {}
