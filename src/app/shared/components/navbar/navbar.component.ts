// Importando módulos necesarios de Angular
import { Component, ElementRef, AfterViewInit } from '@angular/core';

// Decorador @Component que define las propiedades del componente
@Component({
  selector: 'app-navbar', // Selector CSS para usar este componente
  templateUrl: './navbar.component.html', // Ruta al archivo HTML del componente
  styleUrls: ['./navbar.component.css'] // Ruta al archivo CSS del componente
})
// Clase del componente Navbar
export class NavbarComponent implements AfterViewInit {
  // Propiedades privadas para almacenar referencias al icono del menú y a la barra de navegación
  private menuIcon?: HTMLElement;
  private navbar?: HTMLElement;

  // Constructor del componente, inyectando la referencia al elemento del componente
  constructor(private el: ElementRef) {}

  // Método del ciclo de vida de Angular que se ejecuta después de que la vista del componente ha sido inicializada
  ngAfterViewInit(): void {
    // Obteniendo referencias a los elementos del icono del menú y la barra de navegación
    this.menuIcon = this.el.nativeElement.querySelector('#menu-icon');
    this.navbar = this.el.nativeElement.querySelector('.navbar');

    // Agregando un evento de clic al icono del menú para llamar a la función toggleMenu
    this.menuIcon?.addEventListener('click', this.toggleMenu.bind(this));
  }

  // Método para alternar (mostrar/ocultar) el menú
  toggleMenu(): void {

  }
}


