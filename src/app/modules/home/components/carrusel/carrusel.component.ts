import { Component } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';
@Component({
  selector: 'app-carrusel',
  template: `
    <p-carousel [value]="items">
      <ng-template pTemplate="item" let-item>
        <app-card-post [cardPostData]="item" />
      </ng-template>
    </p-carousel>
`,
})
export class CarruselComponent {
  items=[]
}
