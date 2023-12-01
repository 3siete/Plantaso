import { Component } from '@angular/core';
import { CardShop } from 'src/app/models/card-shop';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
cardShop:CardShop[] = [];
constructor(){}
}
