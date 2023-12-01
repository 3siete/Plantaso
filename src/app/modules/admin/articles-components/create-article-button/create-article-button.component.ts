import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtonComponent {

  createForm!:FormGroup;

  visible: boolean = false;
  
  showDialog() {
    this.visible = true;  
  }

  constructor(private fb:FormBuilder, private crudService:CrudArticlesService){}

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
      carrusel:['false',Validators.required]
    });
  }

  updateCarruselValue(event: any) {
    this.createForm.get('carrusel')?.setValue(event ? 'true' : 'false');
  }
  

  onSubmit(){
    const value = this.createForm.value;
    console.log(value);
    this.visible=false
    this.crudService.createArticle(value)
    .subscribe(
      ()=>{
        alert('Se añadió el articulo correctamente')
      },
      (error)=>{
        console.error('error al añadir un articulo '+error)
      }
    )
  }
}
