import { Component, Input } from '@angular/core';
import { CrudArticlesService } from '../../services/crud-articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-article-button',
  template: `<i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;" (click)="confirmDelete()"></i>`,
})
export class DeleteArticleButtonComponent {
  @Input() articleId!: string;

  constructor(private crudService:CrudArticlesService, private router:Router){}

  confirmDelete(): void {
    const confirmation = window.confirm('¿Estás seguro de que quieres eliminar este artículo?');
    if (confirmation) {
      this.crudService.deleteArticle(this.articleId).subscribe(
        () => {
          console.log('Artículo eliminado con éxito');
          this.router.navigate(['articulo']);
      },
        error => console.error('Error al eliminar el artículo', error)
      );
    }
  }
}
