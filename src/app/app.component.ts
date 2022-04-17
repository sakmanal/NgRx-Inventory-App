import { Component } from '@angular/core';
import { ThemeService } from './core/theme.service';
import { TranslationService } from './core/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private themeService: ThemeService, private translationService: TranslationService) {
    this.themeService.initTheme();
    this.translationService.initTranslations();
   }

}
