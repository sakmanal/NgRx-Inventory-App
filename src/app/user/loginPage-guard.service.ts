import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import { isLoggedIn } from './state/user.reducer';


@Injectable({
  providedIn: 'root',
})
export class LoginpageGuardService implements CanActivate {

  constructor(private store: Store<State>) { }

  canActivate(): Observable<boolean> {
    return this.store.select(isLoggedIn).pipe(
      // prevent navigate to login page if user is already logged in
      map((authed) => !authed),
      take(1)
    );
  }
}
