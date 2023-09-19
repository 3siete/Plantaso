import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

interface SignUpForm {
  names: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  formBuilder = inject(FormBuilder)

  form: FormGroup<SignUpForm> = this.formBuilder.group({
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
  });

  onSubmit(){
    if (this.form.valid) return;
    console.log(this.form.value)    
  } 
}
