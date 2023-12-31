import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    AdminModule
  ]
})
export class ProductsModule { }
