import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralSettingsRoutingModule } from './general-settings-routing.module';
import { GeneralSettingsComponent } from './general-settings.component';
import { GeneralSettingsContainer } from './general-settings.container';

@NgModule({
  imports: [
    CommonModule,
    GeneralSettingsRoutingModule,
  ],
  declarations: [GeneralSettingsComponent, GeneralSettingsContainer]
})
export class GeneralSettingsModule { }
