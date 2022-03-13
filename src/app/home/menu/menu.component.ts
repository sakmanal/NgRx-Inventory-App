import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Theme } from 'src/app/core/theme.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  @Input() isLoggedIn: boolean;
  @Input() UserName: string;
  @Input() theme: Theme;
  @Output() logOutUser = new EventEmitter();
  @Output() switchTheme = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: '/welcome'
      },
      {
        label: 'Product List',
        icon: 'pi pi-fw pi-list',
        routerLink: '/products'
      },
      {
        label: 'Customers Table',
        icon: 'pi pi-fw pi-table',
        routerLink: '/customers'
      }
    ];
  }

  logOut(): void {
    this.logOutUser.emit();
  }

  changeTheme(): void {
    this.switchTheme.emit();
  }

}
