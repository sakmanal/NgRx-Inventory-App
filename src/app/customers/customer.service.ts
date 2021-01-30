import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersUrl = 'api/customers';
  initialCustomer: Customer = {
    id: 0,
    name: '',
    country: null,
    status: 'new',
    company: null,
    lifetimeValue: 0
  };

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createCustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Customer Id must be null for the Web API to assign an Id
    const newCustomer = { ...customer, id: null };
    return this.http.post<Customer>(this.customersUrl, newCustomer, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCustomer(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete<Customer>(url, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer, { headers })
      .pipe(
        // Return the Customer on an update
        map(() => customer),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
