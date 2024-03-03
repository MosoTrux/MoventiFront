import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttentionChannelsRoutingModule } from './attention-channels-routing.module';
import { AttentionChannelsComponent } from './attention-channels.component';

@NgModule({
  imports: [CommonModule, AttentionChannelsRoutingModule],
  declarations: [AttentionChannelsComponent],
})
export class AttentionChannelsModule {}
