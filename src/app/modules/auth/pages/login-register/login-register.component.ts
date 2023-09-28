import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  // Obtener una referencia al elemento con la clase 'container' en el HTML
  @ViewChild('container') container!: ElementRef;
 
}
