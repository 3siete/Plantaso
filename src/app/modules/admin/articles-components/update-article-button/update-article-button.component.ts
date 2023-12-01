import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudArticlesService } from '../../services/crud-articles.service';
import { Article } from 'src/app/models/articles.model';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

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
  updatingForm = false;
  private unsubscribe$ = new Subject<void>();
  
  showDialog() {
    this.loadArticleData(this.articleId);
    this.visible = true;  
  }
  constructor(private fb: FormBuilder,
    private crudService: CrudArticlesService,
    private router: Router){}

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
      carrusel:['false',Validators.required]
    });
  }
  
  updateCarruselValue(event: any) {
    this.updateForm.get('carrusel')?.setValue(event ? 'true' : 'false');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadArticleData(articleId: string): void {
    this.isLoading = true;
    this.crudService.getArticleById(articleId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (article: Article | null) => {
          if (article) {
            // Desactivar temporalmente el controlador de cambios
            this.updatingForm = true;
            this.updateForm.patchValue(article);
            this.updatingForm = false;
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
      this.crudService.updateArticle(this.articleId, updatedArticle)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          () => {
            console.log('Article updated successfully');
            this.isLoading = false;
            this.router.navigate(['articulo']);
          },
          error => {
            console.error('Error updating article', error);
            this.isLoading = false;
          }
        );
    }
  }
}
