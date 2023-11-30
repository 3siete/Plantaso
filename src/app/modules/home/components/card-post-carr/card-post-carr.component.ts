import { Component, Input } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';

@Component({
  selector: 'app-card-post-carr',
  templateUrl: './card-post-carr.component.html',
  styleUrls: ['./card-post-carr.component.css']
})
export class CardPostCarrComponent {
  @Input() cardPostData: CardPost;

  constructor(){
    this.cardPostData = {
      title: '',
      subtitle: '',
      imgurl: '',
      description: '',
      alt: '',
    }
  }
}
