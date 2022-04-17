import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';

import { PrimeNgModule } from '../primeng.module';
import { UserEffects } from './state/user.effects';
import { LoginpageGuardService } from './loginPage-guard.service';
import { TranslateModule } from '@ngx-translate/core';

const userRoutes: Routes = [
  { path: 'login', canActivate: [LoginpageGuardService], component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects]),
    PrimeNgModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
