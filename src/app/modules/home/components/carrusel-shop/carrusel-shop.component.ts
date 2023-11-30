import { Component, OnInit } from '@angular/core';
import { CrudProductsService } from 'src/app/modules/admin/services/crud-products.service';
import { CardShop } from 'src/app/models/card-shop';
@Component({
  selector: 'app-carrusel-post',
  templateUrl: './carrusel-shop.component.html',
  styleUrls: ['./carrusel-shop.component.css']
})
export class CarruselShopComponent  {
  // cardShop: CardShop[] = [];

  // constructor(private crudService: CrudProductsService) {}

  // ngOnInit(): void {
  //   this.crudService.getCardShops().subscribe(
  //     (cardPosts: CardShop[]) => {
  //       console.log('Datos recibidos:', cardPosts);
  //       this.cardShop = cardPosts;
  //     },
  //     error => {
  //       console.error('Error al obtener las CardPosts en la página de artículos:', error);
  //     }
  //   );
  // }
}
