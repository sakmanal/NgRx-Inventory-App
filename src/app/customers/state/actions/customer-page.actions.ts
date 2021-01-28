import { Customer } from '../../customer';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const setCurrentCustomer = createAction(
  '[Customer Page] Set Current Customer',
  props<{ currentCustomerId: number }>()
);

export const clearCurrentCustomer = createAction(
  '[Customer Page] Clear Current Customer'
);

export const initializeCurrentCustomer = createAction(
  '[Customer Page] Initialize Current Customer'
);

export const loadCustomers = createAction(
  '[Customer Page] Load'
);

export const updateCustomer = createAction(
  '[Customer Page] Update Customer',
  props<{ customer: Customer }>()
);

export const createCustomer = createAction(
  '[Customer Page] Create Customer',
  props<{ customer: Customer }>()
);

export const deleteCustomer = createAction(
  '[Customer Page] Delete Customer',
  props<{ customerId: number }>()
);
