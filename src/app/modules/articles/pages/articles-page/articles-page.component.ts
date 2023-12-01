import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {

  cardPosts: CardPost[] = [];

  ngOnInit(): void {
    this.crudService.getCardPosts().subscribe(
      (cardPosts: CardPost[]) => {
        console.log('Datos recibidos:', cardPosts);
        this.cardPosts = cardPosts;
      },
      error => {
        console.error('Error al obtener las CardPosts en la página de artículos:', error);
      }
    );
      console.log('el id que llega aca es: '+ )
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudArticlesService
  ) {}



 // Método para navegar a la página de artículo completo
  navigateToArticle(articleId: string): void {
  // Obtener el slug para la URL legible (puedes obtener esto desde el servicio o donde sea necesario)
  const slug = this.getSlugForArticle(articleId);

  // Navegar a la página de artículo con slug y campo único
  this.router.navigate(['/articulo', slug, articleId]);
}

// Método de ejemplo para obtener el slug para un artículo (ajusta según tus necesidades)
private getSlugForArticle(articleId: string): string {
  // Aquí puedes llamar a tu servicio o lógica para obtener el slug correspondiente al campo único
  // Por ejemplo, puedes hacer otra llamada al servicio para obtener el artículo y luego extraer el slug
  // Aquí, solo estoy devolviendo un slug básico para propósitos de demostración
  return 'slug-for-' + articleId;
}

}
