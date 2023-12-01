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
  constructor(){
    this.cardShopData={
    productId:'',
    title:'',
    slug:'',
    description:'',
    imgURL:'',
    price: '',
    alt:'',
    
    }
  }
  seeMore(): void {
    // Aquí, deberías tener acceso al id del artículo asociado a esta tarjeta
    const productId = this.cardShopData.productId;

    // Emitir el evento seeMore con el id del artículo
    this.seeMoreButton.emit(productId);
    console.log('cuando se emite' + productId);
  }
}
