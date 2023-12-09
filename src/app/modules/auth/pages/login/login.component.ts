// Importaciones necesarias de Angular y otras librerías
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Herramientas para formularios reactivos
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación personalizado
import { Message, MessageService } from 'primeng/api'; // Servicio de mensajes de PrimeNG para notificaciones
import { Router } from '@angular/router'; // Servicio de enrutamiento de Angular

// Decorador Component que define metadatos y configuraciones para el componente
@Component({
  selector: 'app-login', // Selector CSS para usar este componente
  templateUrl: './login.component.html', // Plantilla HTML del componente
  styleUrls: ['./login.component.css'], // Hojas de estilo específicas del componente
  providers: [MessageService] // Proveedores de servicios específicos del componente
})
export class LoginComponent {
  // Constructor para inyectar dependencias
  constructor(
    private fb: FormBuilder, // FormBuilder para construir el formulario reactivo
    private authService: AuthService, // Servicio de autenticación para manejar el inicio de sesión
    private mensaje: MessageService, // MessageService para mostrar notificaciones
    public router: Router // Router para la navegación
  ){}
  
  // Definición del formulario reactivo
  loginForm!: FormGroup;
  
  // Método ngOnInit se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Inicialización del formulario reactivo con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]], // Campo 'email' es obligatorio
      password: ['', [Validators.required, Validators.minLength(7)]] // Campo 'password' es obligatorio y debe tener al menos 7 caracteres
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(){
    const value = this.loginForm.value; // Obtener los valores del formulario
    this.authService.login(value).then(res => {
      console.log(res); // Imprimir la respuesta en consola
      this.router.navigate(['inicio']); // Navegar a la página de inicio en caso de éxito
    })
    .catch(error => {
      this.router.navigate(['register']); // Navegar a la página de registro en caso de error
    });
  }

  // Método para mostrar un mensaje de éxito
  show() {
    // Agregar un mensaje de éxito al servicio de mensajes
    this.mensaje.add({ severity: 'success', summary: 'Hola', detail: 'Bienvenido', life: 3000 });
  }
}
