import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerServiceRoutingModule } from './customer-service-routing.module';
import { CustomerServiceComponent } from './customer-service.component';

@NgModule({
  imports: [CommonModule, CustomerServiceRoutingModule],
  declarations: [CustomerServiceComponent],
})
export class CustomerServiceModule {}
