import { Component } from '@angular/core';
import {ProductComponent} from '../../shared/components/product/product.component';

@Component({
  selector: 'app-landing',
  imports: [ProductComponent],
  templateUrl: './landing.component.html',
  standalone: true,
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
