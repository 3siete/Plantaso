import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Message, MessageService } from 'primeng/api';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private mensaje: MessageService,
    public router: Router){}
  loginForm!:FormGroup;

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }
  onSubmit(){
    const value = this.loginForm.value;
    this.authService.login(value).then(res => {
      console.log(res)
      this.router.navigate(['/inicio'])
    })
    .catch(error => {console.error(error)})
    }

  show() {
    this.mensaje.add({ severity: 'success', summary: 'Hola', detail: 'Bienvenido', life:3000 });
  }

}
