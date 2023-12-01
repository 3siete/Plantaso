import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  constructor(crudService:CrudArticlesService){}
}
