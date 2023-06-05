import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://dummyjson.com/product';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    debugger;
    return this.http.get<any>(this.apiUrl);
  }

  getAllProducts(): Observable<any> {
    debugger;
    return this.http.get<any>('https://dummyjson.com/products');
  }
}
