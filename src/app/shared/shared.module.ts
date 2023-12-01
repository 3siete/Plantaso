import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CardPostComponent } from './components/card-post/card-post.component';

import { CardShopComponent } from './components/card-shop/card-shop.component';

import { ContainerComponent } from './components/container/container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SpeedDialModule } from 'primeng/speeddial';
import { DialogModule } from 'primeng/dialog';
import { AdminModule } from '../modules/admin/admin.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    
    CardPostComponent,
    CardShopComponent,
    
    ContainerComponent,
    SidebarComponent,


  ],
  imports: [
    CommonModule,
    AdminModule,
    RouterModule
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