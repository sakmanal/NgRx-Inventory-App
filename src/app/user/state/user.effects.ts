import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { catchError, exhaustMap, filter, map, tap, withLatestFrom } from 'rxjs/operators';

/* NgRx */
import { Action, Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { UserPageActions, UserApiActions } from './actions';
import { getredirectUrl } from './user.reducer';


@Injectable()
export class UserEffects implements OnInitEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<State>
  ) { }

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserPageActions.userLogin),
      exhaustMap((action) =>
        this.authService.login(action.userName, action.password).pipe(
          map((user) => {
            return UserApiActions.loginUserSuccess({ user });
          }),
          catchError((error) =>
             of(UserApiActions.loginUserFailure({ error }))
          )
        )
      )
    )
  );

  loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserApiActions.loginUserSuccess),
      withLatestFrom(this.store.select(getredirectUrl)),
      tap(([action, redirectUrl]) => this.router.navigateByUrl(redirectUrl))
    ),
    { dispatch: false }
  );

  checkUserAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserPageActions.checkUserAuth),
      map(() => this.authService.getSavedUser()),
      filter(user => !!user),
      map(user => UserApiActions.loginUserSuccess({ user }))
    )
  );

  cancelUserLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserPageActions.cancelUserLogin),
      tap(() => this.router.navigate(['/welcome']))
    ),
    { dispatch: false }
  );

  userLogOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserPageActions.userLogOut),
      tap(() => {
        this.authService.logOut();
        this.router.navigate(['/welcome']);
      })
    ),
    { dispatch: false }
  );

  loginRedirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserApiActions.loginRedirect),
      tap(() => {
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

  ngrxOnInitEffects(): Action {
    return UserPageActions.checkUserAuth();
  }

}
