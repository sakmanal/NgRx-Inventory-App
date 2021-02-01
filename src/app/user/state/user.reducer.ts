// Homework
import { User } from '../user';

/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { UserApiActions, UserPageActions } from './actions';

// State for this feature (User)
export interface UserState {
  maskUserPass: boolean;
  currentUser: User;
  isLoggedIn: boolean;
  redirectUrl: string;
  error: string;
}

const initialState: UserState = {
  maskUserPass: true,
  currentUser: null,
  isLoggedIn: false,
  redirectUrl: '/products',
  error: ''
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserPass = createSelector(
  getUserFeatureState,
  state => state.maskUserPass
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const getCurrentUserName = createSelector(
  getUserFeatureState,
  state => state.currentUser?.userName
);

export const getredirectUrl = createSelector(
  getUserFeatureState,
  state => state.redirectUrl
);

export const isLoggedIn = createSelector(
  getUserFeatureState,
  state => state.isLoggedIn
);

export const getLoginError = createSelector(
  getUserFeatureState,
  state => state.error
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserPageActions.maskUserPass, (state): UserState => {
    return {
      ...state,
      maskUserPass: !state.maskUserPass
    };
  }),
  on(UserApiActions.loginRedirect, (state, action): UserState => {
    return {
      ...state,
      redirectUrl: action.redirectUrl,
    };
  }),
  on(UserApiActions.loginUserSuccess, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user,
      isLoggedIn: true,
      error: ''
    };
  }),
  on(UserApiActions.loginUserFailure, (state, action): UserState => {
    return {
      ...state,
      currentUser: null,
      isLoggedIn: false,
      error: action.error
    };
  }),
  on(UserPageActions.userLogOut, (state): UserState => {
    return {
      ...initialState
    };
  })
);
