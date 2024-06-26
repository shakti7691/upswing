import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  constructor(private service: ProductService, private router: Router) { }
  products: any;
  chartData: any[] = [];
  id: any

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.service.getList().subscribe((data: any) => {
      this.products = data;
      this.chartData = this.transformData(this.products);
    });
  }

  transformData(products: any[]): any[] {
    return products.map(product => ({
      name: product.name,
      value: Number(product.price)
    }));
  }


  setData(id: number) {
    this.service.setData(id)
    this.router.navigate(['/update-product'])
  }



  deleteProduct(id: number): void {
    this.service.deleteProduct(id).subscribe(() => {
      this.getProductList();
    });
  }

}
