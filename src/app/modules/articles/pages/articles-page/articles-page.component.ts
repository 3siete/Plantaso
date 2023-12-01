import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardPost } from 'src/app/models/card-post';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';
import { MappingService } from '../../services/mapping.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  cardPosts: CardPost[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudArticlesService,
    private slugMap: MappingService
  ) {}

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


  // Manejar el evento emitido desde CardPostComponent
  seeMore(articleId: string): void {
    this.crudService.getSlugForArticle(articleId).subscribe(
      slug => {
        if (slug) {
          console.log('hasta aca llega bien no?: ' + slug);
          
          // Navegar a la página de artículo con slug y id
          this.router.navigate(['/articulo', slug]);
        } else {
          console.warn(`No se encontró slug para el articleId: ${articleId}`);
          // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
        }
      },
      error => {
        console.error('Error al obtener el slug:', error);
        // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
      }
    );
  }
}



