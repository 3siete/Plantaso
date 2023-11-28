import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtomComponent {
  visible: boolean = false;

  constructor(private fb:FormBuilder){}
  showDialog() {
    this.visible = true;
}
}
