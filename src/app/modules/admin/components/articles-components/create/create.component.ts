import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  visible: boolean = false;


  constructor(private fb:FormBuilder,){}

  ngOnInit():void{
    
  }
  
  
  showDialog() {
      this.visible = true;
  }


}
