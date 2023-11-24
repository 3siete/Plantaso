import { Component } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {
  cardPosts: CardPost[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
   
  }
}
