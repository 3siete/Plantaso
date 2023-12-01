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
      const id = params['id'];
      const slug = params['slug'];

      if (id && slug) {
        // Validar el slug aquí si es necesario
        this.crudService.getArticleById(id).subscribe(
          article => {
            // Verificar que el slug coincida
            if (article && article.slug === slug) {
              this.article = article;
            } else {
              console.warn('El slug no coincide con el artículo');
              // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
            }
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

