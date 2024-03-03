import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.container.html',
})
export class SidebarContainer implements OnInit {
  public listMenu: IMenu[] = [
    { name: 'Home', path: '/dashboard/home' },
    { name: 'Productos', path: '/dashboard/products' },
    {
      name: 'Canales de Atención',
      path: '/dashboard/attention-channels',
    },
    {
      name: 'Atención al Cliente',
      path: '/dashboard/customer-service',
    },
    { name: 'Información', path: '/dashboard/information' },
    {
      name: 'Configuración General',
      path: '/dashboard/general-settings',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
