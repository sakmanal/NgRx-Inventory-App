import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product';

/* NgRx */
import { Store } from '@ngrx/store';
import { State, getShowProductCode, getCurrentProduct, getProducts, getError } from '../state';

import { ProductPageActions } from '../state/actions';

import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<State>,
    private confirmationService: ConfirmationService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {

    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.products$ = this.store.select(getProducts);

    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductPageActions.loadProducts());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedProduct$ = this.store.select(getCurrentProduct);

    // Do NOT subscribe here because it uses an async pipe
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: product.id }));
  }

  deleteProduct(product: Product): void {
    this.confirmationService.confirm({
      // message: `Are you sure you want to delete the selected (${product.productName}) product?`,
      message: this.translate.instant('Are you sure you want to delete the selected product', {value: product.productName}),
      header: this.translate.instant('Confirm'),
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: this.translate.instant('Yes'),
      rejectLabel: this.translate.instant('No'),
      accept: () => {
        this.store.dispatch(ProductPageActions.deleteProduct({ productId: product.id }));
      }
    });
  }

  clearProduct(): void {
    this.store.dispatch(ProductPageActions.clearCurrentProduct());
  }

  saveProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.createProduct({ product }));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(ProductPageActions.updateProduct({ product }));
  }

}
