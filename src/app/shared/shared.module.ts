import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

import { CardShopComponent } from './components/card-shop/card-shop.component';

import { ContainerComponent } from './components/container/container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    CardShopComponent,

    FooterComponent,
    ContainerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    ContainerComponent,
    
    CardShopComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
