import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  visible: boolean = false;
  
  createForm!: FormGroup;


  constructor(private fb:FormBuilder,){}

  ngOnInit():void{
    
  }
  
  
  showDialog() {
      this.visible = true;
  }


}
