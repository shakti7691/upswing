import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  constructor(private service: ProductService, private fb: FormBuilder, private router: Router) { }

  productForm!: FormGroup;
  id: any;
  ngOnInit(): void {
    this.fetchProductData();

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  fetchProductData() {
    this.id = this.service.id;
    this.service.getById(this.id).subscribe((res: any) => {
      const data = res
      this.productForm.patchValue({
        name: data.name,
        price: data.price,
        category: data.category,

      })
    })
  }


  updateProduct(id: any) {
    this.service.updateproduct(this.productForm.value, id).subscribe((res) => {

    })
    this.reset();
    this.router.navigate([''])
  }

  reset() {
    this.productForm.reset();
  }

}
