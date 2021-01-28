import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { customerReducer } from './state/customer.reducer';
import { CustomerEffects } from './state/customer.effects';

import { PrimeNgModule } from '../primeng.module';
import { CustomerShellComponent } from './customer-shell/customer-shell.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const customerRoutes: Routes = [{ path: '', component: CustomerShellComponent }];

@NgModule({
  declarations: [CustomerShellComponent, CustomerTableComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([CustomerEffects]),
    PrimeNgModule,
    RouterModule.forChild(customerRoutes),
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE' // 'de-DE' for Germany, 'fr-FR' for France ...
  }]
})
export class CustomersModule { }
