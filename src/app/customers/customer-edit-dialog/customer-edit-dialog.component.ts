import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Customer } from '../customer';
import { statuses } from '../../shared/statuses';
import { countries } from '../../shared/countries';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from '../../shared/generic-validator';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerEditDialogComponent implements OnInit {

  // customer$: Subscription;
  selectedCustomer: Customer;
  customerForm: FormGroup;
  statuses = statuses;
  countries = countries;
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
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

    // Define the form group
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      country: ['', Validators.required],
      company: ['', Validators.required],
      status: ['', Validators.required],
      lifetimeValue: ''
    });

    // Watch for value changes for validation
    this.customerForm.valueChanges
    .subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.customerForm)
    );

    this.selectedCustomer =  this.config.data.customer;
    this.customerForm.patchValue(this.selectedCustomer);
  }

  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.customerForm);
  }

  submitCustomer(): void {
    if (this.customerForm.valid) {
      if (this.customerForm.dirty) {
        // Copy over all of the original customer properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const customer: Customer = { ...this.selectedCustomer, ...this.customerForm.value };
        this.ref.close(customer);
      }
    }
  }

  cancel(): void {
    this.ref.close();
  }

}
