import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: CrudArticlesService
  ) {}

  // Ejemplo de cómo puedes navegar a una página de artículo
  navigateToArticle(articleId: string): void {
    // Obtener el slug para la URL legible (puedes obtener esto desde el servicio o donde sea necesario)
    const slug = this.getSlugForArticle(articleId);

    // Navegar a la página de artículo con slug y id
    this.router.navigate(['/articulo', slug, articleId]);
  }

  // Ejemplo de cómo puedes obtener el slug para un artículo (puedes ajustar esto según tus necesidades)
  private getSlugForArticle(articleId: string): string {
    // Aquí puedes llamar a tu servicio o lógica para obtener el slug correspondiente al id
    // Por ejemplo, puedes hacer otra llamada al servicio para obtener el artículo y luego extraer el slug
    // Aquí, solo estoy devolviendo un slug básico para propósitos de demostración
    return 'slug-for-' + articleId;
  }

}
