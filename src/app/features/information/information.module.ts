import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';

@NgModule({
  imports: [CommonModule, InformationRoutingModule],
  declarations: [InformationComponent],
})
export class InformationModule {}
