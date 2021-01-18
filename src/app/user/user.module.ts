import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';

import { PrimeNgModule } from '../primeng.module';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer),
    PrimeNgModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
