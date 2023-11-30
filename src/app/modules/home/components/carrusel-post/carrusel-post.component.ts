import { Component, OnInit } from '@angular/core';
import { CrudArticlesService } from 'src/app/modules/admin/services/crud-articles.service';
import { CardPost } from 'src/app/models/card-post';
import 'bootstrap';
import '@popperjs/core';

@Component({
  selector: 'app-carrusel-post',
  templateUrl: './carrusel-post.component.html',
  styleUrls: ['./carrusel-post.component.css']
})
export class CarruselPostComponent implements OnInit {
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
