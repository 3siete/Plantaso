import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';


  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  formBuilder = inject(FormBuilder)
  ;
  registerForm: any;

  ngOnInit(): void {
    const registerForm : FormGroup = this.formBuilder.group({
      name : ['',[Validators.required] ],
      lastname : ['', [Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      passoword : ['', [Validators.required, Validators.minLength(7)]]
    })
  }



  onSubmit(){

    console.log(this.registerForm.value)    
  
  } 
}
