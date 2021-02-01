/* NgRx */
import { createAction, props } from '@ngrx/store';

export const maskUserPass = createAction(
  '[User Page] Mask User Pass'
);

export const userLogin = createAction(
  '[User Page] User Login',
  props<{ userName: string, password: string }>()
);

export const cancelUserLogin = createAction(
  '[User Page] User Login Cancel'
);

export const userLogOut = createAction(
  '[User Page] User Log Out'
);

export const checkUserAuth = createAction(
  '[User Page] Check User Auth'
);
