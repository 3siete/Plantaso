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
    public router: Router ){}

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
    const value = this.registerForm.value;
    
    this.authService.register(value)
    .then(res => {
      console.log(res)
      this.router.navigate(['/inicio'])
    })
    .catch(error => {console.error(error)})
    } 

}

