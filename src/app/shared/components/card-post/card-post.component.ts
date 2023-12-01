import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { ArticlesPageComponent } from 'src/app/modules/articles/pages/articles-page/articles-page.component';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {
  @Input() cardPostData: CardPost;
  @Output() seeMore: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router ){
    this.cardPostData = {
      title: '',
      subtitle: '',
      imgurl: '',
      description: '',
      alt: '',
    }
  }

  seeMoreClicked(): void {
    // Aquí, deberías tener acceso al id del artículo asociado a esta tarjeta
    const articleId = this.cardPostData.articleId;

    // Emitir el evento seeMore con el id del artículo
    this.seeMore.emit(articleId);
  }
}

