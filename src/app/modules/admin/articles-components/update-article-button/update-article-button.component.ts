import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-update-article-button',
  templateUrl: './update-article-button.component.html',
  styleUrls: ['./update-article-button.component.css']
})
export class UpdateArticleButtonComponent {
  @Input() articleId!: string; // ID del artículo a editar
  updateForm!: FormGroup
  isLoading=false
  constructor(private fb: FormBuilder, private crudService: CrudArticlesService){}

  ngOnInit():void{
    this.updateForm = this.fb.group({
      imgurl: ['', [Validators.required,]],
      alt: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      reproduction: ['', [Validators.required]],
      care: ['', [Validators.required]],
      tips: ['', [Validators.required]],
      characteristic: ['', [Validators.required]],
      pests: ['', [Validators.required]],
      insecticides: ['', [Validators.required]],
    });
  }
  if(this.articleId){
      }
}
