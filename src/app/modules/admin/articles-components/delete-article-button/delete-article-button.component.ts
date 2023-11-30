import { Component, Input } from '@angular/core';
import { CrudArticlesService } from '../../services/crud-articles.service';

@Component({
  selector: 'app-delete-article-button',
  template: `<i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;"></i>`,
  styleUrls: ['./delete-article-button.component.css']
})
export class DeleteArticleButtonComponent {
  @Input() articleId!: string;

  constructor(private crudService:CrudArticlesService){}

  confirmDelete(): void {
    const confirmation = window.confirm('¿Estás seguro de que quieres eliminar este artículo?');
    if (confirmation) {
      this.crudService.deleteArticle(this.articleId).subscribe(
        () => console.log('Artículo eliminado con éxito'),
        error => console.error('Error al eliminar el artículo', error)
      );
    }
  }
}
