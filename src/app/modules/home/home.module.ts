import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CarruselPostComponent } from './components/carrusel-post/carrusel-post.component';
import { CarruselShopComponent } from './components/carrusel-shop/carrusel-shop.component';
import { CardPostCarrComponent } from './components/card-post-carr/card-post-carr.component';
import { CardShopCarrComponent } from './components/card-shop-carr/card-shop-carr.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CarruselComponent,
    CarruselPostComponent,
    CarruselShopComponent,
    CardPostCarrComponent,
    CardShopCarrComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
