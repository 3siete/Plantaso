import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  visible: boolean = false;


  constructor(){}
  
  
  showDialog() {
      this.visible = true;
  }


}
