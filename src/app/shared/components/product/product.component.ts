import {Component, computed, input, Input, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Product} from '../../../models/product.model';

@Component({
    selector: 'app-product',
  imports: [
    NgOptimizedImage,
    MatIcon
  ],
    templateUrl: './product.component.html',
    standalone: true,
    styleUrl: './product.component.scss'
})
export class ProductComponent {
  // @Input() productData!: Product;

  productData = input<Product | null>();

  cartCount = signal(0);
  productCount = computed(() => this.cartCount());

  addToCart() {
    this.cartCount.update((count) => count + 1);
  }

  protected readonly String = String;
}
