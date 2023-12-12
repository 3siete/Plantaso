// Importa los módulos necesarios desde Angular Core para la creación de componentes y la entrada de datos.
import { Component, Input } from '@angular/core';

// Importa el servicio CrudArticlesService para realizar operaciones CRUD relacionadas con artículos.
import { CrudArticlesService } from '../../services/crud-articles.service';

// Importa el módulo Router de Angular para la navegación.
import { Router } from '@angular/router';

// Define el componente y sus metadatos.
@Component({
  // Selector que se utilizará para incorporar este componente en la plantilla.
  selector: 'app-delete-article-button',
  // Plantilla del componente que incluye un icono de basura y maneja el clic para confirmar la eliminación.
  template: `<i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;" (click)="confirmDelete()"></i>`,
})
export class DeleteArticleButtonComponent {
  // Decorador @Input() para recibir el identificador del artículo como entrada desde el componente padre.
  @Input() articleId!: string;

  // Constructor del componente, se ejecuta al instanciar el componente.
  constructor(private crudService: CrudArticlesService, private router: Router) {}

  // Método para confirmar la eliminación de un artículo.
  confirmDelete(): void {
    // Muestra un cuadro de confirmación en el navegador.
    const confirmation = window.confirm('¿Estás seguro de que quieres eliminar este artículo?');
    
    // Verifica si el usuario confirmó la eliminación.
    if (confirmation) {
      // Llama al servicio para eliminar el artículo utilizando el identificador proporcionado.
      this.crudService.deleteArticle(this.articleId).subscribe(
        () => {
          // Mensaje en la consola si la eliminación fue exitosa.
          console.log('Artículo eliminado con éxito');
          
          // Navega a la ruta 'articulo' después de la eliminación.
          this.router.navigate(['articulo']);
        },
        // Manejo de errores en caso de fallo al eliminar el artículo.
        error => console.error('Error al eliminar el artículo', error)
      );
    }
  }
}
