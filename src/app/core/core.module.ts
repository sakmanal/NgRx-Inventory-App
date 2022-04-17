import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';
import { TranslationService } from './translation.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ThemeService, TranslationService],
})
export class CoreModule {}
