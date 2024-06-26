import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addnew-product',
  templateUrl: './addnew-product.component.html',
  styleUrls: ['./addnew-product.component.scss']
})
export class AddnewProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private service: ProductService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get category() {
    return this.productForm.get('category');
  }

  addNewProduct() {
    if (this.productForm.valid) {
      this.service.addproduct(this.productForm.value).subscribe((res) => {
      });
      this.reset();
      this.router.navigate([''])
    }
  }

  reset() {
    this.productForm.reset();
  }
}
