import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

  constructor() { }

  login(userName: string, password: string): Observable<User> {
    // Code here would log into a back end service
    // and return user information
    // This is just hard-coded here.

    // return throwError('Wrong Password or Username');

    const user = {
      id: 2,
      userName,
      isAdmin: false
    };
    localStorage.setItem('user', JSON.stringify(user));
    return of(user);
  }

  logOut(): void {
    localStorage.removeItem('user');
  }

  getSavedUser(): User | null {
    return JSON.parse(localStorage.getItem('user'));
  }

}
