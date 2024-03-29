import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductPageActions, ProductApiActions } from './actions';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private messageService: MessageService,
    private translate: TranslateService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            ProductApiActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductApiActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.updateProduct),
      concatMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          tap((product) =>  this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('Success'),
            detail:  `${product.productName} ${this.translate.instant('updated successfully')}`
          })),
          map((product) => ProductApiActions.updateProductSuccess({ product })),
          catchError((error) =>
            of(ProductApiActions.updateProductFailure({ error }))
          )
        )
      )
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.createProduct),
      concatMap((action) =>
        this.productService.createProduct(action.product).pipe(
          tap((product) =>  this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('Success'),
            detail:  `${product.productName} ${this.translate.instant('created successfully')}`
          })),
          map((product) => ProductApiActions.createProductSuccess({ product })),
          catchError((error) =>
            of(ProductApiActions.createProductFailure({ error }))
          )
        )
      )
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.deleteProduct),
      mergeMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          tap(() =>  this.messageService.add({
            severity: this.translate.instant('success'),
            summary: 'Success',
            detail: this.translate.instant('Deleted successfully')
          })),
          map(() =>
            ProductApiActions.deleteProductSuccess({
              productId: action.productId,
            })
          ),
          catchError((error) =>
            of(ProductApiActions.deleteProductFailure({ error }))
          )
        )
      )
    );
  });
}
