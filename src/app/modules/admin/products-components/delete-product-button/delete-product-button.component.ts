import { Component } from '@angular/core';
import { CrudProductsService } from '../../services/crud-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product-button',
  template: `<i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;" (click)="confirmDelete()"></i>`,
})
export class DeleteProductButtonComponent {
  @Input() productId!: string;

  constructor(private crudService: CrudProductsService, private router: Router) {}

  confirmDelete(): void {
    const confirmation = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (confirmation) {
      this.crudService.deleteProduct(this.productId).subscribe(
        () => {
          console.log('Producto eliminado con éxito');
          this.router.navigate(['producto']);
        },
        error => console.error('Error al eliminar el producto', error)
      );
    }
  }
}
