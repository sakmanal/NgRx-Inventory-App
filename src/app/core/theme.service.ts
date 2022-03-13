import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

@Injectable()
export class ThemeService {
  private themeSub = new BehaviorSubject<Theme>(Theme.dark);
  theme$: Observable<Theme> = this.themeSub.asObservable();

  get themeMode(): Theme {
    return this.themeSub.value;
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === Theme.light) {
      this.setLightTheme();
      this.themeSub.next(Theme.light);
    }
  }

  switchTheme(): void {
    const themeMode = this.getThemeSchema();

    if (themeMode === Theme.dark) {
      this.setLightTheme();
      this.themeSub.next(Theme.light);
      this.saveTheme(Theme.light);
    }

    if (themeMode === Theme.light) {
      this.setDarkTheme();
      this.themeSub.next(Theme.dark);
      this.saveTheme(Theme.dark);
    }
  }

  private setLightTheme(): void {
    if (this.themeLink) {
      this.themeLink.href = 'light-theme.css';
    }
  }

  private setDarkTheme(): void {
    if (this.themeLink) {
      this.themeLink.href = 'dark-theme.css';
    }
  }

  get themeLink(): HTMLLinkElement {
    return document.getElementById('app-theme') as HTMLLinkElement;
  }

  private getThemeSchema(): string {
    const href = this.themeLink.getAttribute('href');
    const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
    const themeTokens = themeFile.split('-');
    const colorSchema = themeTokens[0];
    return colorSchema;
  }

  private saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }
}
