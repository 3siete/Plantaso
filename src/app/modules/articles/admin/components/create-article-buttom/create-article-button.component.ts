import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article-button',
  templateUrl: './create-article-button.component.html',
  styleUrls: ['./create-article-button.component.css']
})
export class CreateArticleButtomComponent {
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
}
}
