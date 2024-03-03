import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/interfaces';

@Component({
  selector: 'app-sidebar-ui',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() listMenu: IMenu[] = [];

  constructor() {}

  ngOnInit() {
    console.log('menuuu', this.listMenu);
  }
}
