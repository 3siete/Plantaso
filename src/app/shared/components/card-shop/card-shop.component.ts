import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardShop } from 'src/app/models/card-shop';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css']
})
export class CardShopComponent {
  
  @Input() cardShopData: CardShop;
  @Output() seeMoreButton: EventEmitter<string> = new EventEmitter<string>();
  constructor(){}

}
