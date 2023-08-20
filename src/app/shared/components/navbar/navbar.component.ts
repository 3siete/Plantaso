import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
burgerBtn:boolean = false

responsiveMenu(){
  if(this.burgerBtn === false){
    this.burgerBtn = true;
  }else{
    this.burgerBtn = false;
  }
}

}
