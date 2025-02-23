import { Component } from '@angular/core';
import {ProductComponent} from '../../shared/components/product/product.component';

@Component({
  selector: 'app-product-catalog',
  imports: [ProductComponent],
  templateUrl: './product-catalog.component.html',
  standalone: true,
  styleUrl: './product-catalog.component.scss'
})
export class ProductCatalogComponent {

}
