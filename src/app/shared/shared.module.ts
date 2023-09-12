import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CardPostComponent } from './components/card-post/card-post.component';

import { CardShopComponent } from './components/card-shop/card-shop.component';

import { ContainerComponent } from './components/container/container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    
    CardPostComponent,
    CardShopComponent,
    
    ContainerComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    ContainerComponent,
    
    CardPostComponent,
    CardShopComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
