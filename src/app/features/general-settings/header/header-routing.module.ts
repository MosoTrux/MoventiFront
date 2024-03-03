import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderContainer } from './header.container';

const routes: Routes = [
  {
    path: '',
    component: HeaderContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
