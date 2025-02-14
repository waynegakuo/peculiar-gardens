import {Component, signal, WritableSignal} from '@angular/core';
import {ProductComponent} from '../../shared/components/product/product.component';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-landing',
  imports: [ProductComponent],
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  productMockData: WritableSignal<Product[]> = signal([
    {
      id: 1,
      name: 'Apples',
      price: 10.99,
      image: './assets/product/apples.svg'
    },
    {
      id: 2,
      name: 'Beetroot',
      price: 9.99,
      image: './assets/product/beetroot.svg'
    },
    {
      id: 3,
      name: 'Chicken',
      price: 8.99,
      image: './assets/product/chicken.svg'
    },
    {
      id: 4,
      name: 'Carrots',
      price: 7.99,
      image: './assets/product/default_placeholder.svg'
    },
    {
      id: 5,
      name: 'Eggplant & Tomato',
      price: 6.99,
      image: './assets/product/eggplant_tomato.svg'
    },
    {
      id: 6,
      name: 'Eggs',
      price: 5.99,
      image: './assets/product/eggs.svg'
    },
    {
      id: 7,
      name: 'Fruits',
      price: 4.99,
      image: './assets/product/fruits.svg'
    },
    {
      id: 8,
      name: 'Seedlings',
      price: 3.99,
      image: './assets/product/seedlings.svg'
    }
  ])
    ;
}
