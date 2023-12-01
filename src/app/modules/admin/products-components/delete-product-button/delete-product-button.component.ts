import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-product-button',
  template: `<i class="fa-solid fa-trash fa-2xl" style="color: #ffffff;" (click)="confirmDelete()"></i>`,
})
export class DeleteProductButtonComponent {

}
