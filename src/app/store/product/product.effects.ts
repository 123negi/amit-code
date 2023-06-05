import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as ProductActions from './product.actions';
import { CategoryService } from 'src/app/service.ts/category.service';

@Injectable()
export class ProductEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        this.categoryService.getAllProducts().pipe(
          map((products) =>
            ProductActions.loadProductSuccess({ products: products.products })
          ),
          catchError((error) =>
            of(ProductActions.loadProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}
