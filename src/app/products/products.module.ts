import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddnewProductComponent } from './addnew-product/addnew-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    ProductsListComponent,
    AddnewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TableModule,
    ReactiveFormsModule,
    NgxChartsModule
  ]
})
export class ProductsModule { }
