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

  constructor(private router: Router, private redireccion:ArticlesPageComponent){
    this.cardPostData = {
      title: '',
      subtitle: '',
      imgurl: '',
      description: '',
      alt: '',
    }
  }
  seeMore(): void {
    this.redireccion.navigateToArticle}
}

