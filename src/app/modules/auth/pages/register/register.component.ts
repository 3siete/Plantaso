import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder)

signUpForm: FormGroup;


  constructor(){
    this.signUpForm = this.formBuilder.group({
      names: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      lastName: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
      email: this.formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: this.formBuilder.control('', {
        validators: Validators.required,
        nonNullable: true,
      }),
    })
  }
  onSubmit(){

  }

}
