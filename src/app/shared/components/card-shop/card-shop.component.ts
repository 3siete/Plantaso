import { Component, Input } from '@angular/core';
import { CardShop } from 'src/app/models/card-shop';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css']
})
export class CardShopComponent {
  @Input() cardShopData: CardShop;

  constructor(){
    this.cardShopData = {
      title: '',
      imgURL: '',
      description: '',
      price: 0,
    }
  }
}
