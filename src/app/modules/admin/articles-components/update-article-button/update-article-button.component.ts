import { Component } from '@angular/core';
import { Article } from 'src/app/models/articles.model';

@Component({
  selector: 'app-update-article-button',
  templateUrl: './update-article-button.component.html',
  styleUrls: ['./update-article-button.component.css']
})
export class UpdateArticleButtonComponent {
  selectedArticle: Article | null = null;


}
