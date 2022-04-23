import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './mock-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

/* PrimeNG */
import { PrimeNgModule } from './primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';

/* @ngx-translate */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(MockData, { dataEncapsulation: false, passThruUnknownUrl: true }),
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
