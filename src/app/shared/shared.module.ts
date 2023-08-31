import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardShopComponent } from './components/card-shop/card-shop.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardShopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
