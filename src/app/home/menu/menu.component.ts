import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService) { }

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
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

}