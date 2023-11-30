import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-update-article-button',
  templateUrl: './update-article-button.component.html',
  styleUrls: ['./update-article-button.component.css']
})
export class UpdateArticleButtonComponent {
  @Input() articleId!: string; // ID del artículo a editar

  constructor(private fb: FormBuilder, private crudService: CrudArticlesService){}

  ngOnInit():void{
    
  }
}
