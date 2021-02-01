import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';
import { isLoggedIn } from './state/user.reducer';
import { UserApiActions } from './state/actions';



@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<State>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(isLoggedIn).pipe(
      map((authed) => {
        if (!authed) {
          this.store.dispatch(UserApiActions.loginRedirect( { redirectUrl: state.url }));
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
