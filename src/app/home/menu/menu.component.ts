import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Theme } from 'src/app/core/theme.service';
import { TranslationService } from 'src/app/core/translation.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  items: MenuItem[];
  @Input() isLoggedIn: boolean;
  @Input() UserName: string;
  @Input() theme: Theme;
  @Output() logOutUser = new EventEmitter();
  @Output() switchTheme = new EventEmitter();
  flagFilename$: Observable<string>;
  langName$: Observable<string>;
  private unsubscribe = new Subject<void>();

  constructor(private translate: TranslateService, public translationService: TranslationService) {
    this.flagFilename$ = this.translationService.flagFilename$;
    this.langName$ = this.translationService.langName$;
    this.setMenuItems();
  }

  ngOnInit(): void {
    this.translate.onLangChange.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      this.setMenuItems();
    });
  }

  setMenuItems(): void {
    this.items = [
      {
          label: this.translate.instant('Home'),
          icon: 'pi pi-fw pi-home',
          routerLink: '/welcome'
      },
      {
        label: this.translate.instant('Product List'),
        icon: 'pi pi-fw pi-list',
        routerLink: '/products'
      },
      {
        label: this.translate.instant('Customers Table'),
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

  ngOnDestroy(): void {
    this.unsubscribe.complete();
  }

}
