import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles.model';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';
import { MappingService } from '../../services/mapping.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudArticlesService,
    private slugMap:MappingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const id = this.slugMap.getArticleIdFromSlug(slug);
      if (id) {
        // Llamada al servicio para obtener el artículo por articleId
        this.crudService.getArticleById(id).subscribe(
          article => {
            if (article) {
              console.log('Artículo obtenido:', article);
              // Resto de la lógica para manejar el artículo obtenido
              this.article = article;
            } else {
              console.warn(`No se encontró artículo para el slug: ${slug} y articleId: ${id}`);
              // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
            }
          },
          error => {
            console.error('Error al obtener el artículo:', error);
            // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
          }
        );
      } else {
        console.warn(`No se encontró articleId para el slug: ${slug}`);
      }
    });
}
}