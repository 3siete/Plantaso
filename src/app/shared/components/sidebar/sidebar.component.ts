import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
hover:boolean = false;

  mouseover(){
    if(this.hover === false){
      this.hover = true
      console.log('true')
    }else{
      this.hover = false
      
      console.log('false')
    }
  }

}