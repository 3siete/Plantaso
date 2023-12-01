import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles.model';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudArticlesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      console.log('articleId:', slug);
      if (slug) {
        this.crudService.getArticleBySlug(slug).subscribe(
          article => {
            console.log('Artículo obtenido:', article);
            this.article = article;
          },
          error => {
            console.error('Error al obtener el artículo:', error);
            // Puedes manejar el error según tus necesidades
          }
        );
      }
    });
}

}