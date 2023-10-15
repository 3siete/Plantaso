import { Component } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';
@Component({
  selector: 'app-carrusel',
  template: `
  <p-carousel [value]="items">
    
  </p-carousel>
`,
})
export class CarruselComponent {
  items=[]
}
