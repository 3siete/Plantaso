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
        // Aplica una animación al elemento usando GSAP
        timeline.from(
          htmlElement,
          {
            top: `${htmlElement.offsetHeight / 2 + distance}px`,
            duration: 1,
            ease: 'power3.out'
          },
          '1'
        );
      }
    });
  }
  // Animación de elementos de texto principal
  private animateTextElements(): void {
    // Selecciona el elemento de texto principal 'h1'
    const textH1 = this.elementRef.nativeElement.querySelector('.text h1') as HTMLElement;

    // Verifica si el elemento existe
    if (textH1) {
      // Crea una línea de tiempo GSAP para la animación del texto principal
      const timeline = gsap.timeline();
      timeline
        .from(textH1, {
          // Anima la posición 'y' basada en la posición en la ventana
          y: window.innerHeight - textH1.getBoundingClientRect().top + 200,
          duration: 2
        },
          '2.5');
    }

    // Inicia la animación del subtítulo
    this.animateSubtitle();
  }

  // Animación del subtítulo
  private animateSubtitle(): void {
    // Selecciona el elemento del subtítulo 'h2'
    const textH2 = this.elementRef.nativeElement.querySelector('.text h2') as HTMLElement;

    // Verifica si el elemento existe
    if (textH2) {
      // Crea una línea de tiempo GSAP para la animación del subtítulo
      const timeline = gsap.timeline();
      timeline
        .from(textH2, {
          // Anima la posición 'y' y la opacidad
          y: -150,
          opacity: 0,
          duration: 1.5
        },
          '3');
    }
  }
  // Animación de elementos ocultos
  private animateHiddenElements(): void {
    // Selecciona el elemento oculto
    const hideEl = this.elementRef.nativeElement.querySelector('.hide') as HTMLElement;

  
  }
}


