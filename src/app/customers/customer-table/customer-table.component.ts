import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Customer } from '../customer';
import { Table } from 'primeng/table';
import { countries } from '../../shared/countries';
import { statuses } from '../../shared/statuses';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerTableComponent {
  pageTitle = 'Customers';
  countries = countries;
  statuses = statuses;

  @Input() errorMessage: string;
  @Input() customers: Customer[];

  @ViewChild('dt') table: Table;

  constructor() { }

  onCountryChange(event): void {
    this.table.filter(event.value, 'country.name', 'in');
  }

  getCountryFlagUrl(code: string): string {
    return `https://catamphetamine.gitlab.io/country-flag-icons/1x1/${code}.svg`;
  }

  editCustomer(customer: Customer): void {

  }

  deleteCustomer(customer: Customer): void {

  }


}