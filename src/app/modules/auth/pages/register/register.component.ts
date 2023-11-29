import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})

export class RegisterComponent {  
  constructor(private fb:FormBuilder,
    private authService: AuthService,
    public router: Router,
    private mensaje: MessageService ){}

  registerForm!:FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['',Validators.required ],
      lastname : [''],
      email : ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(7)]]
    })
  }
  
  onSubmit(){
    const { name, lastname, email, password } = this.registerForm.value;
    
    this.authService.register({email, password})
    .then((res) => {
      this.authService.SetUserData(res.user, {name, lastname, email});
      this.router.navigate(['/inicio'])
    })
    .catch(error => {console.error(error)})
    } 
    show() {
      this.mensaje.add({ severity: 'success', summary: 'Listo', detail: 'Bienvenido a Plantaso', life:3000 });
    }
}

