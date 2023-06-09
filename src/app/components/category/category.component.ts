import { Component } from '@angular/core';
import { Observable, concatMap, filter, of, tap } from 'rxjs';
import { Category } from 'src/app/category.model';
import { CategoryFacade } from 'src/app/store/category/category.facade';
import { ProductFacade } from 'src/app/store/product/product.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categoryList$: any;
  uniqueProduct: any;
  categories:any;
  detailDataPass:any;
  showDetailPage =true
  constructor(
    private categoryFacade: CategoryFacade,
    private productFacade: ProductFacade
  ) {}

  ngOnInit() {
    this.category();
    this.categoryFacade.loadCategories();
    this.productFacade.loadProduct();
    this.categoryList$ = this.categoryFacade.categories$;
   
  }

  
  category(){
    this.categoryFacade.categories$.subscribe((categories:any) => {
      if(categories.length>0){
         this.categories = categories.map((v: any) => ({...v, active:  false}))
         console.log( this.categories[1].active, this.categories[1].active)
       }  
     });
   
  }
  

  expandRow(category: any) {
    this.productFacade.products$.subscribe((data: any) => {
      debugger
      this.uniqueProduct = data.filter((p: any) => p.category == category);
    });
  }              

  toggleAccordion(index: number, categories:any) {   
    this.categories[index].active = !this.categories[index].active;
    this.categories.forEach((object:any) => {
      if( this.categories[index].id !=  object.id)
      object.active =  false;
    });
    this.expandRow(categories);
   }


   detailsData(data:any){
    this.detailDataPass =data;
    this.showDetailPage = false;
   }

   displayCatgory(e:any){
    this.showDetailPage = e;
   }
}
