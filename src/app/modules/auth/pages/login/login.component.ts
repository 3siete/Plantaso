import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private mensaje: MessageService){}
  loginForm!:FormGroup;

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }
  onSubmit(){
    const value = this.loginForm.value;
    this.authService.login(value)
    console.log(this.loginForm.value)
  }
  show() {
    this.mensaje.add({ severity: 'success', summary: 'Hola', detail: 'Bienvenido', life:3000 });
  }
}
