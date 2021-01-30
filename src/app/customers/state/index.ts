import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { Customer } from '../customer';
import { CustomerState } from './customer.reducer';

// Extends the app state to include the Customer feature.
// This is required because Customers are lazy loaded.
// So the reference to CustomerState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    customers: CustomerState;
}

// Selector functions
const getCustomerFeatureState = createFeatureSelector<CustomerState>('customers');

export const getCurrentCustomerId = createSelector(
    getCustomerFeatureState,
    state => state.currentCustomerId
);

export const getCurrentCustomer = createSelector(
    getCustomerFeatureState,
    getCurrentCustomerId,
    (state, currentCustomerId) => {
        if (currentCustomerId === 0) {
            return ({
              id: 0,
              name: '',
              country: null,
              status: 'new',
              company: null,
              lifetimeValue: 0
            } as Customer);
        } else {
            return currentCustomerId ? state.customers.find(c => c.id === currentCustomerId) : null;
        }
    }
);

export const getCustomers = createSelector(
    getCustomerFeatureState,
    state => [...state.customers]
);

export const getError = createSelector(
    getCustomerFeatureState,
    state => state.error
);
