import { Component } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {

  cardPosts: CardPost[] = [];

  constructor(private crudService: CrudArticlesService) {}

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

}
