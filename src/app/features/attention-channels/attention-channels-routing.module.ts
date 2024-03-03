import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttentionChannelsComponent } from './attention-channels.component';

const routes: Routes = [
  {
    path: '',
    component: AttentionChannelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionChannelsRoutingModule {}
