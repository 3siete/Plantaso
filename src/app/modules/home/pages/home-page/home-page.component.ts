import { Component, OnInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit(): void {
    // Selecciona todos los elementos con la clase CSS 'parallax-el' dentro del componente actual.
    const parallaxEls = this.elementRef.nativeElement.querySelectorAll('.parallax-el');
  }
}
