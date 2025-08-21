import {Component, computed, input, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Product} from '../../../models/product.model';
import {CartService} from '../../../services/cart.service';

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
  productData = input<Product | null>();
  private cartService = inject(CartService);

  // Get quantity for this specific product
  productQuantity = computed(() => {
    const product = this.productData();
    return product ? this.cartService.getProductQuantity(product.id) : 0;
  });

  addToCart() {
    const product = this.productData();
    if (product) {
      this.cartService.addToCart(product);
    }
  }

  removeFromCart() {
    const product = this.productData();
    if (product) {
      this.cartService.removeFromCart(product.id);
    }
  }

  protected readonly String = String;
}
