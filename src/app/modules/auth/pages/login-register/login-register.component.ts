import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  // Obtener una referencia al elemento con la clase 'container' en el HTML
  @ViewChild('container') container!: ElementRef;
  // Obtener una referencia al elemento con el id 'sign-in-btn' en el HTML
  @ViewChild('sign_in_btn') signInBtn!: ElementRef;
 
}
