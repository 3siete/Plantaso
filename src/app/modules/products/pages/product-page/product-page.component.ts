import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { CrudProductsService } from 'src/app/modules/admin/services/crud-products.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  totalStock: number = 726; // Ejemplo de total de stock
  selectedQuantity: number = 1;
  availableQuantities: number[]; // Rango de cantidades disponibles para seleccionar

  product:Products | null= null

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudProductsService,
    private slugMap:ProductsService
  ) {
    this.availableQuantities = Array.from({ length: this.totalStock }, (_, i) => i + 1);
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const id = this.slugMap.getProductIdFromSlug(slug);
      if (id) {
        // Llamada al servicio para obtener el producto por productId
        this.crudService.getProductById(id).subscribe(
          (product: Products | null) => {
            if (product) {
              console.log('Producto obtenido:', product);
              // Resto de la lógica para manejar el producto obtenido
              this.product = product;
            } else {
              console.warn(`No se encontró producto para el slug: ${slug} y productId: ${id}`);
              // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
            }
          },
          error => {
            console.error('Error al obtener el producto:', error);
            // Manejar según tus necesidades (por ejemplo, mostrar un mensaje de error)
          }
        );
      } else {
        console.warn(`No se encontró productId para el slug: ${slug}`);
      }
    });
  }
  


// Asegúrate de que estás manejando el evento de esta manera:
onQuantityChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedQuantity = Number(selectElement.value); // Esto convierte el valor de la cadena a un número
}

  
}
