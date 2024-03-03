import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, HeaderRoutingModule],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
