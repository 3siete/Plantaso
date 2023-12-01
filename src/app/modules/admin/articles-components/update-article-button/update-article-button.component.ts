import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';
import { Article } from 'src/app/models/articles.model';

@Component({
  selector: 'app-update-article-button',
  templateUrl: './update-article-button.component.html',
  styleUrls: ['./update-article-button.component.css']
})
export class UpdateArticleButtonComponent {
  @Input() articleId!: string; // ID del artículo a editar
  updateForm!: FormGroup
  isLoading=false
  visible: boolean = false;
  
  showDialog() {
    this.visible = true;  
  }
  constructor(private fb: FormBuilder, private crudService: CrudArticlesService){}

  ngOnInit():void{
    this.updateForm = this.fb.group({
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
  

  loadArticleData(articleId: string): void {
    this.isLoading = true;
    this.crudService.getArticleById(articleId).subscribe(
      (article: Article | null) => {
        if (article) {
          this.updateForm.patchValue(article);
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error loading article', error);
        this.isLoading = false;
      }
    );
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.isLoading = true;
      const updatedArticle: Article = this.updateForm.value;
      this.crudService.updateArticle(this.articleId, updatedArticle).subscribe(
        () => {
          console.log('Article updated successfully');
          this.isLoading = false;
          // Agrega aquí cualquier lógica adicional necesaria
        },
        error => {
          console.error('Error updating article', error);
          this.isLoading = false;
        }
      );
    }
  }
}
