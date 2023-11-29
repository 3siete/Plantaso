import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  totalStock: number = 726; // Ejemplo de total de stock
  selectedQuantity: number = 1;
  availableQuantities: number[]; // Rango de cantidades disponibles para seleccionar

  constructor() {
    this.availableQuantities = Array.from({ length: this.totalStock }, (_, i) => i + 1);
  }
// Asegúrate de que estás manejando el evento de esta manera:
onQuantityChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedQuantity = Number(selectElement.value); // Esto convierte el valor de la cadena a un número
}

  
}
