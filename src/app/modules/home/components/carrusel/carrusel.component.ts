import { Component,Input } from '@angular/core';
import { CardPost } from 'src/app/models/card-post';
@Component({
  selector: 'app-carrusel',
  template: `
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cardjuntas" style="display: flex; ">
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      </div>
    </div>
    <div class="carousel-item">
    <div class="cardjuntas" style="display: flex;">
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      </div>    </div>
    <div class="carousel-item">
    <div class="cardjuntas" style="display: flex;">
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      <app-card-carr></app-card-carr>
      </div>    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style="color: black;">
    <span class="carousel-control-next-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`,
})
export class CarruselComponent {
  
  @Input() items:CardPost[]=[];
}

