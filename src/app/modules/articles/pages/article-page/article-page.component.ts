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
  article!: Article; // Ajusta el tipo según tu modelo de datos

  constructor(
    private route: ActivatedRoute,
    private articleService: CrudArticlesService // Asume que tienes un servicio para manejar los datos de los artículos
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const articleSlug = params.get('nombreArticulo');
      this.loadArticle(articleSlug);
    });
  }

  private loadArticle(slug: string | null): void {
    if (slug) {
      // Aquí, realiza la lógica para cargar el artículo basado en el slug
      // Por ejemplo, puedes llamar a un servicio que haga una solicitud HTTP para obtener los datos del artículo
      this.articleService.getArticleBySlug(slug).subscribe(
        data => {
          this.article = data!;
        },
        error => {
          console.error('Error al cargar el artículo', error);
        }
      );
    }
  }
}
