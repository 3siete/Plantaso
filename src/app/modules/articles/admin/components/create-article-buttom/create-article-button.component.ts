import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtonComponent {
  visible: boolean = false;

  createForm!: FormGroup;
  constructor(
    private fb:FormBuilder,
    private crudService: CrudArticlesService){}

  ngOnInit():void{
    this.createForm = this.fb.group({
      imgURL: ['', [Validators.required,]],
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

  showDialog() {
    this.visible = true;
}

onSubmit(){
  const value = this.createForm.value;
  console.log(value);
  this.visible=false
  this.crudService.createArticle(value)
  .subscribe(
    () => {
      alert('Ha agregado un nuevo producto con éxito :)');
    },
    (error) => {
      alert('Hubo un error al cargar nuevo producto :( \n' + error);
    }
  );
}
}
