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
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudArticlesService
  ) {}

// Manejar el evento emitido desde CardPostComponent
SeeMore(articleId: string): void {
  // Aquí puedes hacer lo que necesites con el articleId, como navegar a la página del artículo
  console.log('ID del artículo emitido:', articleId);

  // Ejemplo de cómo puedes navegar a la página de artículo
  const slug = this.crudService.getSlugForArticle(articleId);
  this.router.navigate(['/articulo', slug]);
  console.log('lkadsjflkajsd: que hago: '+slug)
}


}
