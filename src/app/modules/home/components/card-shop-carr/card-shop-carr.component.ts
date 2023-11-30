import { Component, Input } from '@angular/core';
import { CardShop } from 'src/app/models/card-shop';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-shop-carr.component.html',
  styleUrls: ['./card-shop-carr.component.css']
})
export class CardShopCarrComponent {
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
