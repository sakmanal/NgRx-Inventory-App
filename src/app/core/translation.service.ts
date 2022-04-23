import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';


export enum Languages {
  en = 'en',
  gr = 'gr',
}

export enum LangNames {
  en = 'English',
  gr = 'Greek',
}

@Injectable()
export class TranslationService {
  private flagFolderPath = `./assets/images`;
  private flagFilenameSubject = new BehaviorSubject(`${this.flagFolderPath}/english.png`);
  flagFilename$ = this.flagFilenameSubject.asObservable();
  private langNameSubject = new BehaviorSubject(LangNames.en);
  langName$ = this.langNameSubject.asObservable();

  constructor(private translate: TranslateService) {}

  initTranslations(): void {
    this.translate.addLangs([Languages.gr, Languages.en]);
    this.translate.setDefaultLang(Languages.en);

    const browserLang: string = this.translate.getBrowserLang();
    const localstorageLang: string = localStorage.getItem('lang');

    if (localstorageLang) {
      this.translate.use(localstorageLang);
      this.setLangAssets(localstorageLang);
    } else if (browserLang.match(/gr|de/)) {
      this.translate.use(browserLang);
      this.setLangAssets(browserLang);
    } else {
      this.translate.use(Languages.en);
      this.setLangAssets(Languages.en);
    }
  }

  switchLang(): void {
    switch (this.translate.currentLang) {
      case Languages.en:
        this.translate.use(Languages.gr);
        this.setLangAssets(Languages.gr);
        this.setLangToLocalstorage(Languages.gr);
        break;
      case Languages.gr:
        this.translate.use(Languages.en);
        this.setLangAssets(Languages.en);
        this.setLangToLocalstorage(Languages.en);
        break;
      default:
        this.translate.use(Languages.en);
        this.setLangAssets(Languages.en);
        this.setLangToLocalstorage(Languages.en);
    }
  }

  setLangAssets(currentLang: string) {
    if (currentLang === Languages.en) {
      this.langNameSubject.next(LangNames.gr);
      this.flagFilenameSubject.next(`${this.flagFolderPath}/greece.png`);
    } else {
      this.langNameSubject.next(LangNames.en);
      this.flagFilenameSubject.next(`${this.flagFolderPath}/english.png`);
    }
  }

  private setLangToLocalstorage(lang: Languages) {
    localStorage.setItem('lang', lang);
  }
}
