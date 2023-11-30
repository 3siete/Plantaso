import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/articles.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
articleData:Article

constructor(){}
}
