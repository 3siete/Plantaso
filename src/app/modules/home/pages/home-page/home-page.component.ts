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

  }
}
