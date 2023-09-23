import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Message, MessageService } from 'primeng/api';


  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {
  
  constructor(private fb:FormBuilder){}

  registerForm!:FormGroup;


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : ['',[Validators.required] ],
      lastname : ['', [Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(7)]]
    })

    
  }



  onSubmit(){
    console.log(this.registerForm.value)

  } 
}
