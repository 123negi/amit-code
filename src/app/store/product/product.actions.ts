import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/category.model';

export const addProduct = createAction(
  '[Product Page] Add Product',
  props<{ content: string }>()
);

export const removeProduct = createAction(
  '[Product Page] Remove Product',
  props<{ id: string }>()
);

export const loadProduct = createAction('[Product Page] Load Products');

export const loadProductSuccess = createAction(
  '[Product API] Product Load Success',
  props<{ products: Product[] }>()
);

export const loadProductFailure = createAction(
  '[Product API] Product Load Failure',
  props<{ error: string }>()
);