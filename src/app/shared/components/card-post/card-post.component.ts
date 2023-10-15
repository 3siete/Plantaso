import { Component, Input } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {
  @Input() cardData: CardPost;

  constructor(){
    this.cardData = {
      title: '',
      subtitle:'',
      imgURL:'',
      description:'',
      
    }
  }
}
