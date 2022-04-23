import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import { getMaskUserPass, getLoginError } from '../state/user.reducer';
import { UserPageActions } from '../state/actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  maskUserName$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    this.maskUserName$ = this.store.select(getMaskUserPass);
    this.error$ = this.store.select(getLoginError);
  }

  cancel(): void {
    this.store.dispatch(UserPageActions.cancelUserLogin());
  }

  checkChanged(): void {
    this.store.dispatch(UserPageActions.maskUserPass());
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.store.dispatch(UserPageActions.userLogin({ userName, password }));
    }
  }

}
