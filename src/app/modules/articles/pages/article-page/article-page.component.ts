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
    private articleService: CrudArticlesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        // Llamar al servicio para obtener el artículo por id
        this.articleService.getArticleById(id).subscribe(
          (article) => {
            this.article = article;
          },
          (error) => {
            console.error('Error al obtener el artículo:', error);
            // Puedes manejar el error según tus necesidades
          }
        );
      }
    });
  }
}
