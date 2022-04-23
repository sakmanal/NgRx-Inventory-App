import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomerService } from '../customer.service';
import { MessageService } from 'primeng/api';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerApiActions, CustomerPageActions } from './actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private messageService: MessageService,
    private translate: TranslateService
  ) {}

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerPageActions.loadCustomers),
      mergeMap(() =>
        this.customerService.getCustomers().pipe(
          map((customers) =>
            CustomerApiActions.loadCustomersSuccess({ customers })
          ),
          catchError((error) =>
            of(CustomerApiActions.loadCustomersFailure({ error }))
          )
        )
      )
    );
  });

  updateCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerPageActions.updateCustomer),
      concatMap((action) =>
        this.customerService.updateCustomer(action.customer).pipe(
          tap((customer) =>  {
            this.messageService.add({
              severity: 'success',
              summary: this.translate.instant('Success'),
              detail:  `${customer.name} ${this.translate.instant('updated successfully')}`
            });
          }),
          map((customer) => CustomerApiActions.updateCustomerSuccess({ customer })),
          catchError((error) =>
            of(CustomerApiActions.updateCustomerFailure({ error }))
          )
        )
      )
    );
  });

  createCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerPageActions.createCustomer),
      concatMap((action) =>
        this.customerService.createCustomer(action.customer).pipe(
          tap((customer) =>  this.messageService.add({
              severity: 'success',
              summary: this.translate.instant('Success'),
              detail:  `${customer.name} ${this.translate.instant('created successfully')}`
          })),
          map((customer) => CustomerApiActions.createCustomerSuccess({ customer })),
          catchError((error) =>
            of(CustomerApiActions.createCustomerFailure({ error }))
          )
        )
      )
    );
  });

  deleteCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerPageActions.deleteCustomer),
      mergeMap((action) =>
        this.customerService.deleteCustomer(action.customerId).pipe(
          tap(() =>  this.messageService.add({
              severity: 'success',
              summary: this.translate.instant('Success'),
              detail: this.translate.instant('Deleted successfully')
          })),
          map(() =>
            CustomerApiActions.deleteCustomerSuccess({
              customerId: action.customerId,
            })
          ),
          catchError((error) =>
            of(CustomerApiActions.deleteCustomerFailure({ error }))
          )
        )
      )
    );
  });
}
