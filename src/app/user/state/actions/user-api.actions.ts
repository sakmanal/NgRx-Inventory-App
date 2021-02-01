import { createAction, props } from '@ngrx/store';
import { User } from '../../user';

export const loginUserSuccess = createAction(
  '[User API] Login User Success',
  props<{ user: User }>()
);

export const loginUserFailure = createAction(
  '[User API] Login User Fail',
  props<{ error: string }>()
);

export const loginRedirect = createAction(
  '[User API] Redirect to Login',
  props<{ redirectUrl: string }>()
);

