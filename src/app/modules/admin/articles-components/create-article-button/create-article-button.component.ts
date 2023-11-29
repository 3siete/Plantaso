import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtonComponent {

  createForm!:FormGroup;



  constructor(private fb:FormBuilder, private crudService:CrudArticlesService){}
}
