import { Customer } from '../../customer';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadCustomersSuccess = createAction(
  '[Customer API] Load Success',
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer API] Load Fail',
  props<{ error: string }>()
);

export const updateCustomerSuccess = createAction(
  '[Customer API] Update Customer Success',
  props<{ customer: Customer }>()
);

export const updateCustomerFailure = createAction(
  '[Customer API] Update Customer Fail',
  props<{ error: string }>()
);

export const createCustomerSuccess = createAction(
  '[Customer API] Create Customer Success',
  props<{ customer: Customer }>()
);

export const createCustomerFailure = createAction(
  '[Customer API] Create Customer Fail',
  props<{ error: string }>()
);

export const deleteCustomerSuccess = createAction(
  '[Customer API] Delete Customer Success',
  props<{ customerId: number }>()
);

export const deleteCustomerFailure = createAction(
  '[Customer API] Delete Customer Fail',
  props<{ error: string }>()
);
