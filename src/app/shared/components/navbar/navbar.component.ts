import { Component, inject } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartService = inject(CartService);
}
