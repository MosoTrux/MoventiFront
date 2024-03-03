import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrayContainer } from './tray.container';

const routes: Routes = [
  {
    path: '',
    component: TrayContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrayRoutingModule {}
