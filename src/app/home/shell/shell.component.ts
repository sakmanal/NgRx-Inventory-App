import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/* NgRx */
import { Store } from '@ngrx/store';
import { State } from '../../state/app.state';
import { getCurrentUserName, isLoggedIn } from '../../user/state/user.reducer';
import { UserPageActions } from '../../user/state/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  currentUserName$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    this.isLoggedIn$ = this.store.select(isLoggedIn);
    this.currentUserName$ = this.store.select(getCurrentUserName);
  }

  logOut(): void {
    this.store.dispatch(UserPageActions.userLogOut());
  }

}
