import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tray/tray.module').then((m) => m.TrayModule),
  },
  {
    path: 'fono-maynas',
    loadChildren: () =>
      import('./fono-maynas/fono-maynas.module').then(
        (m) => m.FonoMaynasModule
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./footer/footer.module').then((m) => m.FooterModule),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('./header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'simulator',
    loadChildren: () =>
      import('./simulator/simulator.module').then((m) => m.SimulatorModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralSettingsRoutingModule {}
