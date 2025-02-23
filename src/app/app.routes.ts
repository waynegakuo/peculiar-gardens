import { Routes } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {ProductCatalogComponent} from './pages/product-catalog/product-catalog.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'catalog',
    component: ProductCatalogComponent
  }
];
