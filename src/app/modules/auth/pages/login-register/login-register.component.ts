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
  // Obtener una referencia al elemento con el id 'sign-up-btn' en el HTML
  @ViewChild('sign_up_btn') signUpBtn!: ElementRef;

  // Este método se ejecuta después de que los elementos del componente se inicializan
  ngAfterViewInit() {
    // Agregar un event listener al botón de inicio de sesión
    this.signInBtn.nativeElement.addEventListener('click', () => {
      // Cuando se hace clic en el botón de inicio de sesión, se elimina la clase 'sign-up-mode' del contenedor
      this.container.nativeElement.classList.remove('sign-up-mode');
    });

    // Agregar un event listener al botón de registro
    this.signUpBtn.nativeElement.addEventListener('click', () => {

    });
  }
}
