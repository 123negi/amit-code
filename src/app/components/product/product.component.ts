import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductFacade } from 'src/app/store/product/product.facade';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  contactForm!: FormGroup;
  @Output() valueChange = new EventEmitter();
  constructor(private productFacade: ProductFacade, private formBuilder: FormBuilder) {}

  @Input() uniqueProduct: any;
  ngOnInit() {
    this.createContactForm();
    this. updateProfile()
  }
  ngOnChanges() {
    console.log(this.uniqueProduct)
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      title: [''],  
      description: [''],
      price: ['']
    });
  }


  updateProfile() {
    this.contactForm.patchValue({
      title: this.uniqueProduct.title,
      description: this.uniqueProduct.description,
      price: this.uniqueProduct.price,
    });
  }
  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
} 
valueChanged(){
  this.valueChange.emit(true);
}

}
