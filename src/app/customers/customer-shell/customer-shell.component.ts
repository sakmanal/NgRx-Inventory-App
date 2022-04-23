import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../customer';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getCustomers, getError } from '../state';
import { CustomerPageActions } from '../state/actions';
import { Observable } from 'rxjs';

import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CustomerService } from '../customer.service';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-customer-shell',
  templateUrl: './customer-shell.component.html',
  styleUrls: ['./customer-shell.component.scss'],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerShellComponent implements OnInit {
  customers$: Observable<Customer[]>;
  errorMessage$: Observable<string>;

  ref: DynamicDialogRef;

  constructor(
    private store: Store<State>,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private customerService: CustomerService,
    private translate: TranslateService
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
      message: this.translate.instant('Are you sure you want to delete the selected customer?'),
      header: this.translate.instant('Confirm'),
      acceptLabel: this.translate.instant('Yes'),
      rejectLabel: this.translate.instant('No'),
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(CustomerPageActions.deleteCustomer({ customerId: customer.id }));
      }
    });
  }

  editCustomer(customer: Customer): void {
    this.openEditDialog(`${this.translate.instant('Edit Customer')}: ${customer.name}`, customer);
  }

  newCustomer(): void {
    this.openEditDialog(this.translate.instant('New Customer'), this.customerService.initialCustomer);
  }

  private openEditDialog(title: string, selecteCustomer: Customer): void {
    this.ref = this.dialogService.open(CustomerEditDialogComponent, {
      data: {
        customer: selecteCustomer
      },
      header: title,
      width: '400px',
      // contentStyle: {overflow: 'visible'},
      baseZIndex: 10000,
    });

    this.ref.onClose.pipe(
      filter(customer => customer)
    )
    .subscribe((customer: Customer) => {
      if (customer?.id === 0) {
        this.store.dispatch(CustomerPageActions.createCustomer({ customer }));
      } else {
        this.store.dispatch(CustomerPageActions.updateCustomer({ customer }));
      }
    });
  }

}
