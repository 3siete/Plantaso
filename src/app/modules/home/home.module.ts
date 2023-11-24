import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardCarrComponent } from './components/card-carr/card-carr.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselProdComponent } from './components/carousel-prod/carousel-prod.component';
import { CardCarrProdComponent } from './components/card-carr-prod/card-carr-prod.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CarruselComponent,
    CardCarrComponent,
    CarouselComponent,
    CarouselProdComponent,
    CardCarrProdComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
