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


}


