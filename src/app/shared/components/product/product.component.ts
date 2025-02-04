import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

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

}
