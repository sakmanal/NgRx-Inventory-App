import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCustomers, getError } from '../state';
import { CustomerPageActions } from '../state/actions';
import { Observable } from 'rxjs';

import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-customer-shell',
  templateUrl: './customer-shell.component.html',
  styleUrls: ['./customer-shell.component.scss'],
  providers: [DialogService]
})
export class CustomerShellComponent implements OnInit, OnDestroy {
  customers$: Observable<Customer[]>;
  errorMessage$: Observable<string>;

  ref: DynamicDialogRef;

  constructor(
    private store: Store<State>,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.customers$ = this.store.select(getCustomers);

    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(CustomerPageActions.loadCustomers());
  }

  deleteCustomer(customer: Customer): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected customer?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(CustomerPageActions.deleteCustomer({ customerId: customer.id }));
      }
    });
  }

  editCustomer(customer: Customer): void {
    this.store.dispatch(CustomerPageActions.setCurrentCustomer({ currentCustomerId: customer.id }));
    this.openDialog(`Edit Customer: ${customer.name}`);
  }

  newCustomer(): void {
    this.store.dispatch(CustomerPageActions.initializeCurrentCustomer());
    this.openDialog('New Customer');
  }

  private openDialog(title: string): void {
    this.ref = this.dialogService.open(CustomerEditDialogComponent, {
      header: title,
      contentStyle: {'max-height': '500px', overflow: 'auto'},
      baseZIndex: 10000,
    });
  }

  ngOnDestroy(): void {
    if (this.ref) {
        this.ref.close();
    }
  }

}
