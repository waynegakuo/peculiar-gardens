import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  // Computed signal for total cart items count
  totalItems = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  });

  // Get all cart items
  getCartItems() {
    return this.cartItems();
  }

  // Get quantity for a specific product
  getProductQuantity(productId: number): number {
    const item = this.cartItems().find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }

  // Add item to cart
  addToCart(product: Product) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      // Update existing item quantity
      this.cartItems.set(
        currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      this.cartItems.set([...currentItems, { product, quantity: 1 }]);
    }
  }

  // Remove item from cart or decrease quantity
  removeFromCart(productId: number) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.product.id === productId);

    if (existingItem && existingItem.quantity > 1) {
      // Decrease quantity
      this.cartItems.set(
        currentItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      // Remove item completely
      this.cartItems.set(currentItems.filter(item => item.product.id !== productId));
    }
  }

  // Clear entire cart
  clearCart() {
    this.cartItems.set([]);
  }
}
