import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrayRoutingModule } from './tray-routing.module';
import { TrayComponent } from './tray.component';
import { TrayContainer } from './tray.container';

@NgModule({
  imports: [CommonModule, TrayRoutingModule, SharedModule, MatChipsModule],
  declarations: [TrayContainer, TrayComponent],
})
export class TrayModule {}
