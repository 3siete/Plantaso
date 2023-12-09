// Importaciones necesarias de Angular y otras librerías
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Herramientas para formularios reactivos
import { Message, MessageService } from 'primeng/api'; // Servicio de mensajes de PrimeNG para notificaciones
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación personalizado
import { Router } from '@angular/router'; // Servicio de enrutamiento de Angular

// Decorador Component que define metadatos y configuraciones para el componente
@Component({
  selector: 'app-register', // Selector CSS para usar este componente
  templateUrl: './register.component.html', // Plantilla HTML del componente
  styleUrls: ['./register.component.css'], // Hojas de estilo específicas del componente
  providers: [MessageService] // Proveedores de servicios específicos del componente
})
export class RegisterComponent {  
  // Constructor para inyectar dependencias
  constructor(
    private fb: FormBuilder, // FormBuilder para construir el formulario reactivo
    private authService: AuthService, // Servicio de autenticación para manejar el registro
    public router: Router, // Router para la navegación
    private mensaje: MessageService // MessageService para mostrar notificaciones
  ){}

  // Definición del formulario reactivo
  registerForm!: FormGroup;

  // Método ngOnInit se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Inicialización del formulario reactivo con validaciones
    this.registerForm = this.fb.group({
      name : ['', Validators.required ], // Campo 'name' es obligatorio
      lastname : [''], // Campo 'lastname' es opcional
      email : ['', [Validators.required, Validators.email]], // Campo 'email' es obligatorio y debe ser un email válido
      password : ['', [Validators.required, Validators.minLength(7)]] // Campo 'password' es obligatorio y debe tener al menos 7 caracteres
    })
  }
  
  // Método para manejar el envío del formulario
  onSubmit(){
    // Extraer valores del formulario
    const { name, lastname, email, password } = this.registerForm.value;
    
    // Llamar al servicio de autenticación para registrar al usuario
    this.authService.register({email, password})
    .then((res) => {
      // Establecer los datos del usuario en Firestore y navegar a la página de inicio
      this.authService.SetUserData(res.user, {name, lastname, email});
      this.router.navigate(['/inicio']);
    })
    .catch(error => {
      console.error(error); // Manejar errores de registro
    });
  } 

  // Método para mostrar un mensaje de éxito
  show() {
    // Agregar un mensaje de éxito al servicio de mensajes
    this.mensaje.add({ severity: 'success', summary: 'Listo', detail: 'Bienvenido a Plantaso', life: 3000 });
  }
}
