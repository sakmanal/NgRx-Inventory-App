import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../product';
import { GenericValidator } from '../../shared/validators/generic-validator';
import { NumberValidators } from '../../shared/validators/number.validator';
import { TranslateService } from '@ngx-translate/core';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnChanges, OnDestroy {
  pageTitle = this.translate.instant('Product Edit');
  @Input() errorMessage: string;
  @Input() selectedProduct: Product;
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();
  @Output() clearCurrent = new EventEmitter<void>();
  formSub: Subscription;
  productForm: FormGroup;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.initValidationMessages();

    // Define an instance of the validator for use with this form
    this.genericValidator = new GenericValidator();
  }

  initValidationMessages(): void {
    this.validationMessages = {
      productName: {
        required: this.translate.instant('Product name is required.'),
        minlength: this.translate.instant('Product name must be at least three characters.'),
        maxlength: this.translate.instant('Product name cannot exceed 50 characters.')
      },
      productCode: {
        required: this.translate.instant('Product code is required.')
      },
      starRating: {
        range: this.translate.instant('Rate the product between 1 (lowest) and 5 (highest).')
      }
    };
  }

  initPageTitle(product: Product) : void {
    if (product.id === 0) {
      this.pageTitle = this.translate.instant('Add Product');
    } else {
      this.pageTitle = `${this.translate.instant('Edit Product')}: ${product.productName}`;
    }
  }

  ngOnInit(): void {
    // Define the form group
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      description: ''
    });

    // Watch for value changes for validation and translations
    merge(this.translate.onLangChange, this.productForm.valueChanges)
    .subscribe((res) => {
      if (res?.lang) {
        this.initPageTitle(this.selectedProduct);
        this.initValidationMessages();
      }
      this.displayMessage = this.genericValidator.processMessages(this.productForm, this.validationMessages);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // patch form with value from the store
    if (changes.selectedProduct) {
      const product = changes.selectedProduct.currentValue as Product;
      this.displayProduct(product);
    }
  }

  ngOnDestroy(): void {
    if (this.formSub) {
      this.formSub.unsubscribe();
    }
  }

  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.productForm, this.validationMessages);
  }

  displayProduct(product: Product | null): void {
    if (product && this.productForm) {
      // Reset the form back to pristine
      this.productForm.reset();

      // Display the appropriate page title
      this.initPageTitle(product);

      // Update the data on the form
      this.productForm.patchValue({
        productName: product.productName,
        productCode: product.productCode,
        starRating: product.starRating,
        description: product.description
      });
    }
  }

  cancelEdit(): void {
    // Redisplay the currently selected product
    // replacing any edits made
    this.displayProduct(this.selectedProduct);
  }

  deleteProduct(): void {
    if (this.selectedProduct && this.selectedProduct.id) {
        this.delete.emit(this.selectedProduct);
    } else {
      // No need to delete, it was never saved
      this.clearCurrent.emit();
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const product = { ...this.selectedProduct, ...this.productForm.value };

        if (product.id === 0) {
          this.create.emit(product);
        } else {
          this.update.emit(product);
        }
      }
    }
  }

}
