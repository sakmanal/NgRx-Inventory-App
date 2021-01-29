import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

/* NgRx */
import { Store } from '@ngrx/store';
import { CustomerPageActions } from '../state/actions';

import { Customer } from '../customer';
import { State } from '../state';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from '../../shared/generic-validator';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.scss']
})
export class CustomerEditDialogComponent implements OnInit {

  customerForm: FormGroup;
    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private store: Store<State>
    ) {
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
          name: {
            required: 'Customer name is required.',
            minlength: 'Customer name must be at least three characters.',
            maxlength: 'Customer name cannot exceed 50 characters.'
          },
          country: {
            required: 'Customer\'s country is required.'
          },
          company: {
            required: 'Customer\'s company is required.'
          },
          status: {
            required: 'Customer\'s status is required.'
          }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

  ngOnInit(): void {
  }

  saveCustomer(customer: Customer): void {
    this.store.dispatch(CustomerPageActions.createCustomer({ customer }));
    this.ref.close();
  }

  updateCustomer(customer: Customer): void {
    this.store.dispatch(CustomerPageActions.updateCustomer({ customer }));
    this.ref.close();
  }

  cancel(): void {
    this.store.dispatch(CustomerPageActions.clearCurrentCustomer());
    this.ref.close();
  }

}
