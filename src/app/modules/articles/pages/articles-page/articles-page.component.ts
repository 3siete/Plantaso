import { Component } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

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
