import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCustomers, getError } from '../state';

import { CustomerPageActions } from '../state/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-shell',
  templateUrl: './customer-shell.component.html',
  styleUrls: ['./customer-shell.component.scss']
})
export class CustomerShellComponent implements OnInit {
  customers$: Observable<Customer[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.customers$ = this.store.select(getCustomers);

    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(CustomerPageActions.loadCustomers());
  }

}
