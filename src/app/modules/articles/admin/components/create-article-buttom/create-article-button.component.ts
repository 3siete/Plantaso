import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtomComponent {
  visible: boolean = false;

  constructor(private fb:FormBuilder){}

  ngOnInit():void{

  }
  showDialog() {
    this.visible = true;
}
}
