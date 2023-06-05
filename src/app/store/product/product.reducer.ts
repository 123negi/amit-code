import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/category.model';
import { loadProductSuccess } from './product.actions';

export interface ProductState {
  products: Product[];
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
};

export const ProductReducer = createReducer(
  initialProductState,
  on(loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
  }))
);
