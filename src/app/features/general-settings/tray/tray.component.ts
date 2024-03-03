import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EGeneralSettingsStatus } from 'src/app/core/enums/general-settings-status.enum';
import { IGeneralSettings } from 'src/app/core/interfaces/general-settings.interace';
import { TrayPresenter } from './tray.presenter';

@Component({
  selector: 'app-tray-ui',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss'],
  providers: [TrayPresenter],
})
export class TrayComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'date', 'status'];
  public dataSource: IGeneralSettings[] = [
    {
      name: 'Simulador',
      date: '03/08/23',
      status: 'Activo',
      route: 'simulator',
    },
    { name: 'Cabecera', date: '03/08/23', status: 'Borrador', route: 'header' },
    {
      name: 'Pie de página',
      date: '03/08/23',
      status: 'Borrador',
      route: 'footer',
    },
    {
      name: 'FonoMaynas',
      date: '03/08/23',
      status: 'Activo',
      route: 'fono-maynas',
    },
  ];
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {}

  public getStatusClass(status: string): { [key: string]: boolean } {
    return {
      'data-table__status': true,
      'data-table__status--active': EGeneralSettingsStatus.active === status,
      'data-table__status--draft': EGeneralSettingsStatus.draft === status,
      'p-2': true,
      'text-center': true,
    };
  }

  public onClickDetail(row: IGeneralSettings) {
    console.log('rowwweeee', row);
    this.router.navigate([row.route], { relativeTo: this.route });
  }
}
