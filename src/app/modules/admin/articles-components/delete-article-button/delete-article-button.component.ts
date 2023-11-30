import { Component } from '@angular/core';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-delete-article-button',
  template: `<i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;"></i>`,
  styleUrls: ['./delete-article-button.component.css']
})
export class DeleteArticleButtonComponent {

  constructor(private crudService:CrudArticlesService){}
}
