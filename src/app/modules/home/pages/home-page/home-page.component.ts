// Importaciones necesarias
import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    // Inicia la animación de elementos con clase 'img'
    this.animateImgElements();
    
    // Inicia la animación de elementos de texto
    this.animateTextElements();

    // Inicia la animación de elementos ocultos
    this.animateHiddenElements();
  }
  // Animación de elementos con clase 'img'
  private animateImgElements(): void {
    // Selecciona todos los elementos con la clase 'img'
    const imgEls = this.elementRef.nativeElement.querySelectorAll('.img');
    // Crea una línea de tiempo GSAP para las animaciones
    const timeline = gsap.timeline();

    // Itera sobre los elementos seleccionados
    Array.from(imgEls).forEach((el: any) => {
      // Convierte el elemento a tipo HTMLElement
      const htmlElement = el as HTMLElement;
      // Verifica si no tiene la clase 'text'
      if (!htmlElement.classList.contains('text')) {
        // Obtiene la distancia del atributo 'data-distance' o usa 0 si es indefinido
        const distance = parseFloat(htmlElement['dataset']['distance'] || '0');
        
      }
    });
  }
}
